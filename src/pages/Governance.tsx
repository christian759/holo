import { Gavel, FileText, Vote, } from 'lucide-react';

const Governance = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-bold uppercase tracking-widest mb-6">
                            <Gavel size={14} />
                            Community Controlled
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                            Decentralized <br /> Governance
                        </h1>
                        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                            Power to the people. HOLO is governed by its community through
                            a transparent, secure, and multi-stage voting process.
                            Shape the future of the protocol.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-accent-yellow text-background rounded-2xl font-bold hover:scale-105 transition-transform">
                                Stake & Vote
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                                View Proposals
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-accent-yellow/20 rounded-full blur-[120px]" />
                        <div className="relative p-8 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                            <div className="space-y-6">
                                {[
                                    { label: 'Total Proposals', value: '142', growth: '+12%' },
                                    { label: 'Active Voters', value: '45.2k', growth: '+5.4%' },
                                    { label: 'Staked HOLO', value: '820M', growth: '+2.1%' }
                                ].map((stat) => (
                                    <div key={stat.label} className="p-6 rounded-2xl bg-black/40 border border-white/5 flex justify-between items-end">
                                        <div>
                                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                            <div className="text-3xl font-black">{stat.value}</div>
                                        </div>
                                        <div className="text-xs font-bold text-green-400 mb-1">{stat.growth}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5">
                        <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-8">
                            <FileText size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Submit Proposals</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            Any token holder can submit a HIP (HOLO Improvement Proposal).
                            Proposals undergo rigorous community discussion and technical
                            review before moving to a formal vote.
                        </p>
                    </div>
                    <div className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5">
                        <div className="w-14 h-14 rounded-2xl bg-green-400/10 text-green-400 flex items-center justify-center mb-8">
                            <Vote size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">On-Chain Voting</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            Cast your vote directly on the blockchain. Our voting system
                            is resistant to sybil attacks and ensures that the weight of
                            each vote is proportionally balanced based on stake.
                        </p>
                    </div>
                </div>

                <section className="text-center">
                    <h2 className="text-4xl font-black mb-16">The Governance Cycle</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discussion', desc: 'Forum debate' },
                            { step: '02', title: 'Final Review', desc: 'Technical audit' },
                            { step: '03', title: 'Voting', desc: 'On-chain ballot' },
                            { step: '04', title: 'Execution', desc: 'Auto-deployment' }
                        ].map((item) => (
                            <div key={item.step} className="relative">
                                <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Governance;
