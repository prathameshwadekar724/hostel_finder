"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!location.trim()) return;
    router.push(`/hostels?location=${location}`);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-slate-100 px-4 py-10 text-center">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
        Find the Perfect <span className="text-blue-600">Hostel / PG</span> Near You
      </h1>

      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col sm:flex-row">
        
        <input
          className="flex-1 p-4 text-base sm:text-lg outline-none border-b sm:border-b-0 sm:border-r"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="px-6 py-4 bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Search
        </button>

      </div>

      <p className="mt-4 text-gray-600 text-sm">
        Powered by Google Maps + SerpAPI
      </p>
    </main>
  );
}
