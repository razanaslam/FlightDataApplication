import React from "react";

function FlightCard({ flight }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-blue-600 font-bold">Departure</span>
          <span className="text-gray-500 text-sm">
            {new Date(flight.departure).toDateString()}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-yellow-600 font-bold text-lg">
              {flight.airline}
            </div>
            <div className="text-sm text-gray-600">
              <div>{flight.code}</div>
              <div>{flight.class}</div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-xl font-bold">
                {new Date(flight.departure).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="text-sm text-gray-500">{flight.from}</div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">✈️</span>
              <span className="text-sm text-gray-500">
                Total Time: {flight.duration}h
              </span>
            </div>

            <div className="text-center">
              <div className="text-xl font-bold">
                {new Date(flight.arrival).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="text-sm text-gray-500">{flight.to}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl font-bold">KWD {flight.price}</div>
            {flight.refundable && (
              <div className="text-sm text-green-600">Refundable</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
