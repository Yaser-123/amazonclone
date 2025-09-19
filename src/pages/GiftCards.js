import React, { useState } from 'react';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('birthday');

  const giftCardDesigns = [
    { id: 'birthday', name: 'Birthday', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop' },
    { id: 'thank-you', name: 'Thank You', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop' },
    { id: 'congratulations', name: 'Congratulations', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop' },
    { id: 'holiday', name: 'Holiday', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=300&h=200&fit=crop' },
    { id: 'wedding', name: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop' },
    { id: 'baby', name: 'Baby', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=200&fit=crop' }
  ];

  const predefinedAmounts = ['25', '50', '100', '200'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Amazon Gift Cards</h1>
          <p className="text-xl text-gray-600">Give the gift of choice with Amazon Gift Cards</p>
        </div>

        {/* Gift Card Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Gift Cards</h3>
            <p className="text-gray-600 mb-4">Send instantly via email with personalized message</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Send by Email
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Print at Home</h3>
            <p className="text-gray-600 mb-4">Print beautiful gift cards at home instantly</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Print Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Cards</h3>
            <p className="text-gray-600 mb-4">Beautiful physical cards delivered to your door</p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">
              Order Physical
            </button>
          </div>
        </div>

        {/* Gift Card Builder */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Gift Card</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Options */}
            <div className="space-y-6">
              {/* Amount Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Amount</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {predefinedAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-md border-2 font-semibold ${
                        selectedAmount === amount 
                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount('');
                      }}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                      max="2000"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Minimum $1, Maximum $2,000</p>
                </div>
              </div>

              {/* Design Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Design</h3>
                <div className="grid grid-cols-2 gap-3">
                  {giftCardDesigns.map(design => (
                    <button
                      key={design.id}
                      onClick={() => setSelectedDesign(design.id)}
                      className={`relative rounded-lg overflow-hidden border-2 ${
                        selectedDesign === design.id 
                          ? 'border-blue-500' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <img 
                        src={design.image} 
                        alt={design.name}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-semibold">{design.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipient Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recipient Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter recipient's name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter recipient's email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Add a personal message..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold">Amazon</h4>
                      <p className="text-blue-100">Gift Card</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">
                        ${customAmount || selectedAmount || '0'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <img 
                      src={giftCardDesigns.find(d => d.id === selectedDesign)?.image} 
                      alt="Design"
                      className="w-full h-32 object-cover rounded-md opacity-80"
                    />
                  </div>
                  
                  <div className="text-sm">
                    <p className="mb-2">
                      <strong>Design:</strong> {giftCardDesigns.find(d => d.id === selectedDesign)?.name}
                    </p>
                    <p className="text-blue-100">
                      Valid for millions of items on Amazon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md text-lg">
                  Add to Cart - ${customAmount || selectedAmount || '0'}
                </button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  No fees • Never expires • Fast delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Amazon Gift Cards?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">✓</div>
              <h3 className="font-semibold text-lg mb-2">Never Expires</h3>
              <p className="text-gray-600">Amazon Gift Cards never expire, so recipients can use them whenever they want</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">∞</div>
              <h3 className="font-semibold text-lg mb-2">Millions of Items</h3>
              <p className="text-gray-600">Use on millions of eligible items across Amazon's vast selection</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Email gift cards are delivered instantly, perfect for last-minute gifts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;