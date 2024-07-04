import React from "react";
import { Line } from "react-chartjs-2";
import { ResponsivePie } from "@nivo/pie";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import customersData from "@/data/customerData"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Layer2() {
  const thisYearData = Array(12)
    .fill(0)
    .map((_, index) => {
      const month = new Date(2024, index).toLocaleString("default", {
        month: "short",
      });
      const customerCount = customersData.filter((customer) => {
        const transactionsThisMonth = customer.transactions.filter(
          (transaction) => {
            const transactionDate = new Date(transaction.dateOfBill);
            return (
              transactionDate.getFullYear() === 2024 &&
              transactionDate.getMonth() === index
            );
          }
        );
        return transactionsThisMonth.length > 0;
      }).length;

      return { month, customerCount };
    });

    const lastYearData = [
      { month: "Jan", customerCount: 42 },
      { month: "Feb", customerCount: 26 },
      { month: "Mar", customerCount: 53 },
      { month: "Apr", customerCount: 17 },
      { month: "May", customerCount: 35 },
      { month: "Jun", customerCount: 47 },
      { month: "Jul", customerCount: 38 },
      { month: "Aug", customerCount: 29 },
      { month: "Sep", customerCount: 55 },
      { month: "Oct", customerCount: 41 },
      { month: "Nov", customerCount: 20 },
      { month: "Dec", customerCount: 31 },
    ];
    

  const lineChartData = {
    labels: thisYearData.map((data) => data.month),
    datasets: [
      {
        label: "This Year",
        data: thisYearData.map((data) => data.customerCount),
        borderColor: "#FFD700",
        backgroundColor: "#FFD700",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Last Year",
        data: lastYearData.map((data) => data.customerCount),
        borderColor: "#FFA500",
        backgroundColor: "#FFA500",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Total Customers",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Prepare data for age distribution
  const ageData = customersData.reduce((acc, customer) => {
    let ageGroup;
    if (customer.age >= 15 && customer.age <= 25) {
      ageGroup = "15-25";
    } else if (customer.age >= 26 && customer.age <= 35) {
      ageGroup = "26-35";
    } else if (customer.age >= 36 && customer.age <= 45) {
      ageGroup = "36-45";
    } else {
      ageGroup = ">45";
    }
    if (acc[ageGroup]) {
      acc[ageGroup]++;
    } else {
      acc[ageGroup] = 1;
    }
    return acc;
  }, {});

  const ageChartData = Object.keys(ageData).map((ageGroup) => ({
    id: ageGroup,
    label: `${ageGroup} Years Old`,
    value: ageData[ageGroup],
  }));

  const colours = ["#FFD700", "#FFCC00", "#FFA500", "#CC5500"]; // Colors for age groups

  return (
    <div className="flex flex-col md:flex-row mx-3">
      {/* Line Chart */}
      <div className="w-full md:w-1/2 h-96 md:mr-4 bg-white rounded pl-8 pb-8 md:pb-16 shadow-xl">
        <h2 className="font-bold text-xl mb-4">Total Customers</h2>
        <div className="h-full">
          <Line data={lineChartData} options={options} />
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full md:w-1/2 h-96 p-5 bg-white rounded pb-8 md:pb-16 shadow-md mb-10">
        <h2 className="font-bold text-xl mb-4">Customer Segmentations</h2>
        <ResponsivePie
          data={ageChartData}
          margin={{ top: 20, right: 40, bottom: 0, left: 30 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={colours}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableRadialLabels={false}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          legends={[
            {
              anchor: "right",
              direction: "column",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Layer2;