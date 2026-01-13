import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What makes Holo different from other L1 networks?",
        answer: "Holo uses a unique quantum-resistant consensus engine that achieves sub-second finality while maintaining complete decentralization. Our sharding architecture allows for vertical scalability without compromising security."
    },
    {
        question: "How do I start building on Holo?",
        answer: "You can start by visiting our developer portal. We support both EVM-compatible smart contracts and our proprietary HoloVM for high-performance parallel execution."
    },
    {
        question: "Is Holo compatible with Ethereum and other chains?",
        answer: "Yes, Holo is fully interoperable. We have built-in bridges and cross-chain messaging protocols that allow seamless asset and data transfers between Holo and major EVM and non-EVM networks."
    },
    {
        question: "What are the transaction fees on the network?",
        answer: "Fees are dynamic but typically cost less than $0.001 per transaction. We also implement a unique fee-rebate system for developers who build highly efficient smart contracts."
    },
    {
        question: "Is there a grant program for new projects?",
        answer: "Absolutely. We have a $50M ecosystem fund dedicated to supporting innovative projects that add value to the Holo ecosystem. Grants are distributed based on milestones and impact."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-white/5 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-accent-yellow' : 'text-white group-hover:text-zinc-300'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-accent-yellow border-accent-yellow text-background rotate-180' : 'text-zinc-500'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-zinc-400 leading-relaxed max-w-3xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-white/[0.01]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Frequently Asked <span className="text-zinc-500 italic">Questions</span></h2>
                    <p className="text-zinc-400">Everything you need to know about the Holo infrastructure.</p>
                </div>

                <div className="glass-morphism rounded-[40px] border-white/5 p-8 md:p-12">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
