import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BlockchainBlock from './components/BlockchainBlock';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent-yellow/30 selection:text-accent-yellow">
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <Navbar />

      <main>
        <Hero />

        {/* Partners / Social Proof Marquee placeholder */}
        <div className="py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-30">
            <div className="text-xl font-black tracking-tighter">BINANCE</div>
            <div className="text-xl font-black tracking-tighter">COINBASE</div>
            <div className="text-xl font-black tracking-tighter">A16Z</div>
            <div className="text-xl font-black tracking-tighter">PARADIGM</div>
            <div className="text-xl font-black tracking-tighter">POLYGON</div>
          </div>
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="security">
          <BlockchainBlock />
        </div>

        <div id="ecosystem">
          <Community />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        {/* Pre-footer CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-accent-blue/10 to-accent-yellow/10 border border-white/10 p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-yellow/20 rounded-full blur-[100px]" />

            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to build the <br /> future of finance?</h2>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto relative z-10">Join 10,000+ developers building on the most secure and scalable Web3 infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-accent-yellow text-background rounded-2xl font-bold glow-yellow hover:scale-105 transition-transform">Get Started Now</button>
              <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
