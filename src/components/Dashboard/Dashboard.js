import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <div class=" flex items-center justify-center bg-gradient-to-b from-blue-800 to-blue-600 h-64">
        <h2 className="md:text-5xl text-3xl text-white text-center font-medium">
          Dashboard
        </h2>
      </div>
      <div className="bg-slate-50 py-20 px-20">
        <div className="my-20 d-block md:flex justify-center gap-20">
          {/* Investmenet  */}
          <div>
            <h4 className="text-3xl font-medium  mb-5">Investment Analytics</h4>

            <ComposedChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="month" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="investment"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="investment" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="investment" stroke="#ff7300" />
            </ComposedChart>
          </div>

          {/* Sell and review  */}
          <div>
            <h4 className="text-3xl font-medium  mb-5">Sell and Revenue</h4>
            <AreaChart
              className="mb-10"
              width={600}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="sell"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
