import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'Features', id: 'features' },
        { name: 'Ecosystem', id: 'ecosystem' },
        { name: 'Security', id: 'security' },
        { name: 'FAQ', id: 'faq' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto transition-all duration-300 ${isScrolled ? 'max-w-7xl mt-4 rounded-2xl glass-morphism shadow-lg' : 'max-w-full bg-transparent mt-0'
                    }`}
            >
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-8 h-8 bg-accent-yellow rounded-lg flex items-center justify-center font-bold text-background text-xl">H</div>
                    <span className="text-xl font-bold tracking-tight">HOLO</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">Developers</button>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium hover:text-accent-yellow transition-colors">Sign In</button>
                    <button className="px-5 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-bold glow-yellow hover:scale-105 transition-transform active:scale-95">
                        Launch App
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-2xl font-bold text-center">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="hover:text-accent-yellow transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <hr className="border-white/10" />
                            <button className="text-xl font-medium text-zinc-400">Sign In</button>
                            <button className="py-4 bg-accent-yellow text-background rounded-2xl text-xl font-bold">
                                Launch App
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
