import React, { useState } from 'react'
import FlightCard from './FlightCard'
import { flightsData } from '../data/fight'
function FlightBooking() {
  const [flights, setFlights] = useState(flightsData);

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
      return (
    <div className="w-full">
    
      <div className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
         
          <div className="bg-white text-blue-500 px-3 py-1 rounded font-bold">ALMUSAFEER</div>

          <div className="flex space-x-6">
            <a href='' className="text-white">
              Home
            </a>
            <a href='' className="text-white">
              My Booking
            </a>
            <a href='' className="text-white">
              Register
            </a>
            <a href='' className="text-white">
              Login
            </a>
            <a href='' className="text-white">
              Contact
            </a>
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

 <button onClick={sortByDuration} className="bg-purple-600 text-white px-4 py-2 rounded">
          Sort: Duration
        </button>
 <button onClick={filterByPrice} className="bg-blue-600 text-white px-4 py-2 rounded">
          Filter ≤ 90k
        </button>
           <button onClick={resetFilter} className="bg-gray-400 text-white px-4 py-2 rounded">
          Reset
        </button>
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
