import { useEffect, useState } from "react"

const Agencies = () => {
  const [data, setData] = useState([])
  const [year, setYear] = useState()
  const [quarter, setquarter] = useState()

  function formatData(ndata){
    const temp = []
    console.log(ndata)
    ndata.forEach(element => {
      temp.push(element)
    });
    console.log(ndata[0])
    setYear(temp[0]['active_fy'])
    setquarter(temp[0]['active_fq'])
    setData(temp)
  }

  async function getData(){
    await fetch('https://api.usaspending.gov/api/v2/references/toptier_agencies')
    .then((response) => response.json())
    .then((json) => formatData(json.results))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
  }

  useEffect(() => {getData()},[year])

  return ( 
    <div>
      <h1 className="centered">Agency Spending</h1>
        {data && <div className="centered">Fiscal Year: {year} | Fiscal Quarter: {quarter}</div>}
      <table className="records">
        <tr>
          <th><abbr></abbr>Agency Name</th>
          <th>Abbreviation</th>
          <th><abbr title='A federal agency is only allowed to spend money if Congress provides the authority by law for that spending. That permission to spend is called “budget authority.”'>Budget Authority</abbr></th>
          <th><abbr title="The amount of money that an agency has promised to pay, usually because the agency has signed a contract, awarded a grant, or placed an order for goods or services.">Obligated Amount</abbr></th>
          <th><abbr title="An outlay occurs when federal money is actually paid out, not just promised to be paid (&quot;obligated&quot;).">Outlay Amount</abbr></th>
          
        </tr>
        {data.map((item, i) => {
          return (
            <tr>
              <td key={i}><a href={item['congressional_justification_url']}>{item['agency_name']}</a></td>
              <td key={i}>{item['abbreviation']}</td>
              <td>${Intl.NumberFormat().format(item['budget_authority_amount'])}</td>
              <td>${Intl.NumberFormat().format(item['obligated_amount'])}</td>
              <td>${Intl.NumberFormat().format(item['outlay_amount'])}</td>
            </tr>
          )
        })}

      </table>
    </div>

  );
}
 
export default Agencies;