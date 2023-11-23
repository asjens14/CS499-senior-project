import { useEffect, useState } from "react";
import StackedGraph from './StackedGraph';
// FIX TO USE STACKED CHART AND SHOW ALL YEARS

const StateCompareForm = () => {
  const [state1,setState1] = useState('AK')
  const [state2,setState2] = useState('AL')
  const [ndata,setData] = useState([
    {val:'2008',AK:4123874681.64,AL:23320411271.43},
    {val:'2009',AK:6640048390.84,AL:36655099194.03},
    {val:'2010',AK:6545982736.8,AL:34518005926.22},
    {val:'2011',AK:6517527426.92,AL:46146922481.25},
    {val:'2012',AK:6864100069.5,AL:44392058606.98},
    {val:'2013',AK:6035327242.2,AL:43780497389.79},
    {val:'2014',AK:6898289232.08,AL:35802762611.9},
    {val:'2015',AK:7290975135.11,AL:59726230305.32},
    {val:'2016',AK:7331885742.97,AL:64407468332.37},
    {val:'2017',AK:8811651202.85,AL:67359892240.39},
    {val:'2018',AK:9809112430.4,AL:57544145086.85},
    {val:'2019',AK:10338318244.66,AL:52730877880.11},
    {val:'2020',AK:16667311410.84,AL:63439234896.31},
    {val:'2021',AK:18620867062.37,AL:70029574841.81},
    {val:'2022',AK:15028929814.69,AL:60835762751.61},
    {val:'2023',AK:15615772325.36,AL:62132556180.27},
    {val:'2024',AK:1783464599.19,AL:4864472265.49},
  ])

  async function getData(e){
    e.preventDefault();
    console.log('clicked')
    let data1=[];
    let data2=[];
    let temp=[]

    await fetch('https://api.usaspending.gov/api/v2/search/spending_over_time/',{
        method:'POST',
    
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "group": "fiscal_year",
            "filters": {
                "place_of_performance_locations":[{"country":"USA","state":state1}],
                "time_period":[{"start_date":"2007-10-01","end_date":"2024-09-30"}]
            }
        })})
      .then((response) => response.json())
      .then((json) => {
        // TODO: parse data
        
        let res = json['results'];
        for (let i = 0;i < res.length;i++){
          // console.log(res[i])
          const k = res[i]['time_period']['fiscal_year']
          const v = res[i]['aggregated_amount']
          data1.push({val:k,num:v})
        }
        
      })
      .catch((error) => console.error(`Error fetching data: ${error.message}`));

    await fetch('https://api.usaspending.gov/api/v2/search/spending_over_time/',{
      method:'POST',    
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          "group": "fiscal_year",
          "filters": {
              "place_of_performance_locations":[{"country":"USA","state":state2}],
              "time_period":[{"start_date":"2007-10-01","end_date":"2024-09-30"}]
          }
      })})
      .then((response) => response.json())
      .then((json) => {
      // TODO: parse data
      
        let res = json['results'];
        for (let i = 0;i < res.length;i++){
          // console.log(res[i])
          const k = res[i]['time_period']['fiscal_year']
          const v = res[i]['aggregated_amount']
          data2.push({val:k,num:v})
        }
      
      })
      .catch((error) => console.error(`Error fetching data: ${error.message}`));

    // combine data into the correct format for the graph
    
    for (let i = 0; i < data1.length;i++){
      temp.push({val:data1[i]['val'],[state1]:data1[i]['num'],[state2]:data2[i]['num']})
    }
    setData(temp)
    console.log(ndata)
  }
  
  useEffect(()=>{
    console.log(ndata)
    console.log('set data')
  },[ndata])

  
  return ( 
    <div>
      <div className="form">  
        <form onSubmit={getData}>
          <label>State 1</label>
          <select name="state1" value={state1} onChange={(e) => setState1(e.target.value)}>
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
            
          <label>State 2</label>
          <select name="state2" value={state2} onChange={(e) => setState2(e.target.value)}>
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
      <div className='content'>
        {<StackedGraph data={ndata} width={1000} s1={state1} s2={state2}/>}
      </div>
    </div>
   );
}
 
export default StateCompareForm;