import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <div className="text-[150px] font-black leading-none tracking-tighter text-white/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    404
                </div>
                <h1 className="text-5xl font-black mb-6 relative z-10">Lost in Space?</h1>
                <p className="text-zinc-400 mb-12 max-w-md mx-auto relative z-10">
                    The block you're looking for doesn't exist on this chain. It might have been pruned or never mined.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-yellow text-background rounded-2xl font-bold hover:scale-105 transition-transform">
                        <Home size={20} />
                        Back home
                    </Link>
                    <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
