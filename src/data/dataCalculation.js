// dataCalculation.js

import customersData from '@/data/customerData';

export const calculateDashboardData = () => {
  const totalCustomers = customersData.length;

  const totalOrders = customersData.reduce((acc, customer) => {
    return acc + customer.transactions.length;
  }, 0);

  const totalRevenue = customersData.reduce((acc, customer) => {
    return acc + customer.transactions.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  }, 0);

  const growth = 12; // Example fixed growth value, adjust as needed

  return {
    totalCustomers,
    totalOrders,
    totalRevenue,
    growth
  };
};