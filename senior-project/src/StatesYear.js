import { useEffect, useState } from "react";
import Graph from "./Graph";

const StatesYear = () => {
  const [year,setYear] = useState('2023')
  const [data, setData] =useState([
    { val: "AK", amt: 15662874613.52 },
    { val: "AL", amt: 62456223681.02 },
    { val: "AR", amt: 31626421758.73 },
    { val: "AZ", amt: 108753699689.98 },
    { val: "CA", amt: 418915343719.55 },
    { val: "CO", amt: 59629263245.46 },
    { val: "CT", amt: 119042196579.42 },
    { val: "DE", amt: 10914488482.53 },
    { val: "FL", amt: 273948590193.93 },
    { val: "GA", amt: 91346084133.69 },
    { val: "HI", amt: 17722948413.82 },
    { val: "IA", amt: 30025961423.06 },
    { val: "ID", amt: 19308858208.88 },
    { val: "IL", amt: 155961408226.54 },
    { val: "IN", amt: 183016354208.47 },
    { val: "KS", amt: 26263301021.71 },
    { val: "KY", amt: 158050777764.16 },
    { val: "LA", amt: 57898389153.28 },
    { val: "MA", amt: 93325766578.39 },
    { val: "MD", amt: 95228043690.05 },
    { val: "ME", amt: 19775589469.6 },
    { val: "MI", amt: 111871517435.08 },
    { val: "MN", amt: 213771982887.52 },
    { val: "MO", amt: 82037638117.35 },
    { val: "MS", amt: 37290329569.66 },
    { val: "MT", amt: 13041305943.71 },
    { val: "NC", amt: 99603486592.26 },
    { val: "ND", amt: 81910666415.29 },
    { val: "NE", amt: 22854908549.87 },
    { val: "NH", amt: 14093691984.26 },
    { val: "NJ", amt: 85498345650.04 },
    { val: "NM", amt: 37695687247.22 },
    { val: "NV", amt: 28981206161.84 },
    { val: "NY", amt: 238174557871.05 },
    { val: "OH", amt: 115485802564.85 },
    { val: "OK", amt: 44323542836.2 },
    { val: "OR", amt: 51818362774.7 },
    { val: "PA", amt: 253735134522.98 },
    { val: "RI", amt: 13803519437.55 },
    { val: "SC", amt: 122483154468.95 },
    { val: "SD", amt: 9660631275.45 },
    { val: "TN", amt: 102204127030.3 },
    { val: "TX", amt: 286728318877.67 },
    { val: "UT", amt: 26052055967.81 },
    { val: "VA", amt: 176371414874.77 },
    { val: "VT", amt: 7871545825.27 },
    { val: "WA", amt: 84159190137.46 },
    { val: "WI", amt: 103091719669.91 },
    { val: "WV", amt: 22518558226.61 },
    { val: "WY", amt: 5898966480.56 }
])
  const states = [
    '02',
    '01',
    '05',
    '04',
    '06',
    '08',
    '09',
    '10',
    '12',
    '13',
    '15',
    '19',
    '16',
    '17',
    '18',
    '20',
    '21',
    '22',
    '25',
    '24',
    '23',
    '26',
    '27',
    '29',
    '28',
    '30',
    '37',
    '38',
    '31',
    '33',
    '34',
    '35',
    '32',
    '36',
    '39',
    '40',
    '41',
    '42',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '51',
    '50',
    '53',
    '55',
    '54',
    '56'
  ]

async function getData(e){
  let tempData = []
  e.preventDefault()
  for (let item of states){
    await fetch(`https://api.usaspending.gov/api/v2/recipient/state/${item}/?year=${year}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      const k = json['total_prime_amount']
      const v = json['code']
      tempData.push({val:v,amt:k})
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
    // console.log(item)
  }
  setData(tempData)
  console.log(tempData)
}

useEffect(()=>{},[data])

  return ( 
    <div>
      <div className="form">  
        <form onSubmit={getData}>
          <label>Year</label>
          <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
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
        {<Graph data={data} width={1500}/>}
      </div>
    </div>
   );
}
 
export default StatesYear;