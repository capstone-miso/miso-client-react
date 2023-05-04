import React from "react";
import { Pie, PieChart } from "recharts";

export default function ApexChart() {
  const data01 = [
    {
      name: "Group A",
      value: 67,
    },
    {
      name: "Group B",
      value: 21,
    },
    {
      name: "Group C",
      value: 11,
    },
    {
      name: "Group D",
      value: 27,
    },
  ];

  return (
    <PieChart width={300} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
    </PieChart>
  );
}
