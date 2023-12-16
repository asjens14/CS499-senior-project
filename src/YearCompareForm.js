import { useState,useEffect } from "react";
import Graph from "./Graph";

const YearCompareForm = () => {
  // const [year,setYear] = useState(null);
  const [ndata,setData] = useState([
    {amt: 4123874681.64, val:'2008'},
    {amt: 6640048390.84, val:'2009'},
    {amt: 6545982736.8, val:'2010'},
    {amt: 6517527426.92, val:'2011'},
    {amt: 6864100069.5, val:'2012'},
    {amt: 6035327242.2, val:'2013'},
    {amt: 6898289232.08, val:'2014'},
    {amt: 7290975135.11, val:'2015'},
    {amt: 7331885742.97, val:'2016'},
    {amt: 8811651202.85, val:'2017'},
    {amt: 9809112430.4, val:'2018'},
    {amt: 10338318244.66, val:'2019'},
    {amt: 16667311410.84, val:'2020'},
    {amt: 18620467248.37, val:'2021'},
    {amt: 15028166196.96, val:'2022'},
    {amt: 15482309326.72, val:'2023'},
    {amt: 1429923712.33, val:'2024'}
  ]);
  const [state,setState] = useState('AK')
  const [districts,setDistricts] = useState([{dist:"AK-00",amt:136870523457.57}])
  const [counties,setCounties] = useState([
    {count:"Anchorage Municipality",amt:48223325052.53},
    {count:"Fairbanks North Star Borough",amt:15488755970.22},
    {count:"Juneau City And Borough",amt:10912410998.59},
    {count:"Kenai Peninsula Borough",amt:5188345202.25},
    {count:"Matanuska-Susitna Borough",amt:6464114417.18},
    {count:"Kodiak Island Borough",amt:2374983558.53},
    {count:"Southeast Fairbanks Census Area",amt:2053895195.5},
    {count:"Ketchikan Gateway Borough",amt: 1602836071.79},
    {count:"Bethel Census Area",amt: 3705854456.04},
    {count:"Denali Borough",amt: 1798328009.15},
    {count:"Yukon-Koyukuk Census Area",amt: 1370991952.95},
    {count:"Sitka City And Borough",amt: 812206240.89},
    {count:"Prince Of Wales-Hyder Census Area",amt: 973960090.21},
    {count:"Nome Census Area",amt: 2100082069.33},
    {count:"Northwest Arctic Borough",amt: 1637104194.16},
    {count:"North Slope Borough",amt: 1806557067.78},
    {count:"Petersburg Borough",amt: 410881576.83},
    {count:"Aleutians West Census Area",amt: 1103011252.95},
    {count:"Dillingham Census Area",amt: 1075488814.04},
    {count:"Hoonah-Angoon Census Area",amt: 331141321.53},
    {count:"Bristol Bay Borough",amt: 462826584.66},
    {count:"Lake And Peninsula Borough",amt: 529242778.21},
    {count:"Wrangell City And Borough",amt: 225447012.2},
    {count:"Skagway Municipality",amt: 149163555.2},
    {count:"Haines Borough",amt: 345357254.05},
    {count:"Aleutians East Borough",amt: 443035622.84},
    {count:"Yakutat City And Borough",amt: 196000132.68},
    {count:"Kusilvak Census Area",amt: 662924927.61},
    {count:"Chugach Census Area",amt: 269280159.54},
    {count:"Copper River Census Area",amt: 313016328.07}
  ])

  function call(e){
    getData(e)
    getDistrict()
    getCounties()
  }

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
          // console.log(res[i])
          const k = res[i]['time_period']['fiscal_year']
          const v = res[i]['aggregated_amount']
          data.push({val:k,amt:v})
        }
        
      })
      .catch((error) => console.error(`Error fetching data: ${error.message}`));
      
      setData(data)
      // console.log(data[0]['time_period']['fiscal_year'])
      // console.log(data.length)
      // console.log(data)

    }

    async function getDistrict(){
      await fetch('https://api.usaspending.gov/api/v2/search/spending_by_geography/',{
      method:'POST',
  
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          "filters": {
              "place_of_performance_locations":[{"country":"USA","state":state}]
          },
          "scope": "place_of_performance",
          "geo_layer":"district"
      })})
    .then((response) => response.json())
    .then((json) => {
      // TODO: parse data
      let temp = []
      console.log(json)
      for (let i = 0; i < json['results'].length;i++){
        temp.push({dist:json['results'][i]['display_name'],amt:json['results'][i]['aggregated_amount']})
      }
      setDistricts(temp)
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));}

    async function getCounties(){
      await fetch('https://api.usaspending.gov/api/v2/search/spending_by_geography/',{
      method:'POST',
  
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          "filters": {
              "place_of_performance_locations":[{"country":"USA","state":state}]
          },
          "scope": "place_of_performance",
          "geo_layer":"county"
      })})
    .then((response) => response.json())
    .then((json) => {
      // TODO: parse data
      console.log(json)
      let temp = []
      console.log(json)
      for (let i = 0; i < json['results'].length;i++){
        temp.push({count:json['results'][i]['display_name'],amt:json['results'][i]['aggregated_amount']})
      }
      setCounties(temp)
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
  
    }

  useEffect(()=>{
    // console.log(ndata)
    // console.log('set data')
  },[ndata])

  return (
    <div>
      <div className="form">
        <form onSubmit={call}>
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
      <div>
        <table className="records">
          <tr>
            <th>District</th>
            <th>Total Aggregated Amount</th>
          </tr>
          {districts.map((record, i) => {
            return(
            <tr>
              <td>{record.dist}</td>
              <td>${Intl.NumberFormat().format(record.amt)}</td>
            </tr>
          )})}
        </table>
        <br />
        <table className="records">
          <tr>
            <th>County</th>
            <th>Total Aggregated Amount</th>
          </tr>
          {counties.map((record, i) => {
            return(
            <tr>
              <td>{record.count}</td>
              <td>${Intl.NumberFormat().format(record.amt)}</td>
            </tr>
          )})}
        </table>
      </div>
    </div>
  );
}
 
export default YearCompareForm;