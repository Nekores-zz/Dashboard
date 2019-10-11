import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Wrapper from "./styles";

export default props => {
  return (
    <Wrapper>
      <ResponsiveContainer>
        <BarChart
          width={props.width ? props.width : 700}
          height={props.height ? props.height : 300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {props.labels.map((item, index) => (
            <Bar key={index} barSize={25} dataKey={item.label} fill={item.fill} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
