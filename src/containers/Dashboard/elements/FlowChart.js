import React from "react";
import BarChart from "../../../components/common/Chart/BarChart";

const data = [
  {
    month: "jan",
    OutFlow: 4000,
    InFlow: 2400
  },
  {
    month: "Feb",
    OutFlow: 3000,
    InFlow: 1398
  },
  {
    month: "Mar",
    OutFlow: 2000,
    InFlow: 9800
  },
  {
    month: "Apr",
    OutFlow: 2780,
    InFlow: 3908
  },
  {
    month: "Jun",
    OutFlow: 1890,
    InFlow: 4800
  }
];

export default () => {
  return (
    <BarChart
      data={data}
      labels={[
        { label: "InFlow", fill: "#00203f" },
        { label: "OutFlow", fill: "#ff7300" }
      ]}
    />
  );
};
