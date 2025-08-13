import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState('');
  const [bringingGuests, setBringingGuests] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      attendees,
      dietary,
      bringingGuests,
    });

    setName('');
    setEmail('');
    setAttendees(1);
    setDietary('');
    setBringingGuests(false);
  }

  return (
    <div className="container">
    <h1>Event RSVP Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
          <label>Name:
            <input 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
        </div>
        
        <div className="label-container">
          <label>Email:
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="label-container">
          <label>Number of Attendees:
            <input 
              type="number" 
              value={attendees}
              onChange={e => setAttendees(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="label-container">
          <label>Dietary Preferences (optional):
            <input 
              type="text" 
              value={dietary}
              onChange={e => setDietary(e.target.value)}
            />
          </label>
        </div>

        <div className="label-container2">
          <label>Bringing additional guests?:
            <input 
              type="checkbox" 
              checked={bringingGuests}
              onChange={e => setBringingGuests(e.target.checked)}
            />
          </label>
        </div>

        <div className="label-container2">
          <button type="submit">Submit RSVP</button>
        </div>
      </form>

      {submittedData && (
        <div className="label-container">
          <h3>RSVP Submitted!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Number of Attendees:</strong> {submittedData.attendees}</p>
          <p><strong>Dietary Preferences:</strong> {submittedData.dietary || 'None'}</p>
          <p><strong>Bringing Additional Guests?:</strong> {bringingGuests ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default EventRSVPForm;