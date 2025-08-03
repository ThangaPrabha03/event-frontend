import { useState } from "react";
import axios from "axios";

export default function EventRegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", eventName: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/register-event`, form);
      alert(res.data.message); // Show success message
      setForm({ name: "", email: "", eventName: "", date: "" }); // Reset form
    } catch (err) {
      console.error("Registration Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to register event");
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Book Your Event</h2>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={form.eventName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <button className="bg-purple-700 hover:bg-purple-800 text-white w-full py-3 rounded-lg font-semibold">
          Register Event
        </button>
      </form>
    </div>
  );
}
