import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'Filled', value: 65 },
  { name: 'Empty', value: 35 },
];

const CustomPieChart = () => {
  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        startAngle={90}
        endAngle={-270}
      />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={85}
        outerRadius={90}
        startAngle={90}
        endAngle={-270}
        fill="gray"
      />
      <text x="50%" y="50%" textAnchor="middle" dy={8} fontSize={24} fill="#333">
        {`${data[0].value}%`}
      </text>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
