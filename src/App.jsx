import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: '', date: '', description: '' });

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API}/api/events`);
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/events`, form);
      setForm({ title: '', date: '', description: '' });
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${API}/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>Event Management</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">Add Event</button>
      </form>

      <div className="event-list">
        {events.map(e => (
          <div key={e._id} className="event-card">
            <h3>{e.title}</h3>
            <p><strong>Date:</strong> {new Date(e.date).toLocaleDateString()}</p>
            <p>{e.description}</p>
            <div className="event-buttons">
              <button onClick={() => handleDelete(e._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
