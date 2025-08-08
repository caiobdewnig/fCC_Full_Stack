import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const useCountdown = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer <= 0) return;

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  const start = (seconds) => setTimer(seconds);

  return { timer, start };
};

export const OTPGenerator = () => {
  const { timer, start } = useCountdown();
  const [otp, setOtp] = useState('');
  const [isActive, setIsActive] = useState(false);

  function generate6DigitOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function handleGenerateOTP() {
    const newOTP = generate6DigitOTP();
    setOtp(newOTP);
    setIsActive(true);
    start(5);
  }

  useEffect(() => {
    if (timer === 0) {
      setIsActive(false);
    }
  }, [timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      {otp && (
        <p id="otp-timer">
          {timer > 0
            ? `Expires in: ${timer} seconds`
            : 'OTP expired. Click the button to generate a new OTP.'}
        </p>
      )}

      <button
        id="generate-otp-button"
        onClick={handleGenerateOTP}
        disabled={isActive}
      >
        Generate OTP
      </button>
    </div>
  );
};


export default OTPGenerator;
