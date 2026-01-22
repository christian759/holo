import React from 'react';
import { Server, Shield, Zap, Globe, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
    const features = [
        {
            icon: <Zap className="text-accent-yellow" />,
            title: "Ultra-Low Latency",
            description: "Proprietary consensus mechanism optimized for speed, delivering sub-400ms finality globally."
        },
        {
            icon: <Globe className="text-accent-blue" />,
            title: "Global Node Network",
            description: "Strategically distributed validator nodes ensuring high availability and resistance to censorship."
        },
        {
            icon: <Shield className="text-green-400" />,
            title: "Institutional Security",
            description: "Multi-layered security protocols including formal verification and hardware-level isolation."
        },
        {
            icon: <Cpu className="text-purple-400" />,
            title: "Infinite Scalability",
            description: "Dynamic sharding technology that automatically scales network capacity based on demand."
        },
        {
            icon: <Database className="text-orange-400" />,
            title: "Storage Layer",
            description: "Integrated decentralized storage for efficient processing of large-scale on-chain data."
        },
        {
            icon: <Server className="text-pink-400" />,
            title: "Bare Metal Performance",
            description: "Optimized for high-performance hardware, maximizing throughput while minimizing overhead."
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Infrastructure</h1>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        The backbone of the decentralized future. HOLO provides a robust,
                        high-performance foundation for the next generation of global applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {features.map((feature, index) => (
                        <div key={index} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="rounded-[60px] bg-gradient-to-br from-accent-blue/10 to-accent-yellow/10 border border-white/10 p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    </div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-6">Designed for <br /> Developers</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Our infrastructure is built with developer experience as a first-class citizen.
                                Deploy with confidence using industry-standard tools and languages you already know.
                            </p>
                            <Link to="/docs" className="inline-block px-8 py-4 bg-white text-background rounded-2xl font-bold hover:scale-105 transition-transform">
                                Explore the Protocol
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                                <div className="text-3xl font-black mb-1">50k+</div>
                                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">TPS Peak</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                                <div className="text-3xl font-black mb-1">400ms</div>
                                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Finality</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                                <div className="text-3xl font-black mb-1">$0.01</div>
                                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Avg. Fee</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                                <div className="text-3xl font-black mb-1">99.9%</div>
                                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
