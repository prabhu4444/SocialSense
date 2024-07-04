"use client";
import React, { useEffect, useState } from 'react';
import Layer1 from '@/components/theme3/Layer1';
import Layer2 from '@/components/theme3/Layer2';
import Navbar from '@/components/theme3/Navbar';
import TransactionSection from '@/components/theme3/TransactionSection';
import { calculateDashboardData } from '@/data/dataCalculation';

function DashboardHome() {
    const [mounted, setMounted] = useState(false);
    const dashboardData = calculateDashboardData();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return (
        <div className="min-h-screen grid gap-5 px-4 py-2 shadow-xl">
            <Navbar />
            <Layer1 data={dashboardData} /> 
            <Layer2 />
            <TransactionSection />
        </div>
    );
}

export default DashboardHome;
