import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-xs">
                    <Link to="/" className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-accent-yellow rounded-lg flex items-center justify-center font-bold text-background text-xl">H</div>
                        <span className="text-xl font-bold tracking-tight">HOLO</span>
                    </Link>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                        The next generation of blockchain infrastructure. Fast, secure, and infinitely scalable.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"><Github size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Platform</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link to="/infrastructure" className="hover:text-accent-yellow transition-colors">Infrastructure</Link></li>
                            <li><Link to="/governance" className="hover:text-accent-yellow transition-colors">Governance</Link></li>
                            <li><Link to="/security" className="hover:text-accent-yellow transition-colors">Security</Link></li>
                            <li><Link to="/roadmap" className="hover:text-accent-yellow transition-colors">Roadmap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Developers</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link to="/docs" className="hover:text-accent-yellow transition-colors">Documentation</Link></li>
                            <li><Link to="/docs" className="hover:text-accent-yellow transition-colors">API Reference</Link></li>
                            <li><Link to="/docs" className="hover:text-accent-yellow transition-colors">SDKs</Link></li>
                            <li><Link to="/grants" className="hover:text-accent-yellow transition-colors">Grants</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Stay Updated</h4>
                        <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
                            <input type="email" placeholder="Your email" className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full" />
                            <button className="p-2 bg-accent-yellow text-background rounded-lg"><Mail size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                <div>© 2026 HOLO LABS INC. ALL RIGHTS RESERVED.</div>
                <div className="flex gap-8">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                    <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
