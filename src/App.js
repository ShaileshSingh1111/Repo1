import React, { useState } from 'react';
import './App.css';

function App() {
  // States for income and expenses
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income'); // "income" or "expense"
  const [description, setDescription] = useState('');

  // Add transaction
  const addTransaction = () => {
    if (amount === '' || category === '' || description === '') {
      alert("Please fill in all fields.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      type,
      description,
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setCategory('');
    setDescription('');
  };

  // Calculate total income and expenses
  const calculateTotal = (type) => {
    return transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Display transaction list
  const displayTransactions = () => {
    return transactions.map(transaction => (
      <div key={transaction.id} className={`transaction ${transaction.type}`}>
        <p><strong>{transaction.description}</strong></p>
        <p>{transaction.category} | ${transaction.amount}</p>
        <p><em>{transaction.type}</em></p>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Finance Management System</h1>

      {/* Form to add transaction */}
      <div className="form">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      {/* Summary */}
      <div className="summary">
        <h3>Summary</h3>
        <p>Total Income: ${calculateTotal('income')}</p>
        <p>Total Expenses: ${calculateTotal('expense')}</p>
        <p><strong>Net Balance: ${calculateTotal('income') - calculateTotal('expense')}</strong></p>
      </div>

      {/* Transaction List */}
      <div className="transactions">
        <h3>Transaction History</h3>
        {displayTransactions()}
      </div>
    </div>
  );
}

export default App;

