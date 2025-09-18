import React, { useState } from 'react'
import FlightCard from './FlightCard'
import { flightsData } from '../data/fight'

function FlightBooking() {
  const [flights, setFlights] = useState(flightsData);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newFlight, setNewFlight] = useState({
    airline: "",
    code: "",
    class: "",
    from: "",
    to: "",
    departure: "",
    arrival: "",
    duration: "",
    price: "",
    refundable: false,
  });

  const sortByPrice = () => {
    const sorted = [...flights].sort((a, b) => a.price - b.price);
    setFlights(sorted);
  };

  const sortByDuration = () => {
    const sorted = [...flights].sort((a, b) => a.duration - b.duration);
    setFlights(sorted);
  };

  const filterByPrice = () => {
    const filtered = flightsData.filter(f => f.price <= 90000);
    setFlights(filtered);
  };

  const resetFilter = () => {
    setFlights(flightsData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewFlight({
      ...newFlight,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addFlight = () => {
    if (!newFlight.airline || !newFlight.from || !newFlight.to || !newFlight.departure || !newFlight.arrival || !newFlight.price) {
      alert("Please fill required fields");
      return;
    }
    setFlights([...flights, { ...newFlight, price: Number(newFlight.price), duration: Number(newFlight.duration) }]);
    setNewFlight({
      airline: "",
      code: "",
      class: "",
      from: "",
      to: "",
      departure: "",
      arrival: "",
      duration: "",
      price: "",
      refundable: false,
    });
    setShowAddForm(false); 
  };

  return (
    <div className="w-full">
      <div className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="bg-white text-blue-500 px-3 py-1 rounded font-bold">ALMUSAFEER</div>
          <div className="flex space-x-6">
            <a href='' className="text-white">Home</a>
            <a href='' className="text-white">My Booking</a>
            <a href='' className="text-white">Register</a>
            <a href='' className="text-white">Login</a>
            <a href='' className="text-white">Contact</a>
          </div>
          <div className="flex space-x-4">
            <span>🇰🇼 KWD</span>
            <span>العربية</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 shadow">
        <div className="flex space-x-4">
          <button onClick={sortByPrice} className="bg-purple-600 text-white px-4 py-2 rounded">Sort: Price ▼</button>
          <button onClick={sortByDuration} className="bg-purple-600 text-white px-4 py-2 rounded">Sort: Duration</button>
          <button onClick={filterByPrice} className="bg-blue-600 text-white px-4 py-2 rounded">Filter ≤ 90k</button>
          <button onClick={resetFilter} className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>

          <div className="relative">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              + Add Flight
            </button>

            {showAddForm && (
              <div className="absolute right-0 mt-2 w-96 bg-white border rounded-lg shadow-lg p-4 space-y-2 z-10">
                <input type="text" name="airline" value={newFlight.airline} onChange={handleChange} placeholder="Airline Name" className="border p-2 w-full rounded" />
                <input type="text" name="code" value={newFlight.code} onChange={handleChange} placeholder="Flight Code" className="border p-2 w-full rounded" />
                <input type="text" name="class" value={newFlight.class} onChange={handleChange} placeholder="Class (e.g. Economy)" className="border p-2 w-full rounded" />
                <input type="text" name="from" value={newFlight.from} onChange={handleChange} placeholder="From Location" className="border p-2 w-full rounded" />
                <input type="text" name="to" value={newFlight.to} onChange={handleChange} placeholder="To Location" className="border p-2 w-full rounded" />
                <input type="datetime-local" name="departure" value={newFlight.departure} onChange={handleChange} className="border p-2 w-full rounded" />
                <input type="datetime-local" name="arrival" value={newFlight.arrival} onChange={handleChange} className="border p-2 w-full rounded" />
                <input type="number" name="duration" value={newFlight.duration} onChange={handleChange} placeholder="Duration (hours)" className="border p-2 w-full rounded" />
                <input type="number" name="price" value={newFlight.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full rounded" />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="refundable" checked={newFlight.refundable} onChange={handleChange} />
                  <span>Refundable</span>
                </label>
                <button onClick={addFlight} className="bg-green-500 text-white px-3 py-1 rounded w-full">
                  Add Flight
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {flights.map((f, i) => (
          <FlightCard key={i} flight={f} />
        ))}
      </div>
    </div>
  )
}

export default FlightBooking
