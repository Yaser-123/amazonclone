import React, { useState } from 'react';

const CustomerService = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [showChat, setShowChat] = useState(false);

  const helpTopics = [
    { id: 'orders', title: 'Your Orders', description: 'Track packages, view order details, or make returns' },
    { id: 'shipping', title: 'Shipping & Delivery', description: 'Delivery options, tracking, and shipping questions' },
    { id: 'returns', title: 'Returns & Refunds', description: 'Return items, check refund status, or print return labels' },
    { id: 'account', title: 'Account & Login Issues', description: 'Password reset, account settings, and login help' },
    { id: 'payments', title: 'Payment Methods', description: 'Add/edit payment methods, billing questions' },
    { id: 'prime', title: 'Prime Membership', description: 'Prime benefits, billing, and membership questions' },
    { id: 'devices', title: 'Device Support', description: 'Help with Kindle, Echo, Fire TV, and other Amazon devices' },
    { id: 'other', title: 'Something Else', description: 'Other questions not covered above' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Service</h1>
          <p className="text-xl text-gray-600">How can we help you today?</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m0 0V9a2 2 0 012-2h2m2 2v4" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold">Track a Package</div>
                <div className="text-sm text-gray-600">Find your order and track delivery</div>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold">Return an Item</div>
                <div className="text-sm text-gray-600">Start a return or check return status</div>
              </div>
            </button>
            
            <button 
              onClick={() => setShowChat(true)}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold">Chat with Us</div>
                <div className="text-sm text-gray-600">Get help from our support team</div>
              </div>
            </button>
          </div>
        </div>

        {/* Help Topics */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-4 text-left border rounded-lg hover:border-blue-500 transition-colors ${
                  selectedTopic === topic.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="font-semibold text-gray-900 mb-1">{topic.title}</div>
                <div className="text-sm text-gray-600">{topic.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak with a customer service representative</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Call Now
              </button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team online</p>
              <button 
                onClick={() => setShowChat(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                Start Chat
              </button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700">
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Customer Support Chat</h3>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
                <div className="bg-blue-100 rounded-lg p-3 mb-3">
                  <div className="text-sm text-blue-800">
                    <strong>Support Agent:</strong> Hi! I'm here to help you with any questions you have. How can I assist you today?
                  </div>
                </div>
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerService;