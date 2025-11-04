import React from "react";
import eventsData from "../data/events.json";

export default function Events() {
  return (
    <section className="p-8 bg-nigeriaWhite min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-nigeriaGreen">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Time:</span> {event.time}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Host:</span> {event.host}
              </p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
