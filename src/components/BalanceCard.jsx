import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const BalanceCard = () => {
    const { mockData, CURRENCY } = useDashboard();
    
    return (
        <div className="bg-theme-primary text-black rounded-dashboard p-8 min-h-[220px] flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-theme-glow group transition-all duration-500">
            {/* Visual background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/5 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 text-black">
                <span className="text-xs font-bold tracking-widest opacity-60 uppercase">Total Balance</span>
                <h2 className="text-6xl font-bold mt-2 leading-none">
                    {CURRENCY}{mockData.balance.total.toLocaleString()}
                </h2>
            </div>
            
            <div className="relative z-10 flex gap-4">
                <div className="w-12 h-8 bg-black/20 rounded-lg flex items-center justify-center border border-black/10 backdrop-blur-md">
                   <div className="w-4 h-4 bg-white/20 rounded-full mr-1"></div>
                   <div className="w-4 h-4 bg-white/20 rounded-full -ml-2"></div>
                </div>
            </div>
        </div>
    );
};

export default BalanceCard;
