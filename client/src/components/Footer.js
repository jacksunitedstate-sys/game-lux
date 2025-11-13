import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newsletter/subscribe', { email });
      setMessage('Successfully subscribed to newsletter!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Subscription failed');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="bg-gta-blue border-t border-gta-neon/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-gta font-bold mb-4">
              <span className="text-gta-neon">GTA</span>
              <span className="text-gta-gold"> LUX</span>
            </div>
            <p className="text-gray-400 font-body mb-4">
              Your ultimate destination for GTA 6 news, videos, blogs, leaks, updates, and guides.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gta-neon hover:text-gta-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gta-neon hover:text-gta-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gta-neon hover:text-gta-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 2.93 2.93 0 001.71 1.54A78.36 78.36 0 0012 19.73a78.45 78.45 0 008.34-.3 2.87 2.87 0 001.46-.74c.9-.83 1-2.25 1.1-3.45a48.29 48.29 0 000-6.48zM9.75 14.85V8.66l5.37 3.11z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gta-neon hover:text-gta-gold transition-colors duration-300"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-gta text-gta-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-gta text-gta-gold mb-4">Resources</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/downloads" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  About GTA 6
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gta-neon transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-gta text-gta-gold mb-4">Newsletter</h3>
            <p className="text-gray-400 font-body mb-4">
              Subscribe to get the latest GTA 6 updates directly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 bg-gta-dark border border-gta-neon/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gta-neon transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gta-neon text-gta-dark rounded-lg font-body font-semibold hover:shadow-neon transition-all duration-300"
              >
                Subscribe
              </button>
              {message && (
                <p className={`text-sm ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gta-neon/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-body text-sm">
              © {new Date().getFullYear()} GTA Lux. All rights reserved.
            </p>
            <p className="text-gray-400 font-body text-sm mt-2 md:mt-0">
              Not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
