"use client";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const GrowthChart = () => {
    const data=[{
        name:"04/01/01",
        current:4000,
        prev: 3500
    },
{
        name:"04/02/01",
        current:2800,
        prev: 4000
    },
{
        name:"04/03/01",
        current:5200,
        prev: 2800
    },
{
        name:"04/04/01",
        current:5600,
        prev: 5200
    },
{
        name:"04/05/01",
        current:4900,
        prev: 5600
    },
{
        name:"04/06/01",
        current:3900,
        prev: 4900
    },]
  return (
    <ResponsiveContainer width="100%" height="92.7%">
      <LineChart
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
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Line type="monotone" dataKey="prev" stroke="#711D1C"/>
        <Line type="monotone" dataKey="current" stroke="#000"/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrowthChart;
