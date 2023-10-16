import { useState } from 'react';
import Graph from './Graph';
import CompareForm from './CompareForm';

const StateCompare = () => {
  
  
  // sample data
  // 
  const data = [
    {name:'Ar', num:1},
    {name:'Or',num:2},
    {name:'Ut',num:3},
    {name:'Wa',num:4}
  ]

  return (
    <div>
      <CompareForm />
      <div className='content'>
        {data && <Graph data={data} />}
      </div>
    </div>
  );
}
 
export default StateCompare;