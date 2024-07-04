import React from "react";
import { FiArrowUp } from "react-icons/fi";

import {
  FaUsers,
  FaShoppingCart,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Layer1({ data }) {
  const barChartData = [
    { month: "Jan", projection: 1400, actual: 1100 },
    { month: "Feb", projection: 2100, actual: 1700 },
    { month: "Mar", projection: 2300, actual: 1900 },
    { month: "Apr", projection: 1900, actual: 1500 },
    { month: "May", projection: 2500, actual: 2100 },
    { month: "Jun", projection: 2700, actual: 2400 },
    { month: "Jul", projection: 3200, actual: 2800 },
    { month: "Aug", projection: 2800, actual: 2500 },
    { month: "Sep", projection: 3000, actual: 2700 },
    { month: "Oct", projection: 3300, actual: 3100 },
    { month: "Nov", projection: 2900, actual: 2700 },
    { month: "Dec", projection: 3600, actual: 3300 },
  ];

  const cardData = [
    {
      icon: <FaUsers className="text-4xl text-yellow-600" />,
      title: "Customers",
      value: data.totalCustomers,
      percentile: 15.73,
    },
    {
      icon: <FaShoppingCart className="text-4xl text-yellow-600" />,
      title: "Orders",
      value: data.totalOrders,
      percentile: 21.15,
    },
    {
      icon: <FaCreditCard className="text-4xl text-yellow-600" />,
      title: "Revenue",
      value: `$${data.totalRevenue.toFixed(2)}`,
      percentile: 12.76,
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-600" />,
      title: "Growth",
      value: `${data.growth}%`,
      percentile: 32.56,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" p-8 bg-white border rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-yellow-100 w-14 h-14 rounded-full">
                {card.icon}
              </div>
              <span className="ml-5 text-lg font-semibold">{card.title}</span>
            </div>

            <div className="mt-6 ml-2">
              <p className="text-3xl font-bold text-gray-800">{card.value}</p>
              <div className="flex mt-2">
                <FiArrowUp className="text-green-500 text-lg " />
                <span className="text-sm font-semibold text-green-500">{`${card.percentile}%`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 mt-4 rounded shadow-lg mb-5">
        <h2 className="font-bold text-2xl mb-4">Projection vs Actuals</h2>
        <div className="w-full h-64 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Bar
                dataKey="actual"
                stackId="stack"
                fill="#FFCC00"
                name="Actual"
              />
              <Bar
                dataKey="projection"
                stackId="stack"
                fill="#e0e0e0"
                name="Projection"
              />
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Layer1;
