// SuccessPage.js
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
        <p className="text-gray-600">Thank you for your purchase. Your payment was successful.</p>
        <div className="mt-8">
          <button
            className="px-4 py-2 bg-green-700 text-white rounded-md"
            onClick={() => window.location.replace('/')}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
