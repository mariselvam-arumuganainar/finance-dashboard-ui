import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsGrid = () => {
    const { mockData, CURRENCY } = useDashboard();
    
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Income Card */}
            <div className="glass-card p-6 border-white/5 bg-gradient-to-br from-green-500/5 to-transparent">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Income</span>
                <div className="flex items-end justify-between mt-2">
                    <h3 className="text-2xl font-bold">+{CURRENCY}{mockData.balance.income.toLocaleString()}</h3>
                    <div className="flex items-center gap-1 text-green-400 text-xs font-bold mb-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>12%</span>
                    </div>
                </div>
            </div>

            {/* Expense Card */}
            <div className="glass-card p-6 border-white/5 bg-gradient-to-br from-red-500/5 to-transparent">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Expense</span>
                <div className="flex items-end justify-between mt-2">
                    <h3 className="text-2xl font-bold">-{CURRENCY}{mockData.balance.expense.toLocaleString()}</h3>
                    <div className="flex items-center gap-1 text-red-500 text-xs font-bold mb-1">
                        <TrendingDown className="w-3 h-3" />
                        <span>5%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;
