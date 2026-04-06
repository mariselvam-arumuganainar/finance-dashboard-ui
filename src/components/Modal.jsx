import React from 'react';
import { X, Rocket, LogOut, Heart } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const Modal = () => {
    const { activeModal, setActiveModal } = useDashboard();

    if (!activeModal) return null;

    const isComingSoon = activeModal === 'coming_soon';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setActiveModal(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative glass-card w-full max-w-lg overflow-hidden shadow-2xl border-white/10 animate-in fade-in zoom-in duration-300">
                <button 
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <X className="w-5 h-5 text-text-muted" />
                </button>

                <div className="p-10 text-center flex flex-col items-center">
                    {isComingSoon ? (
                        <>
                            <div className="w-20 h-20 rounded-3xl bg-theme-soft flex items-center justify-center mb-6 shadow-xl shadow-theme-glow/20">
                                <Rocket className="w-10 h-10 text-theme-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Feature Coming Soon!</h2>
                            <p className="text-text-muted text-lg leading-relaxed max-w-xs">
                                We are working hard to bring this feature to your dashboard. Stay tuned for updates!
                            </p>
                            <button 
                                onClick={() => setActiveModal(null)}
                                className="btn-primary mt-10 w-full py-4 text-base"
                            >
                                Got it, thanks!
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mb-6 shadow-xl shadow-red-500/10">
                                <LogOut className="w-10 h-10 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Logging Out?</h2>
                            <div className="flex items-center gap-2 text-theme-primary mb-2">
                                <Heart className="w-4 h-4 fill-current" />
                                <span className="text-sm font-bold uppercase tracking-widest">Motivation</span>
                            </div>
                            <p className="text-text-muted text-lg leading-relaxed mb-10 italic">
                                "Your financial freedom is closer than you think. Every small step counts. See you soon, Champion!"
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <button 
                                    onClick={() => setActiveModal(null)}
                                    className="flex-1 px-6 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                                >
                                    Stay logged in
                                </button>
                                <button 
                                    onClick={() => {
                                        setActiveModal(null);
                                        // Potential logout logic here
                                    }}
                                    className="flex-1 btn-primary py-4 text-base !bg-red-500 !text-white !shadow-red-500/30"
                                >
                                    Yes, Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Decorative background blur */}
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-theme-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
    );
};

export default Modal;
