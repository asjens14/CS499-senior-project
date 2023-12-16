import { useEffect,useState } from "react";

const Home = () => {
  const [debtAmount,setDebtAmount] = useState('');
  const [debtDate,setDebtDate] = useState('');
  const [data,setData] = useState([]);

  const getDebt = async () => {
    await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?filter=record_date:gte:2018-11-18&sort=-record_date&page[number]=1&page[size]=5')
      .then((response) => response.json())
      .then((json) => {
        setDebtDate(json['data'][0]['record_date'])
        setDebtAmount(Number((json['data'][0]['tot_pub_debt_out_amt'])).toLocaleString())
        
        let tempData = []
        for (let i = 0; i < 5; i++){
          tempData.push({date:json['data'][i]['record_date'],amt:Number((json['data'][i]['tot_pub_debt_out_amt'])).toLocaleString()})
        }
        setData(tempData)

      })
      .catch((error) => console.error(`Error fetching data: ${error.message}`));
  }

  useEffect(() => {
    getDebt()
  })

  return ( 
    <div>
      <div className="debt-info">
        <h1>Current Federal Debt</h1>
        <div className="debt-date">Debt as of {debtDate}</div>
        <h4>Debt Amount</h4>
        <div className="debt-amt">${debtAmount}</div>
        <h4>Source</h4>
        <div className="source">https://fiscaldata.treasury.gov</div>
        <br />
        <h4>Past 5 Days</h4>
        <table className="records">
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          {data.map((record, i) => {
            return(
            <tr>
              <td>{record.date}</td>
              <td>${record.amt}</td>
            </tr>
          )})}
        </table>
      </div>
    </div> 
    );
}
 
export default Home;