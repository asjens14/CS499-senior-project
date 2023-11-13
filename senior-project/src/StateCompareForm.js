import { useState } from "react";
import Graph from './Graph';


const StateCompareForm = () => {
  const [state1, setState1] = useState('49');
  const [state2, setState2] = useState('41');
  const [year, setYear] = useState('2023');

  let url1 = 'https://api.usaspending.gov/api/v2/recipient/state/49/?year=2023'
  let url2 = 'https://api.usaspending.gov/api/v2/recipient/state/41/?year=2023'

  const [data, setData] = useState([
    {val:'OR', num:48271413433.72},
    {val:'UT',num:24440930738.44}
  ])  

  const handleSubmit = (e) => {
    e.preventDefault();
    let nData = []
    const nUrl1 = 'https://api.usaspending.gov/api/v2/recipient/state/' + state1 + '/?year=' + year
    const nUrl2 = 'https://api.usaspending.gov/api/v2/recipient/state/' + state2 + '/?year=' + year
      url1 = nUrl1;
      url2 = nUrl2;
    // first set of data
    fetch(url1)
    .then((response) => response.json())
    .then((json) => {
      const k =json['name']
      const v = json['total_prime_amount']
      nData.push({val:k,num:v})
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
    // second set of data
    fetch(url2)
    .then((response) => response.json())
    .then((json) => {
      const k =json['name']
      const v = json['total_prime_amount']
      nData.push({val:k,num:v})
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));

    // that sweet, sweet jank, because it doesnt update immediately, and I don't
    // know how to fix it. For now, this works
    setTimeout(()=> {
    setData(nData)
    
    },1000)
  }

  
  return ( 
    <div>
      <div className="form">  
        <form onSubmit={handleSubmit}>
          <label>State 1</label>
          <select name="state1" value={state1} onChange={(e) => setState1(e.target.value)}>
            <option value="02">AK</option>
            <option value="01">AL</option>
            <option value="05">AR</option>
            <option value="04">AZ</option>
            <option value="06">CA</option>
            <option value="08">CO</option>
            <option value="09">CT</option>
            <option value="10">DE</option>
            <option value="12">FL</option>
            <option value="13">GA</option>
            <option value="15">HI</option>
            <option value="19">IA</option>
            <option value="16">ID</option>
            <option value="17">IL</option>
            <option value="18">IN</option>
            <option value="20">KS</option>
            <option value="21">KY</option>
            <option value="22">LA</option>
            <option value="25">MA</option>
            <option value="24">MD</option>
            <option value="23">ME</option>
            <option value="26">MI</option>
            <option value="27">MN</option>
            <option value="29">MO</option>
            <option value="28">MS</option>
            <option value="30">MT</option>
            <option value="37">NC</option>
            <option value="38">ND</option>
            <option value="31">NE</option>
            <option value="33">NH</option>
            <option value="34">NJ</option>
            <option value="35">NM</option>
            <option value="32">NV</option>
            <option value="36">NY</option>
            <option value="39">OH</option>
            <option value="40">OK</option>
            <option value="41">OR</option>
            <option value="42">PA</option>
            <option value="44">RI</option>
            <option value="45">SC</option>
            <option value="46">SD</option>
            <option value="47">TN</option>
            <option value="48">TX</option>
            <option value="49">UT</option>
            <option value="51">VA</option>
            <option value="50">VT</option>
            <option value="53">WA</option>
            <option value="55">WI</option>
            <option value="54">WV</option>
            <option value="56">WY</option>
          </select>
            
          <label>State 2</label>
          <select name="state2" value={state2} onChange={(e) => setState2(e.target.value)}>
            <option value="02">AK</option>
            <option value="01">AL</option>
            <option value="05">AR</option>
            <option value="04">AZ</option>
            <option value="06">CA</option>
            <option value="08">CO</option>
            <option value="09">CT</option>
            <option value="10">DE</option>
            <option value="12">FL</option>
            <option value="13">GA</option>
            <option value="15">HI</option>
            <option value="19">IA</option>
            <option value="16">ID</option>
            <option value="17">IL</option>
            <option value="18">IN</option>
            <option value="20">KS</option>
            <option value="21">KY</option>
            <option value="22">LA</option>
            <option value="25">MA</option>
            <option value="24">MD</option>
            <option value="23">ME</option>
            <option value="26">MI</option>
            <option value="27">MN</option>
            <option value="29">MO</option>
            <option value="28">MS</option>
            <option value="30">MT</option>
            <option value="37">NC</option>
            <option value="38">ND</option>
            <option value="31">NE</option>
            <option value="33">NH</option>
            <option value="34">NJ</option>
            <option value="35">NM</option>
            <option value="32">NV</option>
            <option value="36">NY</option>
            <option value="39">OH</option>
            <option value="40">OK</option>
            <option value="41">OR</option>
            <option value="42">PA</option>
            <option value="44">RI</option>
            <option value="45">SC</option>
            <option value="46">SD</option>
            <option value="47">TN</option>
            <option value="48">TX</option>
            <option value="49">UT</option>
            <option value="51">VA</option>
            <option value="50">VT</option>
            <option value="53">WA</option>
            <option value="55">WI</option>
            <option value="54">WV</option>
            <option value="56">WY</option>
          </select>
            
          <label>Year</label>
          <select
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)} >
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
      <div className='content'>
        {<Graph data={data} width={500}/>}
      </div>
    </div>
   );
}
 
export default StateCompareForm;