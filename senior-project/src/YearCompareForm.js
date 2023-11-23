import { useState,useEffect } from "react";
import Graph from "./Graph";

const YearCompareForm = () => {
  // const [year,setYear] = useState(null);
  const [ndata,setData] = useState([
    {num: 4123874681.64, val:'2008'},
    {num: 6640048390.84, val:'2009'},
    {num: 6545982736.8, val:'2010'},
    {num: 6517527426.92, val:'2011'},
    {num: 6864100069.5, val:'2012'},
    {num: 6035327242.2, val:'2013'},
    {num: 6898289232.08, val:'2014'},
    {num: 7290975135.11, val:'2015'},
    {num: 7331885742.97, val:'2016'},
    {num: 8811651202.85, val:'2017'},
    {num: 9809112430.4, val:'2018'},
    {num: 10338318244.66, val:'2019'},
    {num: 16667311410.84, val:'2020'},
    {num: 18620467248.37, val:'2021'},
    {num: 15028166196.96, val:'2022'},
    {num: 15482309326.72, val:'2023'},
    {num: 1429923712.33, val:'2024'}
  ]);
  const [state,setState] = useState('AK')


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
    <div>
      <div className="form">
        <form onSubmit={getData}>
          <label>State</label>
          <select name="state" value={state} onChange={(e) => setState(e.target.value)}>
            <option value="AK">AK</option>
            <option value="AL">AL</option>
            <option value="AR">AR</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VA">VA</option>
            <option value="VT">VT</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </select>
          <button>Submit</button>      
        </form>
      </div>
      <div className="content">
        <Graph data={ndata} width={1000}/>
      </div>      
    </div>
  );
}
 
export default YearCompareForm;