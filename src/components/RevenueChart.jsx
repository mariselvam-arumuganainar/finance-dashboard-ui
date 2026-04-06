import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useDashboard } from '../context/DashboardContext';

const RevenueChart = () => {
    const { mockData, theme, chartView, setChartView, CURRENCY } = useDashboard();
    
    // Get primary color from CSS variable for Recharts
    const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#dfff3b';

    const isWeekly = chartView === 'weekly';
    const chartData = isWeekly ? mockData.revenueHistory.slice(0, 7) : mockData.revenueHistory;

    return (
        <div className="glass-card p-8 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-xl font-bold">Revenue flow</h2>
                    <p className="text-sm text-text-muted">{isWeekly ? 'Weekly' : 'Monthly'} overview of your earnings</p>
                </div>
                <div className="flex bg-white/5 p-1 rounded-xl">
                    <button 
                        onClick={() => setChartView('weekly')}
                        className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${isWeekly ? 'bg-white/10 shadow-sm text-white' : 'text-text-muted hover:text-white'}`}
                    >
                        Weekly
                    </button>
                    <button 
                        onClick={() => setChartView('monthly')}
                        className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${!isWeekly ? 'bg-white/10 shadow-sm text-white' : 'text-text-muted hover:text-white'}`}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            <div className="w-full h-[300px] mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                        key={isWeekly ? 'weekly-chart' : 'monthly-chart'}
                        data={chartData} 
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <XAxis 
                            dataKey={isWeekly ? "day" : "month"} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: 'var(--text-muted)', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis hide domain={[0, 'auto']} />
                        <Tooltip 
                            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                            contentStyle={{ 
                                backgroundColor: 'var(--bg-card)', 
                                border: '1px solid var(--border-color)', 
                                borderRadius: '12px',
                                boxShadow: '0 10px 15px rgba(0,0,0,0.5)'
                            }}
                            itemStyle={{ color: 'var(--text-main)', fontSize: '12px' }}
                            formatter={(value) => [`${CURRENCY}${value}`, 'Revenue']}
                        />
                        <Bar 
                            dataKey={isWeekly ? "revenue" : "mRev"} 
                            radius={[6, 6, 6, 6]} 
                            barSize={isWeekly ? 32 : 18}
                            animationDuration={800}
                        >
                            {chartData.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={index === (isWeekly ? 4 : 11) ? 'var(--primary)' : 'var(--text-muted)'}
                                    style={{ 
                                        opacity: index === (isWeekly ? 4 : 11) ? 1 : 0.2,
                                        filter: index === (isWeekly ? 4 : 11) ? 'drop-shadow(0 0 12px var(--primary-glow))' : 'none' 
                                    }}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
