import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Search, ChevronDown, ShoppingBag, Wallet, Coffee, Plane, Play, Code } from 'lucide-react';

const TransactionSection = () => {
    const { 
        searchQuery, setSearchQuery, 
        categoryFilter, setCategoryFilter,
        sortOrder, setSortOrder,
        filteredTransactions,
        CURRENCY
    } = useDashboard();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const categories = ['all', 'Shopping', 'Income', 'Food', 'Travel', 'Entertainment'];
    const sortOptions = [
        { id: 'latest', label: 'Latest First' },
        { id: 'oldest', label: 'Oldest First' }
    ];

    const getIconSvg = (type) => {
        const props = { className: "w-5 h-5" };
        switch(type) {
            case 'shop': return <ShoppingBag {...props} />;
            case 'wallet': return <Wallet {...props} />;
            case 'coffee': return <Coffee {...props} />;
            case 'plane': return <Plane {...props} />;
            case 'play': return <Play {...props} />;
            case 'code': return <Code {...props} />;
            default: return <Wallet {...props} />;
        }
    };

    return (
        <div className="glass-card p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    {/* Search bar inside section */}
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-text-muted" />
                        <input 
                            type="text" 
                            placeholder="Search activity..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-background-darker border border-white/5 rounded-xl py-2 pl-9 pr-4 text-sm outline-none focus:border-theme-primary focus:bg-white/5 transition-all w-full sm:w-56"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative flex-1 sm:flex-none">
                        <button 
                            onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsSortOpen(false); }}
                            className="flex items-center justify-between gap-3 px-4 py-2 bg-background-darker border border-white/5 rounded-xl text-sm min-w-[140px] hover:border-theme-primary transition-all w-full"
                        >
                            <span className="capitalize">{categoryFilter === 'all' ? 'All Categories' : categoryFilter}</span>
                            <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isCategoryOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsCategoryOpen(false)}></div>
                                <div className="absolute top-full left-0 mt-2 w-full bg-[#1a1a23] border border-white/10 rounded-xl p-1 z-50 shadow-2xl animate-in zoom-in-95">
                                    {categories.map(cat => (
                                        <button 
                                            key={cat}
                                            onClick={() => { setCategoryFilter(cat); setIsCategoryOpen(false); }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-xs capitalize transition-colors ${categoryFilter === cat ? 'bg-theme-soft text-theme-primary font-bold' : 'text-text-muted hover:bg-white/5 hover:text-white'}`}
                                        >
                                            {cat === 'all' ? 'All Categories' : cat}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative flex-1 sm:flex-none">
                        <button 
                            onClick={() => { setIsSortOpen(!isSortOpen); setIsCategoryOpen(false); }}
                            className="flex items-center justify-between gap-3 px-4 py-2 bg-background-darker border border-white/5 rounded-xl text-sm min-w-[140px] hover:border-theme-primary transition-all w-full"
                        >
                            <span>{sortOptions.find(o => o.id === sortOrder)?.label}</span>
                            <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isSortOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)}></div>
                                <div className="absolute top-full left-0 mt-2 w-full bg-[#1a1a23] border border-white/10 rounded-xl p-1 z-50 shadow-2xl">
                                    {sortOptions.map(opt => (
                                        <button 
                                            key={opt.id}
                                            onClick={() => { setSortOrder(opt.id); setIsSortOpen(false); }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${sortOrder === opt.id ? 'bg-theme-soft text-theme-primary font-bold' : 'text-text-muted hover:bg-white/5 hover:text-white'}`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                {filteredTransactions.length === 0 ? (
                    <div className="py-12 text-center text-text-muted italic opacity-60">No matching records in Wolf archive.</div>
                ) : (
                    filteredTransactions.map((t) => (
                        <div key={t.id} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors -mx-4 px-4 rounded-xl">
                            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-theme-primary border border-white/5">
                                {getIconSvg(t.icon)}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm tracking-wide">{t.name}</h4>
                                <p className="text-[11px] text-text-muted mt-0.5">{t.date} • {t.category}</p>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold text-sm ${t.amount > 0 ? 'text-theme-primary' : 'text-red-500'}`}>
                                    {t.amount > 0 ? '+' : '-'}{CURRENCY}{Math.abs(t.amount).toLocaleString()}
                                </p>
                                <p className="text-[10px] text-text-muted uppercase font-bold mt-1 opacity-60">{t.type}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TransactionSection;
