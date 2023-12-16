import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Graph = ({data, width}) => {
  
  return (
    <div style={{overflowX:'scroll',width:'90%'}}>
    <BarChart width={width} height={400} data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barCategoryGap={1}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="val" interval={0}  />
      <YAxis
        tickFormatter={(value) =>
        new Intl.NumberFormat("en-US", {
          notation: "compact",
          compactDisplay: "short",
        }).format(value)}
      />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
      <Bar dataKey="amt" fill="#82ca9d" />
    </BarChart>
  </div>
  );
}
 
export default Graph;