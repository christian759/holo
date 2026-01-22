import { Shield, Lock, Eye, CheckCircle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-flex p-3 rounded-2xl bg-green-400/10 text-green-400 mb-6">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Battle Tested <br /> Security</h1>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Security is not a feature, it's our foundation. HOLO employs
                        military-grade cryptography and rigorous auditing processes to protect your assets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <div className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Lock size={120} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Formal Verification</h3>
                        <p className="text-zinc-500 leading-relaxed mb-8">
                            We use mathematical proofs to ensure our protocol and smart contracts
                            behave exactly as intended. This eliminates entire classes of potential
                            vulnerabilities before they can ever be exploited.
                        </p>
                        <div className="space-y-4">
                            {['Proven Core Logic', 'Verified Token Sandboxing', 'Secure State Transitions'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-300">
                                    <CheckCircle size={18} className="text-green-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Eye size={120} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Continuous Auditing</h3>
                        <p className="text-zinc-500 leading-relaxed mb-8">
                            Our codebase is constantly scrutinized by world-leading security firms
                            and our active bug bounty community. We believe in transparency and
                            frequent third-party validation.
                        </p>
                        <div className="space-y-4">
                            {['24/7 Threat Monitoring', 'Real-time Alerting', 'Bi-annual Deep Audits'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-300">
                                    <CheckCircle size={18} className="text-green-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-16 rounded-[60px] bg-gradient-to-br from-red-500/5 to-transparent border border-white/5 mb-32">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-20 h-20 shrink-0 rounded-3xl bg-red-500/10 text-red-400 flex items-center justify-center">
                            <ShieldAlert size={40} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black mb-4">Bug Bounty Program</h2>
                            <p className="text-zinc-500 leading-relaxed mb-6">
                                Think you can break HOLO? We offer rewards up to $1,000,000 for critical
                                vulnerability reports. Join our community of white-hat hackers and help
                                us build the most secure network in history.
                            </p>
                            <Link
                                to="/docs"
                                className="inline-block px-8 py-4 bg-white text-background rounded-2xl font-bold hover:scale-105 transition-transform"
                            >
                                Submit a Finding
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
