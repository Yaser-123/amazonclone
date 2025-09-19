import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Back to Top */}
      <div 
        className="bg-gray-700 hover:bg-gray-600 text-center py-3 cursor-pointer transition-colors duration-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-sm font-medium">Back to top</span>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get to Know Us */}
            <div>
              <h3 className="text-sm font-bold mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Careers
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    About Amazon
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Investor Relations
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon Devices
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon Science
                  </button>
                </li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h3 className="text-sm font-bold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Sell products on Amazon
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Sell on Amazon Business
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Sell apps on Amazon
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Become an Affiliate
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Advertise Your Products
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Self-Publish with Us
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Host an Amazon Hub
                  </button>
                </li>
              </ul>
            </div>

            {/* Amazon Payment Products */}
            <div>
              <h3 className="text-sm font-bold mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon Business Card
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Shop with Points
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Reload Your Balance
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon Currency Converter
                  </button>
                </li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="text-sm font-bold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon and COVID-19
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Your Account
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Your Orders
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Shipping Rates & Policies
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Returns & Replacements
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Manage Your Content and Devices
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Amazon Assistant
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white hover:underline">
                    Help
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Amazon Logo and Language Selector */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <div className="text-2xl font-bold">
                <span className="text-orange-400">amazon</span>
              </div>
            </div>

            {/* Language and Country Selector */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center space-x-2 border border-gray-600 rounded px-3 py-1 hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a18.705 18.705 0 01-3.107 2.027 1 1 0 11-.894-1.788 16.72 16.72 0 002.334-1.527c-.593-.899-1.13-1.846-1.604-2.82-.945.061-1.883.188-2.806.381a1 1 0 11-.364-1.965c1.04-.193 2.099-.328 3.17-.398V3a1 1 0 011-1zM9 8.5c.497.64 1.024 1.256 1.575 1.844.269-.328.525-.665.769-1.01.35-.494.682-1.01.995-1.548L9 8.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">English</span>
              </button>

              <button className="flex items-center space-x-2 border border-gray-600 rounded px-3 py-1 hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm">🇺🇸</span>
                <span className="text-sm">United States</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-xs">
            <div>
              <h4 className="font-semibold mb-2">Amazon Music</h4>
              <p className="text-gray-400">Stream millions of songs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Amazon Advertising</h4>
              <p className="text-gray-400">Find, attract, and engage customers</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">6pm</h4>
              <p className="text-gray-400">Score deals on fashion brands</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AbeBooks</h4>
              <p className="text-gray-400">Books, art & collectibles</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">ACX</h4>
              <p className="text-gray-400">Audiobook Publishing Made Easy</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sell on Amazon</h4>
              <p className="text-gray-400">Start a Selling Account</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Amazon Business</h4>
              <p className="text-gray-400">Everything For Your Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-gray-400">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 mb-2 md:mb-0">
              <button className="hover:text-white">
                Conditions of Use
              </button>
              <button className="hover:text-white">
                Privacy Notice
              </button>
              <button className="hover:text-white">
                Interest-Based Ads
              </button>
            </div>
            <div className="text-center md:text-right">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;