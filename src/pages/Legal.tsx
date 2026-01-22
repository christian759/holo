
const LegalPage = ({ title }: { title: string }) => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-black mb-12 tracking-tighter">{title}</h1>
                <div className="prose prose-invert max-w-none text-zinc-400 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to HOLO. By using our platform, you agree to these terms.
                            Please read them carefully. Our goal is to provide a secure and
                            transparent blockchain experience for everyone.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Use of Service</h2>
                        <p>
                            You agree to use our services in compliance with all applicable laws
                            and regulations. Any attempt to exploit, disrupt, or manipulate the
                            network is strictly prohibited and may result in immediate termination
                            of access.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Privacy</h2>
                        <p>
                            Your privacy is paramount. While blockchain transactions are inherently
                            public, we do not collect or store personal identifying information
                            on-chain. Please refer to our Privacy Policy for more details.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>
                            HOLO is provided "as is" without any warranties. Users assume all risks
                            associated with blockchain technology, including private key management
                            and transaction finality.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
