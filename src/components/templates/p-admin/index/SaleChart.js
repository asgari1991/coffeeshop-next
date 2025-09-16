"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SaleChart = () => {
  const data = [
    {
      date: "04/1/1",
      sale: 4000,
    },
    {
      date: "04/1/2",
      sale: 4200,
    },
    {
      date: "04/1/3",
      sale: 5000,
    },
    {
      date: "04/1/4",
      sale: 3500,
    },
    {
      date: "04/1/5",
      sale: 3800,
    },
    {
      date: "04/1/6",
      sale: 5500,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="92%">
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sale" stroke="#000" fill="#711D1C" />
        
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SaleChart;
