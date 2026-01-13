import { motion } from 'framer-motion';
import { Code2, Share2, Layers } from 'lucide-react';

const BlockchainBlock = () => {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                            <Code2 size={24} />
                        </div>
                        <span className="text-sm font-bold text-accent-blue uppercase tracking-widest">Transparency first</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Trustless Execution, <br />
                        <span className="text-zinc-500">Visible to All.</span>
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="mt-1"><Share2 className="text-accent-yellow" size={20} /></div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Open Source Core</h4>
                                <p className="text-zinc-400 text-sm">Every line of code is audited and accessible to the public, ensuring maximum safety.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="mt-1"><Layers className="text-accent-yellow" size={20} /></div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Multi-chain Interop</h4>
                                <p className="text-zinc-400 text-sm">Seamlessly bridge assets and data across all major L1 and L2 networks.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Decorative tech motifs */}
                    <div className="absolute inset-0 bg-accent-blue/5 rounded-full blur-3xl" />

                    <div className="relative p-12 glass-morphism rounded-[40px] border-white/5 overflow-hidden">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-[10px] font-mono text-zinc-500 tracking-tighter uppercase italic">contract_v2.0_debug</div>
                        </div>

                        <div className="space-y-4 font-mono text-xs text-zinc-400">
                            <div className="flex gap-4">
                                <span className="text-zinc-600">01</span>
                                <span>contract <span className="text-accent-yellow">HoloVault</span> &#123;</span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-zinc-600">02</span>
                                <span>mapping(address =&gt; uint) <span className="text-accent-blue">balances</span>;</span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-zinc-600">03</span>
                                <span></span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-zinc-600">04</span>
                                <span>function <span className="text-green-400">deposit</span>() public payable &#123;</span>
                            </div>
                            <div className="flex gap-4 pl-8 border-l border-white/10">
                                <span className="text-zinc-600">05</span>
                                <span>balances[msg.sender] += msg.value;</span>
                            </div>
                            <div className="flex gap-4 pl-8 border-l border-white/10">
                                <span className="text-zinc-600">06</span>
                                <span>emit <span className="text-accent-blue">DepositConfirmed</span>(msg.sender, msg.value);</span>
                            </div>
                            <div className="flex gap-4 pl-4">
                                <span className="text-zinc-600">07</span>
                                <span>&#125;</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-600">08</span>
                                <span>&#125;</span>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-background bg-accent-yellow flex items-center justify-center text-[10px] font-bold text-background">+12k</div>
                            </div>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">Developers active</span>
                        </div>
                    </div>

                    {/* Floating micro elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 p-4 glass-morphism rounded-2xl border-accent-yellow/20 hidden md:block"
                    >
                        <div className="text-[10px] text-accent-yellow font-bold uppercase mb-1">Total TPS</div>
                        <div className="text-xl font-black">1.4M+</div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default BlockchainBlock;
