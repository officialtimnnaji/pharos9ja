import React from "react";
import membersData from "../data/members.json";

export default function Community() {
  return (
    <section className="p-8 bg-nigeriaGreen min-h-screen">
      <h2 className="text-4xl font-bold text-center text-nigeriaWhite mb-12">
        Our Community Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {membersData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-700 mb-2">{member.role}</p>
              <a
                href={`mailto:${member.contact}`}
                className="text-pharosGold hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
