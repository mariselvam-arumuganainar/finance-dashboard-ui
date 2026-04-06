import React, { createContext, useContext, useState, useMemo } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) throw new Error('useDashboard must be used within a DashboardProvider');
    return context;
};

export const DashboardProvider = ({ children }) => {
    const [role, setRole] = useState('admin');
    const [theme, setTheme] = useState('neon');
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('latest');
    const [chartView, setChartView] = useState('weekly');
    const [activeModal, setActiveModal] = useState(null); // 'coming_soon', 'logout'

    const CURRENCY = '₹';

    // Mock Data (Scaled for Indian context)
    const mockData = useMemo(() => ({
        user: { name: 'Mariselvam A.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariselvam' },
        balance: { total: 299310.10, income: 522000.00, expense: 222689.90, currency: CURRENCY },
        revenueHistory: [
            { day: 'Mon', revenue: 65, month: 'Jan', mRev: 420 },
            { day: 'Tue', revenue: 45, month: 'Feb', mRev: 380 },
            { day: 'Wed', revenue: 80, month: 'Mar', mRev: 550 },
            { day: 'Thu', revenue: 55, month: 'Apr', mRev: 410 },
            { day: 'Fri', revenue: 100, month: 'May', mRev: 720 },
            { day: 'Sat', revenue: 35, month: 'Jun', mRev: 290 },
            { day: 'Sun', revenue: 60, month: 'Jul', mRev: 480 },
            { month: 'Aug', mRev: 520 },
            { month: 'Sep', mRev: 610 },
            { month: 'Oct', mRev: 590 },
            { month: 'Nov', mRev: 630 },
            { month: 'Dec', mRev: 750 }
        ],
        expenseSplit: [
            { name: 'Rent & Living', value: 50, colorVar: true },
            { name: 'Shopping', value: 30, color: '#ff8e4b' },
            { name: 'Investments', value: 20, color: '#8b4bff' }
        ],
        transactions: [
            { id: 1, name: 'Amazon Marketplace', amount: -28450.50, date: 'Today, 2:45 PM', timestamp: Date.now(), category: 'Shopping', type: 'expense', icon: 'shop' },
            { id: 2, name: 'Salary Deposit', amount: 427000.00, date: 'Yesterday, 9:00 AM', timestamp: Date.now() - 86400000, category: 'Income', type: 'income', icon: 'wallet' },
            { id: 3, name: 'Starbucks Coffee', amount: -1240.40, date: 'Oct 12, 10:30 AM', timestamp: 1728709800000, category: 'Food', type: 'expense', icon: 'coffee' },
            { id: 4, name: 'Emirates Airlines', amount: -184000.00, date: 'Oct 11, 4:20 PM', timestamp: 1728642000000, category: 'Travel', type: 'expense', icon: 'plane' },
            { id: 5, name: 'Netflix Annual', amount: -8999.00, date: 'Oct 10, 8:00 AM', timestamp: 1728525600000, category: 'Entertainment', type: 'expense', icon: 'play' },
            { id: 6, name: 'Freelance Payout', amount: 95000.00, date: 'Oct 09, 2:00 PM', timestamp: 1728460800000, category: 'Income', type: 'income', icon: 'code' }
        ],
        subscriptions: [
            { name: 'Premium Cloud', price: '1,499', date: 'Oct 24', color: '#5865f2' },
            { name: 'Office Suite', price: '4,295', date: 'Oct 18', color: '#ffffff' },
            { name: 'Venture Pass', price: '1,999', date: 'Nov 02', color: '#1db954' }
        ]
    }), []);

    const filteredTransactions = useMemo(() => {
        let filtered = mockData.transactions.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = categoryFilter === 'all' || t.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });

        filtered.sort((a, b) => sortOrder === 'latest' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp);
        return filtered;
    }, [mockData.transactions, searchQuery, categoryFilter, sortOrder]);

    const value = {
        role, setRole,
        theme, setTheme,
        searchQuery, setSearchQuery,
        categoryFilter, setCategoryFilter,
        sortOrder, setSortOrder,
        chartView, setChartView,
        activeModal, setActiveModal,
        CURRENCY,
        mockData,
        filteredTransactions
    };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};
