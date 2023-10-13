import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Graph = ({data}) => {
  return (
    <div style={{overflowX:'scroll',width:'70%'}}>
    {/* <ResponsiveContainer width="100%" height={400}> */}
        <BarChart
          width={2000}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={1}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0}  />
          <YAxis />
          <Tooltip />
          <Bar dataKey="num" fill="#8884d8" />
        </BarChart>
      {/* </ResponsiveContainer> */}
  </div>
  );
}
 
export default Graph;