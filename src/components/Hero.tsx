import { motion } from 'framer-motion';
import { ArrowUpRight, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

const NetworkStatus = () => {
    const [bars, setBars] = useState<number[]>(new Array(20).fill(10));

    useEffect(() => {
        const interval = setInterval(() => {
            setBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end gap-1 h-12">
            {bars.map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 10 }}
                    animate={{ height }}
                    transition={{ duration: 0.1 }}
                    className="w-1 bg-accent-blue/50 rounded-full"
                />
            ))}
        </div>
    );
};

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
                <div className="w-full h-full bg-zinc-900/50 rounded-2xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                    {/* Decorative tech grid overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="z-10 flex flex-col items-center gap-6">
                        <div className="px-6 py-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-6">
                            <div className="text-left">
                                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">TPS (Live)</div>
                                <div className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                                    142,893 <Activity size={16} className="text-green-500 animate-pulse" />
                                </div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <NetworkStatus />
                            <div className="h-10 w-px bg-white/10" />
                            <div className="text-left">
                                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Block Time</div>
                                <div className="text-2xl font-mono font-bold text-white">400ms</div>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[10px] font-mono text-accent-blue/70">
                            <span>shards: active</span>
                            <span>•</span>
                            <span>latency: &lt;10ms</span>
                            <span>•</span>
                            <span>validators: 12k+</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
