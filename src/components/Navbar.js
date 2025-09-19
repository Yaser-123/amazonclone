import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, searchCategory);
    }
    // Navigate to home page to show search results
    navigate('/');
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value, searchCategory);
    }
  };

  return (
    <nav className="bg-gray-900 text-white">
      {/* Main Navigation Bar */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-orange-400">amazon</span>
              </div>
            </Link>

            {/* Delivery Location - Hidden on mobile */}
            <div className="hidden md:flex items-center text-sm">
              <div className="flex flex-col">
                <span className="text-gray-300 text-xs">Deliver to</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">United States</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <form onSubmit={handleSearch} className="flex">
                <select 
                  className="bg-gray-200 text-gray-900 px-3 py-2 rounded-l-md border-r border-gray-300 focus:outline-none"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Books</option>
                  <option>Home & Garden</option>
                  <option>Sports</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Amazon"
                  className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button 
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Right Side Menu */}
            <div className="flex items-center space-x-6">
              {/* Language */}
              <div className="hidden md:flex items-center text-sm">
                <span className="mr-1">🇺🇸</span>
                <span>EN</span>
              </div>

              {/* Account & Lists */}
              <div className="hidden md:flex flex-col text-sm">
                <span className="text-xs">Hello, sign in</span>
                <span className="font-bold">Account & Lists</span>
              </div>

              {/* Returns & Orders */}
              <div className="hidden md:flex flex-col text-sm">
                <span className="text-xs">Returns</span>
                <span className="font-bold">& Orders</span>
              </div>

              {/* Cart */}
              <Link to="/cart" className="flex items-center relative">
                <div className="relative">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H19" />
                  </svg>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {getCartItemsCount()}
                    </span>
                  )}
                </div>
                <span className="ml-1 text-sm font-bold">Cart</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-10 space-x-6 text-sm">
            <button className="flex items-center space-x-1 hover:border border-white px-2 py-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>All</span>
            </button>
            <Link to="/deals" className="hover:border border-white px-2 py-1">Today's Deals</Link>
            <Link to="/customer-service" className="hover:border border-white px-2 py-1">Customer Service</Link>
            <Link to="/registry" className="hover:border border-white px-2 py-1">Registry</Link>
            <Link to="/gift-cards" className="hover:border border-white px-2 py-1">Gift Cards</Link>
            <Link to="/sell" className="hover:border border-white px-2 py-1">Sell</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 hover:bg-gray-700 px-2 rounded">Home</Link>
            <Link to="/cart" className="block py-2 hover:bg-gray-700 px-2 rounded">Cart ({getCartItemsCount()})</Link>
            <div className="block py-2 hover:bg-gray-700 px-2 rounded">Account & Lists</div>
            <div className="block py-2 hover:bg-gray-700 px-2 rounded">Returns & Orders</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;