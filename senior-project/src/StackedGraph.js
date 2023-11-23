import { BarChart,Bar,CartesianGrid,XAxis, YAxis, Tooltip,Legend } from "recharts";

const StackedGraph = ({data, width, s1, s2}) => {

  return ( 
    <div style={{overflowX:'scroll',width:'90%'}}>
      <BarChart width={width} height={400} data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="val" />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
              }).format(value)}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey={s1} fill="#8884d8" />
          <Bar dataKey={s2} fill="#82ca9d" />
        </BarChart>
    </div>
  );
}
 
export default StackedGraph;