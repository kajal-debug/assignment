import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../style/Home.css';

const data = [
  { name: 'jan', value: 10,fill:"#EAE5E4" },
  { name: 'feb', value: 8 ,fill:"#EAE5E4"},
  { name: 'mar', value: 13,fill:"#EAE5E4" },
  { name: 'april', value: 9,fill:"#EAE5E4" },
  { name: 'may', value: 12,fill:"#EAE5E4" },
  { name: 'june', value: 6,fill:"#EAE5E4" },
  { name: 'july', value: 12,fill:"#EAE5E4"},
  { name: 'aug', value: 13,fill:"#0000FF"},
  { name: 'sep', value: 12.5,fill:"#EAE5E4"},
  { name: 'oct', value: 12,fill:"#EAE5E4"},
  { name: 'nov', value: 11.5,fill:"#EAE5E4" },
  { name: 'dec', value: 12.3,fill:"#EAE5E4" },
];

const CustomBarChart = () => {
  return (
    <BarChart width={620} height={280} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" className='xaxis'/>
      <YAxis hide={true} /> {/* Set hide to true to hide the y-axis */}
      {/* <Tooltip hide={true}  /> */}
     {data.map((data) => (

       <Bar  dataKey="value"  fill={data.color}
       className='barstyle'
     
     
       />
     )
      )} 
    </BarChart>
  );
};

export default CustomBarChart;


