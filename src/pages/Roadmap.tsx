import { CheckCircle2, Rocket } from 'lucide-react';

const Roadmap = () => {
    const milestones = [
        {
            phase: 'Phase 1',
            title: 'Genesis & Foundation',
            status: 'completed',
            description: 'Core protocol development, security audits, and initial seed network launch.',
            items: ['Whitepaper Release', 'Testnet v1 Launch', 'Security Audit by CertiK', 'Ecosystem Grant Program']
        },
        {
            phase: 'Phase 2',
            title: 'Expansion & Scale',
            status: 'current',
            description: 'Mainnet launch, cross-chain bridge implementation, and strategic partnerships.',
            items: ['Mainnet Alpha Release', 'HOLO Bridge (ETH/SOL)', 'Governance Portal', 'Developer SDK v2']
        },
        {
            phase: 'Phase 3',
            title: 'Decentralized Future',
            status: 'upcoming',
            description: 'Full DAO migration, sharding implementation, and global infrastructure expansion.',
            items: ['Dynamic Sharding', 'Decentralized Indexing', 'Full DAO Governance', 'Enterprise Integration']
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Strategic <br /> Roadmap</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Our vision for the future of decentralized finance and web3 infrastructure.
                        Tracking our progress as we build the next generation of blockchain.
                    </p>
                </div>

                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <div key={milestone.phase} className="relative pl-12 md:pl-0">
                            {/* Vertical Line for Desktop */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 w-full">
                                    <div className={`p-8 rounded-[40px] bg-white/[0.02] border transition-all duration-500 hover:bg-white/[0.04] ${milestone.status === 'current' ? 'border-accent-yellow/50 shadow-[0_0_50px_-12px_rgba(255,215,0,0.15)]' : 'border-white/5'
                                        }`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                                {milestone.phase}
                                            </span>
                                            {milestone.status === 'completed' && <CheckCircle2 className="text-green-400" size={16} />}
                                            {milestone.status === 'current' && <Rocket className="text-accent-yellow animate-pulse" size={16} />}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">{milestone.description}</p>
                                        <ul className="space-y-2">
                                            {milestone.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                                                    <div className="w-1 h-1 rounded-full bg-accent-yellow" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 rounded-full bg-background border-4 border-white/10 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                                    {milestone.status === 'completed' ? (
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    ) : milestone.status === 'current' ? (
                                        <div className="w-2 h-2 rounded-full bg-accent-yellow" />
                                    ) : (
                                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                                    )}
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
