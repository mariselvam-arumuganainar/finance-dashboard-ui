import React, { useEffect } from 'react';
import { Monitor, Rocket } from 'lucide-react';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import StatsGrid from './components/StatsGrid';
import RevenueChart from './components/RevenueChart';
import ExpenseSplitChart from './components/ExpenseSplitChart';
import TransactionSection from './components/TransactionSection';
import InsightsCard from './components/InsightsCard';
import Modal from './components/Modal';

const DashboardContent = () => {
  const { theme, setActiveModal } = useDashboard();

  useEffect(() => {
    document.body.className = `font-outfit theme-${theme} transition-colors duration-500`;
  }, [theme]);

  const handleAddCard = () => setActiveModal('coming_soon');

  return (
    <div className={`min-h-screen pb-12 transition-colors duration-500 bg-background-main theme-${theme}`}>
      <Modal />
      <Header />
      <main className="container mx-auto px-8 pt-8 text-text-main">
        <div className="grid grid-cols-12 gap-6">
          {/* Top Row: Balance and Cards */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <BalanceCard />
            <StatsGrid />
          </div>
          <div className="col-span-12 lg:col-span-4">
             <MyCardsSection />
          </div>

          {/* Middle Row: Charts */}
          <div className="col-span-12 lg:col-span-8">
            <RevenueChart />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <ExpenseSplitChart />
          </div>

          {/* Bottom Row: Transactions and AI */}
          <div className="col-span-12 lg:col-span-8">
            <TransactionSection />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <SubscriptionsCard />
            <InsightsCard />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-8 mt-12 py-8 border-t border-white/5 flex justify-between items-center text-text-muted text-sm">
        <p>© 2026 Wolf & Villain - Premium Wealth Management</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

const MyCardsSection = () => {
  const { role, setActiveModal } = useDashboard();
  return (
    <div className="glass-card p-8 h-full min-h-[300px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My cards</h2>
        {role === 'admin' && (
          <button 
            onClick={() => setActiveModal('coming_soon')}
            className="w-8 h-8 flex items-center justify-center bg-theme-primary text-black rounded-lg hover:scale-110 transition-transform shadow-lg shadow-theme-glow/20"
          >
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        )}
      </div>
      <div className="relative h-48 mt-auto group cursor-pointer" onClick={() => setActiveModal('coming_soon')}>
        <div className="absolute inset-0 z-10 p-6 rounded-[20px] bg-gradient-to-br from-[#1e1e28] to-[#0c0a0f] border border-white/10 flex flex-col justify-between shadow-2xl transition-transform group-hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-theme-primary"></div>
              <div className="w-8 h-8 rounded-full bg-white/10"></div>
            </div>
            <span className="text-xs font-bold tracking-widest opacity-60 text-white">WOLF PAY</span>
          </div>
          <span className="text-xl font-medium tracking-[0.2em] text-white">XXXX XXXX XXXX 0081</span>
          <div className="flex justify-between items-end">
             <div className="text-white">
               <p className="text-[10px] opacity-40 font-bold mb-1">HOLDER</p>
               <p className="text-sm font-semibold uppercase">Mariselvam A.</p>
             </div>
             <span className="text-sm font-medium text-white/80">12/26</span>
          </div>
        </div>
        <div className="absolute top-2 left-[5%] w-[90%] h-full rounded-[20px] bg-theme-primary opacity-20 transform translate-y-2 scale-95 z-0 transition-colors duration-300"></div>
      </div>
    </div>
  );
}

const SubscriptionsCard = () => {
  const { mockData, CURRENCY, setActiveModal } = useDashboard();
  return (
    <div className="glass-card p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Subscriptions</h2>
        <button 
          onClick={() => setActiveModal('coming_soon')}
          className="text-sm text-theme-primary hover:underline font-bold"
        >
          See all
        </button>
      </div>
      <div className="space-y-4">
        {mockData.subscriptions.map((sub, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveModal('coming_soon')}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 transition-colors group-hover:bg-white/10" style={{ color: sub.color }}>
               {i === 1 ? <Monitor className="w-4 h-4" /> : <Rocket className="w-4 h-4" />}
            </div>
            <div className="flex-1 min-w-0">
               <h4 className="text-sm font-semibold truncate">{sub.name}</h4>
               <p className="text-xs text-text-muted truncate">Next: {sub.date}</p>
            </div>
            <span className="text-sm font-bold">{CURRENCY}{sub.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}

export default App;
