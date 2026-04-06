import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { ArrowRight, Lightbulb } from 'lucide-react';

const InsightsCard = () => {
    const { role } = useDashboard();
    
    return (
        <div className="glass-card p-8 bg-gradient-to-br from-theme-soft to-transparent border-theme-soft/20 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6 font-bold text-theme-primary">
                <Lightbulb className="w-6 h-6 animate-pulse" />
                <h3 className="text-lg">Wolf Advisor</h3>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                <div>
                    <p className="text-sm leading-relaxed mb-4">
                        Market analysis suggests a <strong className="text-theme-primary">12% increase</strong> in wealth potential if you move idle funds to Wolf-managed assets.
                    </p>
                    <p className="text-xs text-text-muted italic opacity-70">
                        * You've captured 15% more rewards this month than previous cycles.
                    </p>
                </div>
                
                <button className="flex items-center justify-between gap-3 px-4 py-2 mt-6 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-all group">
                    <span>Analyze Portfolio</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
            
            {role === 'viewer' && (
                <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] text-blue-400 font-bold uppercase tracking-wider text-center">
                    Switch to Admin role to enable editing features.
                </div>
            )}
        </div>
    );
};

export default InsightsCard;
