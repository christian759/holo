import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';

const features = [
    {
        icon: <Shield className="text-accent-yellow" size={24} />,
        title: "Quantum Security",
        description: "Multi-layered cryptographic protocols designed to withstand future computational threats."
    },
    {
        icon: <Zap className="text-accent-yellow" size={24} />,
        title: "Instant Settlement",
        description: "Proprietary consensus engine that achieves sub-second finality with zero trade-offs."
    },
    {
        icon: <Globe className="text-accent-yellow" size={24} />,
        title: "Global Scalability",
        description: "Infrastructure that handles millions of transactions per second through dynamic sharding."
    },
    {
        icon: <Cpu className="text-accent-yellow" size={24} />,
        title: "Smart Execution",
        description: "Next-gen virtual machine optimized for parallel execution of complex smart contracts."
    }
];

const Features = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineered for Excellence</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Built from the ground up to solve the core challenges of decentralization.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-colors group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:glow-yellow transition-all">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
