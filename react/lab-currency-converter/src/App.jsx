import { useState, useMemo  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export function CurrencyConverter() {
  const rates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.74, JPY: 147.29 },
    EUR: { USD: 1.17, EUR: 1, GBP: 0.86, JPY: 172.54 },
    GBP: { USD: 1.36, EUR: 1.16, GBP: 1, JPY: 199.96 },
    JPY: { USD: 0.0068, EUR: 0.0058, GBP: 0.005, JPY: 1 }
  };

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  // Calcula apenas quando amount ou from mudarem
  const convertedFrom = useMemo(() => {
    console.log("Recalculando valores baseados em FROM");
    const fromRates = rates[from];
    const result = {};
    for (let currency in fromRates) {
      result[currency] = amount * fromRates[currency];
    }
    return result;
  }, [amount, from]);

  const finalValue = convertedFrom[to]?.toFixed(2) || "0.00";

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <p>{from} to {to} Conversion</p>

      <label>
        Enter a number:
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
        />
      </label>

      <br />

      <label>
        Start Currency <br />
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {Object.keys(rates).map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Target Currency <br />
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {Object.keys(rates).map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </label>

      <p>{finalValue} {to}</p>
    </div>
  );
}


export default CurrencyConverter;
