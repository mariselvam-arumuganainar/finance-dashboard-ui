import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Bell, LogOut, Settings, Hexagon, Search, Moon, Sun, Monitor } from 'lucide-react';
import logo from '../assets/favicon.svg';

const Header = () => {
    const { role, setRole, theme, setTheme, setActiveModal } = useDashboard();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const themes = [
        { id: 'neon', name: 'Wolf Carbon', color: 'bg-[#dfff3b]', icon: <Monitor className="w-4 h-4" /> },
        { id: 'arctic', name: 'Wolf Arctic', color: 'bg-[#3b82f6]', icon: <Sun className="w-4 h-4" /> },
        { id: 'midnight', name: 'Wolf Midnight', color: 'bg-[#f43f5e]', icon: <Moon className="w-4 h-4" /> }
    ];

    const navItems = [
        { name: 'Dashboard', active: true },
        { name: 'Statistics', active: false },
        { name: 'Transactions', active: false },
        { name: 'My Wallet', active: false }
    ];

    const handleNavClick = (name) => {
        if (name === 'Dashboard') return;
        setActiveModal('coming_soon');
    };

    return (
        <header className="glass-header h-20 px-8 flex items-center justify-between">
            {/* Logo and Nav */}
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.reload()}>
                    <div className="w-10 h-10 bg-theme-primary rounded-xl flex items-center justify-center shadow-lg shadow-theme-glow/20 transition-all group-hover:scale-105 overflow-hidden p-1">
                        <img src={logo} alt="Wolf Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-black tracking-tight uppercase text-text-main">Wolf <span className="text-theme-primary">&</span> Villain</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button 
                            key={item.name}
                            onClick={() => handleNavClick(item.name)}
                            className={`text-sm font-bold tracking-wide transition-all hover:text-theme-primary ${item.active ? 'text-theme-primary' : 'text-text-muted'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-white/5 rounded-xl px-4 py-2 border border-white/5 focus-within:border-theme-primary/30 transition-all">
                    <Search className="w-4 h-4 text-text-muted" />
                    <input 
                        type="text" 
                        placeholder="Search anything..." 
                        className="bg-transparent border-none outline-none text-sm px-3 w-48 text-text-main placeholder:text-text-muted/50"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={() => setActiveModal('coming_soon')} className="icon-btn">
                        <Bell className="w-5 h-5 text-text-main" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-theme-primary rounded-full border-2 border-bg-darker"></span>
                    </button>
                    
                    {/* Role Switcher */}
                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                        <button 
                            onClick={() => setRole('admin')}
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${role === 'admin' ? 'bg-theme-primary text-black' : 'text-text-muted'}`}
                        >
                            Admin
                        </button>
                        <button 
                            onClick={() => setRole('viewer')}
                            className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${role === 'viewer' ? 'bg-theme-primary text-black' : 'text-text-muted'}`}
                        >
                            Viewer
                        </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-white/5 transition-all group"
                        >
                            <div className="text-right hidden lg:block">
                                <p className="text-sm font-bold text-text-main">Mariselvam A.</p>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{role}</p>
                            </div>
                            <img 
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mariselvam" 
                                alt="Avatar" 
                                className="w-10 h-10 rounded-xl bg-white/10 p-0.5 border border-white/10 group-hover:border-theme-primary/50 transition-colors"
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <>
                                <div className="fixed inset-0 z-[90]" onClick={() => setIsProfileOpen(false)}></div>
                                <div className="absolute top-full right-0 mt-3 w-64 glass-card p-2 border-white/10 z-[100] animate-in fade-in slide-in-from-top-2 overflow-hidden">
                                    <div className="p-3 mb-2 border-b border-white/5">
                                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3">Theme Selection</p>
                                        <div className="grid grid-cols-1 gap-1">
                                            {themes.map((t) => (
                                                <button 
                                                    key={t.id}
                                                    onClick={() => {
                                                        setTheme(t.id);
                                                        setIsProfileOpen(false);
                                                    }}
                                                    className={`flex items-center justify-between w-full p-2.5 rounded-lg transition-all hover:bg-white/5 ${theme === t.id ? 'bg-white/10' : ''}`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-3 h-3 rounded-full ${t.color}`}></div>
                                                        <span className="text-sm font-medium text-text-main">{t.name}</span>
                                                    </div>
                                                    <span className="text-text-muted">{t.icon}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => {
                                            setActiveModal('coming_soon');
                                            setIsProfileOpen(false);
                                        }}
                                        className="flex items-center gap-3 w-full p-3 rounded-lg text-text-main hover:bg-white/5 transition-all mb-1"
                                    >
                                        <Settings className="w-4 h-4 text-text-muted" />
                                        <span className="text-sm font-medium">Settings</span>
                                    </button>

                                    <button 
                                        onClick={() => {
                                            setActiveModal('logout');
                                            setIsProfileOpen(false);
                                        }}
                                        className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-500/5 transition-all"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-sm font-bold uppercase tracking-widest text-[10px]">Logout</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
