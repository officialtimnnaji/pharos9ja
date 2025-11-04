import React from "react";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-nigeriaGreen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-nigeriaWhite mb-10">
          Welcome to Pharos Nigeria!
        </h1>
        <p className="text-nigeriaWhite text-xl max-w-2xl text-center">
          Connecting and empowering the Nigerian blockchain community.
        </p>
      </div>

      {/* Slider Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10 text-nigeriaWhite">
          Our Community Highlights
        </h2>
        <Slider />
      </section>
    </div>
  );
}
