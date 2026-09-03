import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-400">OKX</div>
          <div className="flex gap-6 items-center">
            <Link href="/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>
            <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
            Welcome to <span className="text-blue-400">OKX</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Your gateway to secure and easy cryptocurrency investing
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-lg">
                Start Investing Now
              </button>
            </Link>
            <Link href="/learning">
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <p className="text-gray-400">Cryptocurrencies Available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5T+</div>
            <p className="text-gray-400">Total Market Cap</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <p className="text-gray-400">Market Access</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose OKX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Easy Investing</h3>
              <p className="text-gray-400">
                Invest in Bitcoin, Ethereum, and 1000+ cryptocurrencies with just a few clicks. No complex processes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Data</h3>
              <p className="text-gray-400">
                Track live prices, market trends, and portfolio performance instantly. Data updates 24/7.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure & Safe</h3>
              <p className="text-gray-400">
                Industry-leading security measures, encrypted transactions, and protected user data.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-3">Learn & Earn</h3>
              <p className="text-gray-400">
                Access 8+ comprehensive courses to master crypto investing and make informed decisions.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-3">Portfolio Tracking</h3>
              <p className="text-gray-400">
                Monitor all your investments in one place. Get real-time profit/loss calculations.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Fast Trading</h3>
              <p className="text-gray-400">
                Lightning-fast transactions and instant settlement. Never miss market opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20 bg-gray-800 rounded-lg p-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Create Account</h3>
              <p className="text-gray-400">Sign up with your email and create a secure password</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Learn & Explore</h3>
              <p className="text-gray-400">Take courses and browse 1000+ cryptocurrencies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Make Investment</h3>
              <p className="text-gray-400">Choose your crypto and invest securely</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Track & Grow</h3>
              <p className="text-gray-400">Monitor portfolio and watch your wealth grow</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 mb-4">
                "OKX made it so easy to start investing in crypto. The learning materials are incredibly helpful!"
              </p>
              <p className="font-semibold text-white">John Smith</p>
              <p className="text-gray-400 text-sm">Crypto Investor</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 mb-4">
                "The portfolio tracking feature is amazing. I can see all my investments and profits at a glance."
              </p>
              <p className="font-semibold text-white">Sarah Johnson</p>
              <p className="text-gray-400 text-sm">Portfolio Manager</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 mb-4">
                "Security is top-notch. I feel safe trusting OKX with my cryptocurrency investments."
              </p>
              <p className="font-semibold text-white">Mike Chen</p>
              <p className="text-gray-400 text-sm">Security Expert</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 text-center border border-blue-700">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Crypto Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of investors already earning with OKX. Start with as little as $10.
          </p>
          <Link href="/signup">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300 transform hover:scale-105 text-lg">
              Create Free Account
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">OKX</h4>
              <p className="text-gray-400">The ultimate platform for cryptocurrency investment.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/invest" className="hover:text-white transition">Invest</a></li>
                <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="/learning" className="hover:text-white transition">Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OKX. All rights reserved. | Disclaimer: Cryptocurrency investments carry risk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
