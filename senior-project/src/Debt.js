import { useEffect, useState } from "react";

const Debt = () => {
  const [data,setData] = useState([])
  const [first,setFirst] = useState("&page%5Bnumber%5D=1&page%5Bsize%5D=10")
  const [prev,setPrev] = useState(null)
  const [next,setNext] = useState("&page%5Bnumber%5D=2&page%5Bsize%5D=10")
  const [last,setLast] = useState("&page%5Bnumber%5D=770&page%5Bsize%5D=10")

  async function getData(link){
    
    console.log(link)
    await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&format=json'+link)
    .then((response) => response.json())
    .then((json => {
      // console.log(results)
      
      setPrev(json['links']['prev'])
      setNext(json['links']['next'])
      setLast(json['links']['last'])
      
      let tempData = [];
      for (let i = 0; i < json['data'].length; i++){
        tempData.push({date:json['data'][i]['record_date'],amt:Number((json['data'][i]['tot_pub_debt_out_amt'])).toLocaleString()})
      }
      setData(tempData)

      }))
      .catch((error) => console.error(`Error fetching data: ${error.message}`))
      console.log(data)
  }

  useEffect(()=>{getData(first)},[first])

  return (
    <div className="records">
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
      <button className="btn" onClick={()=> getData(first)}>&lt;&lt;</button> 
      <button className="btn" disabled={prev == null} onClick={()=> getData(prev)}>&lt;</button><span> | </span>
      <button className="btn" disabled={next == null} onClick={()=> getData(next)}>&gt;</button> 
      <button className="btn" onClick={()=> getData(last)}>&gt;&gt;</button>
    </div>
  );
}
 
export default Debt;