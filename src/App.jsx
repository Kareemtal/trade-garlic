import { Youtube, Mail, TrendingUp, BarChart3, Clock, Target, AlertCircle, Twitter, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { GarlicBackground, GarlicIcon } from './components/GarlicBackground'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-1">
                <TrendingUp className="text-emerald-500" size={32} />
                <GarlicIcon className="text-emerald-500/60" size={28} />
              </div>
              <span className="text-2xl font-black text-gradient font-brand tracking-tight">Trade Garlic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-emerald-400 transition">About</a>
              <a href="#philosophy" className="text-gray-300 hover:text-emerald-400 transition">Trading Style</a>
              <a href="#videos" className="text-gray-300 hover:text-emerald-400 transition">Videos</a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative garlic background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <GarlicBackground className="w-[800px] h-[800px] text-gray-700/40" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 font-brand tracking-tight">
            <span className="text-gradient">Trade Garlic</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Simple Charts. Easy Reads. Low Stress Trading.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Day trading futures and stocks using price action, trend lines, and longer time frames. 
            Follow along as I document my trading journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://youtube.com/@tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              <Youtube size={24} />
              Subscribe on YouTube
            </a>
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              <Mail size={24} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-gradient">Kareem</span>
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              I'm Kareem, a trader who's been in the markets for <span className="text-emerald-500 font-semibold">28 years part-time</span> and 
              <span className="text-emerald-500 font-semibold"> 2 years full-time</span>. With an MBA background and extensive experience in B2B sales, 
              I bring a unique perspective to trading that emphasizes clarity, patience, and stress management.
            </p>
            <p className="text-lg text-gray-300">
              Trade Garlic is my trading journal and a space to build trust with the community. 
              I'm not selling anything—just sharing my journey, insights, and daily analysis as I navigate the markets.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Philosophy */}
      <section id="philosophy" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Trading Philosophy</h2>
          <p className="text-center text-gray-400 mb-12">My approach to the markets</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition">
              <BarChart3 className="text-emerald-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Price Action</h3>
              <p className="text-gray-400">
                Clean chart reading focusing on price movement, support, and resistance levels.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition">
              <TrendingUp className="text-emerald-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Trend Lines</h3>
              <p className="text-gray-400">
                Using trend lines and channels to identify direction and potential entry points.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition">
              <Clock className="text-emerald-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Longer Timeframes</h3>
              <p className="text-gray-400">
                Trading 30-minute and daily charts for better clarity and reduced noise.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition">
              <Target className="text-emerald-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Low Stress</h3>
              <p className="text-gray-400">
                Simple, easy-to-read setups that don't require constant monitoring.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-500" />
              What I Trade
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-500 mb-2">Markets</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Futures</li>
                  <li>• Stocks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-500 mb-2">Timeframes</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 30-Minute Charts</li>
                  <li>• Daily Charts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="videos" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Daily <span className="text-gradient">Market Analysis</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Subscribe to my YouTube channel for daily trading videos and market breakdowns
          </p>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
            <Youtube className="text-red-500 mx-auto mb-6" size={64} />
            <h3 className="text-2xl font-semibold mb-4">@tradegarlic</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I post daily videos covering market analysis, trade setups, and my thought process. 
              It's a transparent look at my trading journey—wins, losses, and lessons learned.
            </p>
            <a 
              href="https://youtube.com/@tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              <Youtube size={24} />
              Watch Latest Videos
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Coming Soon</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <MessageCircle className="text-emerald-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Discord Community</h3>
              <p className="text-gray-400">
                Join the conversation and connect with other traders
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <Mail className="text-emerald-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
              <p className="text-gray-400">
                Get weekly market insights delivered to your inbox
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-gray-400 mb-12">Follow my journey across social platforms</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://youtube.com/@tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-red-600 border border-gray-700 hover:border-red-600 text-white px-6 py-4 rounded-lg transition transform hover:scale-105"
            >
              <Youtube size={28} />
              <span className="font-semibold">YouTube</span>
            </a>
            
            <a 
              href="https://x.com/tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-600 text-white px-6 py-4 rounded-lg transition transform hover:scale-105"
            >
              <Twitter size={28} />
              <span className="font-semibold">X (Twitter)</span>
            </a>
            
            <a 
              href="https://instagram.com/tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-pink-600 border border-gray-700 hover:border-pink-600 text-white px-6 py-4 rounded-lg transition transform hover:scale-105"
            >
              <Instagram size={28} />
              <span className="font-semibold">Instagram</span>
            </a>
            
            <a 
              href="https://tiktok.com/@tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-black border border-gray-700 hover:border-white text-white px-6 py-4 rounded-lg transition transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="font-semibold">TikTok</span>
            </a>
            
            <a 
              href="https://facebook.com/tradegarlic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-blue-700 border border-gray-700 hover:border-blue-700 text-white px-6 py-4 rounded-lg transition transform hover:scale-105"
            >
              <Facebook size={28} />
              <span className="font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-12">Have questions or want to connect?</p>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <Mail className="text-emerald-500 mx-auto mb-4" size={48} />
            <a 
              href="mailto:tradegarlicnews@gmail.com" 
              className="text-2xl text-emerald-500 hover:text-emerald-400 transition font-semibold"
            >
              tradegarlicnews@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* SEC Disclaimers */}
      <section className="py-12 px-6 bg-gray-800/50 border-t border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Important Disclosures</h3>
              
              <div className="space-y-4 text-sm text-gray-400">
                <p>
                  <strong className="text-gray-300">CFTC RULE 4.41:</strong> Hypothetical or simulated performance results have certain limitations. 
                  Unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not been executed, 
                  the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity. 
                  Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. 
                  No representation is being made that any account will or is likely to achieve profit or losses similar to those shown.
                </p>
                
                <p>
                  <strong className="text-gray-300">GENERAL DISCLAIMER:</strong> All content provided on this website and social media channels is for 
                  informational and educational purposes only. The information provided does not constitute investment advice, financial advice, 
                  trading advice, or any other sort of advice, and you should not treat any of the website's content as such.
                </p>
                
                <p>
                  Trade Garlic does not recommend that any security should be bought, sold, or held by you. Do conduct your own due diligence and 
                  consult your financial advisor before making any investment decisions. Past performance is not indicative of future results.
                </p>
                
                <p>
                  <strong className="text-gray-300">RISK DISCLOSURE:</strong> Trading futures, stocks, and other financial instruments involves 
                  substantial risk of loss and is not suitable for every investor. The valuation of futures contracts, stocks, and other financial 
                  instruments may fluctuate, and as a result, clients may lose more than their original investment. The impact of seasonal and 
                  geopolitical events is already factored into market prices.
                </p>
                
                <p>
                  <strong className="text-gray-300">NO PROFESSIONAL RELATIONSHIP:</strong> The content on this website does not create a 
                  professional-client relationship between you and Trade Garlic or Kareem. You acknowledge that all trading decisions are made 
                  independently and at your own risk.
                </p>
                
                <p>
                  <strong className="text-gray-300">TESTIMONIALS DISCLAIMER:</strong> Testimonials appearing on this site, if any, are from 
                  individual experiences, reflecting real-life experiences of those who have used our products and/or services in some way. 
                  However, they are individual results and results do vary. We do not claim that they are typical results that consumers will 
                  generally achieve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <TrendingUp className="text-emerald-500" size={24} />
              <GarlicIcon className="text-emerald-500/60" size={20} />
            </div>
            <span className="text-xl font-black text-gradient font-brand tracking-tight">Trade Garlic</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Trade Garlic. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            www.tradegarlic.com
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
