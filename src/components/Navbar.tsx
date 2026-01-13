import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto max-w-7xl mt-4 rounded-2xl glass-morphism"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent-yellow rounded-lg flex items-center justify-center font-bold text-background text-xl">H</div>
                <span className="text-xl font-bold tracking-tight">HOLO</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">Features</a>
                <a href="#" className="hover:text-white transition-colors">Ecosystem</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
                <a href="#" className="hover:text-white transition-colors">Developers</a>
            </div>

            <div className="flex items-center gap-4">
                <button className="hidden sm:block text-sm font-medium hover:text-accent-yellow transition-colors">Sign In</button>
                <button className="px-5 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-bold glow-yellow hover:scale-105 transition-transform active:scale-95">
                    Launch App
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
