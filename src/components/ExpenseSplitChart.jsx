import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useDashboard } from '../context/DashboardContext';
import { PieChart as PieChartIcon } from 'lucide-react';

const ExpenseSplitChart = () => {
    const { mockData, CURRENCY } = useDashboard();
    const data = mockData.expenseSplit;
    
    // Instead of sum of percentages, we show the actual total expense amount
    const totalExpense = mockData.balance.expense;
    const formattedTotal = totalExpense >= 100000 
        ? `${(totalExpense / 100000).toFixed(1)}L`
        : `${(totalExpense / 1000).toFixed(1)}k`;

    return (
        <div className="glass-card p-8 min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Expense split</h2>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <PieChartIcon className="w-4 h-4 text-text-muted" />
                </div>
            </div>
            
            <div className="h-[200px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={65}
                            outerRadius={85}
                            paddingAngle={8}
                            dataKey="value"
                            animationDuration={1000}
                        >
                            {data.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.colorVar ? 'var(--primary)' : entry.color}
                                    style={{ filter: entry.colorVar ? 'drop-shadow(0 0 8px var(--primary-glow))' : 'none' }}
                                />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: 'var(--bg-card)', 
                                border: '1px solid var(--border-color)', 
                                borderRadius: '12px',
                                boxShadow: '0 10px 15px rgba(0,0,0,0.5)'
                            }}
                            itemStyle={{ color: 'var(--text-main)', fontSize: '12px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                
                {/* Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Total</span>
                    <span className="text-2xl font-black text-text-main">{CURRENCY}{formattedTotal}</span>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {data.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text-muted">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.colorVar ? 'var(--primary)' : item.color }}></div>
                        <span className="font-medium">{item.name} ({item.value}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseSplitChart;
