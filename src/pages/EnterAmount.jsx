import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function EnterAmount() {
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleAddFunds = () => {
      navigate('/addfund', {state: amount});
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-6">Add Funds to Your Wallet</h1>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            onClick={handleAddFunds}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Add Funds
          </button>
          <p className="mt-4 text-sm">
            Need help?{' '}
            <Link to="/support" className="text-blue-500 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    );
}

export default EnterAmount