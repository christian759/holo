import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-height-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center px-6">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-accent-yellow mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-yellow"></span>
                    </span>
                    Next Gen Web3 Infrastructure
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] text-gradient">
                    The Operating System <br />
                    <span className="text-white">for Digital Assets</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Holo provides the tools for developers and institutions to build secure,
                    scalable, and transparent blockchain solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-background rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                        Get Started <ArrowUpRight size={20} />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                        View Documentation
                    </button>
                </div>
            </motion.div>

            {/* Hero Image / Mockup Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-20 relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden glass-morphism p-2"
            >
                <div className="w-full h-full bg-zinc-900/50 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                    {/* Decorative tech grid overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="z-10 text-center">
                        <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-blue/30">
                            <div className="w-12 h-12 bg-accent-blue rounded-full scale-animation" />
                        </div>
                        <p className="text-sm font-mono text-accent-blue">NETWORK_STATUS: ACTIVE</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

const style = document.createElement('style');
style.textContent = `
  @keyframes scale-animation {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
  }
  .scale-animation {
    animation: scale-animation 2s infinite ease-in-out;
  }
`;
document.head.appendChild(style);
