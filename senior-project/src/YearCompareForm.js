import { useState,useEffect } from "react";
import Graph from "./Graph";

const YearCompareForm = () => {
  // const [year,setYear] = useState(null);
  const [ndata,setData] = useState([]);
  const [state,setState] = useState('AK')

  let year = 2008;
  let index = 0;

    async function getData(e) {
      e.preventDefault();
      let data=[]
      
      // fetch(url);
      await fetch('https://api.usaspending.gov/api/v2/search/spending_over_time/',{
        method:'POST',
    
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "group": "fiscal_year",
            "filters": {
                "place_of_performance_locations":[{"country":"USA","state":state}],
                "time_period":[{"start_date":"2007-10-01","end_date":"2024-09-30"}]
            }
        })})
      .then((response) => response.json())
      .then((json) => {
        // TODO: parse data
        
        let res = json['results'];
        for (let i = 0;i < res.length;i++){
          console.log(res[i])
          const k = res[i]['time_period']['fiscal_year']
          const v = res[i]['aggregated_amount']
          data.push({val:k,num:v})
        }
        
      })
      .catch((error) => console.error(`Error fetching data: ${error.message}`));
      
      setData(data)
      // console.log(data[0]['time_period']['fiscal_year'])
      // console.log(data.length)
      // console.log(data)

    }

  useEffect(()=>{
    console.log(ndata)
    console.log('set data')
  },[ndata])

  return (
      
      
    </div>
  );
}
 
export default YearCompareForm;