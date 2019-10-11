import React from "react";
import PieChart from "../../../../components/common/Chart/PieChart"

const data = [
    { name: 'Expenses', value: 900 },
    { name: 'Available Funds', value: 300 },
  ];

export default () => {
  return (
    <PieChart
      data={data}
    />
  );
};
