import { useState } from "react";

const CompareForm = () => {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');
  const [year, setYear] = useState('2023');

  const dataset1 = []
  const dataset2 = []

  const data = [
    {name:'Ar', num:1},
    {name:'Or',num:2},
    {name:'Ut',num:3},
    {name:'Wa',num:4}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return ( 
    <div className="form">  
        <form onSubmit={handleSubmit}>
          <label>State 1</label>
          <select value={state1} onChange={(e) => setState1(e.target.value)}>
          <option value=""></option>
          </select>
            
          <label>State 2</label>
          <select value={state2} onChange={(e) => setState2(e.target.value)}>
          <option value=""></option>
          </select>
            
          <label>Year</label>
          <select
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
   );
}
 
export default CompareForm;