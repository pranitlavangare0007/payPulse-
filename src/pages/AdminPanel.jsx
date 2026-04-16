import { useEffect, useState } from 'react';
import api from '../../api';
import './AdminPanel.css';


export default function AdminPanel() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const res = await api.get("/admin/getAll");
        setAccounts(res.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccount();
  }, []); // ✅ FIXED (no dependency)

  return (
    <>
    
      <h1 className="title">Admin Panel</h1>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Type</th>
              <th>Balance</th>
              <th>UPI ID</th>
            </tr>
          </thead>

          <tbody>
            {accounts.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No accounts found
                </td>
              </tr>
            ) : (
              accounts.map((account) => (
                <tr key={account.accountNumber}>
                  <td>{account.accountNumber}</td>
                  <td>{account.accountPurpose}</td>
                  <td>{account.accountStatus}</td>
                  <td>{account.accountType}</td>
                  <td>₹ {account.balance}</td>
                  <td>{account.upiId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}