import { motion } from 'framer-motion';
import { Users, MessageSquare, Globe2, Sparkles } from 'lucide-react';

const Community = () => {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-xs font-bold text-accent-blue mb-6 uppercase tracking-widest">
                            Built by Developers
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            A Global Ecosystem <br />
                            <span className="text-accent-yellow">Growing Faster Every Day.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-xl">
                            Join millions of developers, creators, and enthusiasts building the future of the decentralized web.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <div className="text-3xl font-black mb-1">2.4M+</div>
                                <div className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">Active Wallets</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black mb-1">150+</div>
                                <div className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">Global Hubs</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black mb-1">$400M+</div>
                                <div className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">TVL in Ecosystem</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black mb-1">24/7</div>
                                <div className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">Network Uptime</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="p-6 glass-morphism rounded-3xl border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-2xl bg-accent-blue/20 flex items-center justify-center text-accent-blue mb-4">
                                        <Users size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Developer DAO</h4>
                                    <p className="text-xs text-zinc-500">Participate in protocol governance and shape the roadmap.</p>
                                </div>
                                <div className="p-6 glass-morphism rounded-3xl border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-2xl bg-accent-yellow/20 flex items-center justify-center text-accent-yellow mb-4">
                                        <MessageSquare size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Discord Community</h4>
                                    <p className="text-xs text-zinc-500">Real-time support and collaboration with global devs.</p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="p-6 glass-morphism rounded-3xl border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                        <Globe2 size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Web3 Summits</h4>
                                    <p className="text-xs text-zinc-500">Join us at physical events around the world.</p>
                                </div>
                                <div className="p-6 glass-morphism rounded-3xl border-accent-yellow/30 bg-accent-yellow/5 group cursor-pointer hover:bg-accent-yellow/10 transition-colors">
                                    <div className="w-10 h-10 rounded-2xl bg-accent-yellow flex items-center justify-center text-background mb-4">
                                        <Sparkles size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Grant Programs</h4>
                                    <p className="text-xs text-zinc-400">Apply for funding to bootstrap your decentralized project.</p>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-yellow/5 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Community;
