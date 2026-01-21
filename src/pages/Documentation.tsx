import React from 'react';
import { Book, Code, Terminal, Zap, Shield, Cpu } from 'lucide-react';

const Documentation = () => {
    const sections = [
        {
            title: 'Getting Started',
            icon: <Zap className="text-accent-yellow" />,
            items: ['Introduction', 'Quick Start Guide', 'Core Concepts', 'Network Architecture']
        },
        {
            title: 'API Reference',
            icon: <Code className="text-accent-blue" />,
            items: ['REST API', 'GraphQL API', 'WebSocket Streams', 'Authentication']
        },
        {
            title: 'SDKs & Tools',
            icon: <Terminal className="text-zinc-400" />,
            items: ['JavaScript SDK', 'Python SDK', 'Rust Crate', 'CLI Tool']
        },
        {
            title: 'Security',
            icon: <Shield className="text-green-400" />,
            items: ['Best Practices', 'Audits', 'Bug Bounty', 'Key Management']
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 shrink-0 space-y-8">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <div className="flex items-center gap-2 mb-4 font-bold text-sm tracking-widest uppercase text-zinc-500">
                                    {section.icon}
                                    {section.title}
                                </div>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose prose-invert max-w-none">
                            <h1 className="text-5xl font-black mb-8 tracking-tighter">Documentation</h1>
                            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                                Welcome to the HOLO developer documentation. Learn how to build, deploy, and scale
                                decentralized applications on the world's most advanced blockchain infrastructure.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-yellow/50 transition-colors group cursor-pointer">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-accent-yellow/10 text-accent-yellow group-hover:scale-110 transition-transform">
                                            <Book size={20} />
                                        </div>
                                        Read the Guides
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        Step-by-step tutorials to help you go from zero to deploying your first smart contract.
                                    </p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/50 transition-colors group cursor-pointer">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue group-hover:scale-110 transition-transform">
                                            <Cpu size={20} />
                                        </div>
                                        Node Setup
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        Learn how to run a validator node and contribute to the network security and decentralization.
                                    </p>
                                </div>
                            </div>

                            <section className="space-y-8">
                                <h2 className="text-3xl font-bold">Introduction to HOLO</h2>
                                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5">
                                    <p className="text-zinc-400 leading-relaxed mb-6">
                                        HOLO is a high-performance Layer 1 blockchain designed for mass adoption.
                                        It features a unique consensus mechanism that enables sub-second finality
                                        and negligible transaction fees without compromising on security.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">TPS: 50,000+</div>
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">Finality: ~400ms</div>
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">Fee: $0.00001</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
