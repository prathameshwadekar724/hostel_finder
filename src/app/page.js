'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () =>{
    if(!location) return;
    router.push(`/hostels?location=${location}`)
  }
  return (
    <main className="h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-slate-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-sm">
        Find the Perfect <span className="text-blue-600">Hostel / PG</span> Near You
      </h1>
      <div className="flex w-full max-w-xl shadow-lg bg-white rounded-2xl overflow-hidden">
        <input
        className="flex-1 p-4 text-lg outline-none"
        placeholder="Enter location"  
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        />
        <button 
        onClick={handleSearch} 
        className="px-6 bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        Powered by Google Maps + SerpApi
      </p>
    </main>
  );
}
