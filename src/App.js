import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [stocks, setStocks] = useState({});
  const [selectedTicker, setSelectedTicker] = useState('');
  const [stockData, setStockData] = useState([]);
  const [minutes, setMinutes] = useState(15);

  // ✅ Full Bearer Token
  const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDY1MDkwLCJpYXQiOjE3NDgwNjQ3OTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQzMmM4Njk2LTZlMzQtNGRjZC1iNDU4LTE0ZjgwMmNjMWVjNCIsInN1YiI6InZpZ25lc2hrYW5yYUBnbWFpbC5jb20ifSwiZW1haWwiOiJ2aWduZXNoa2FucmFAZ21haWwuY29tIiwibmFtZSI6InZpZ25lc2h3YXJhbiBuIGsiLCJyb2xsTm8iOiI5Mjc2MjJiY3MxMTgiLCJhY2Nlc3NDb2RlIjoid2hlUVV5IiwiY2xpZW50SUQiOiJkMzJjODY5Ni02ZTM0LTRkY2QtYjQ1OC0xNGY4MDJjYzFlYzQiLCJjbGllbnRTZWNyZXQiOiJHZXlhRFNyVmNzSlJoVnREIn0.0iWKlp1He2lViL7UIbvsSo6e_t_BPHRPUQYccXmU3g0";

  // ✅ CORS proxy prefix
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const baseURL = "http://20.244.56.144/evaluation-service";

  // 🔁 Fetch stocks list
  useEffect(() => {
    axios.get(proxy + baseURL + "/stocks", {
      headers: {
        Authorization: accessToken
      }
    })
    .then(res => {
      console.log("✅ STOCKS FETCHED:", res.data);
      setStocks(res.data.stocks);
    })
    .catch(err => {
      console.error("❌ ERROR FETCHING STOCKS:", err);
      alert("CORS issue or token expired. Try again.");
    });
  }, []);

  // 🔁 Fetch stock prices
  useEffect(() => {
    if (selectedTicker && minutes) {
      axios.get(`${proxy}${baseURL}/stocks/${selectedTicker}?minutes=${minutes}`, {
        headers: {
          Authorization: accessToken
        }
      })
      .then(res => {
        console.log("✅ STOCK DATA:", res.data);
        setStockData(res.data);
      })
      .catch(err => {
        console.error("❌ ERROR FETCHING STOCK DATA:", err);
        alert("Failed to fetch stock data.");
      });
    }
  }, [selectedTicker, minutes]);

  return (
    <div className="App">
      <h1>📈 Affordmed Stock Price Viewer</h1>

      {/* Dropdowns */}
      <label>Select Company: </label>
      <select value={selectedTicker} onChange={(e) => setSelectedTicker(e.target.value)}>
        <option value="">-- Choose --</option>
        {Object.entries(stocks).map(([name, ticker]) => (
          <option key={ticker} value={ticker}>{name} ({ticker})</option>
        ))}
      </select>

      <label style={{ marginLeft: "20px" }}>Time Interval: </label>
      <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
        <option value={15}>15 min</option>
        <option value={30}>30 min</option>
        <option value={60}>60 min</option>
      </select>

      <hr />

      {/* Output */}
      <h2>Stock Data</h2>
      {stockData.length > 0 ? (
        <ul>
          {stockData.map((entry, index) => (
            <li key={index}>
              ₹ {entry.price} — {new Date(entry.lastUpdatedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No stock data to display yet.</p>
      )}
    </div>
  );
}

export default App;
