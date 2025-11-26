import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getHostels, getImages } from "@/api/api";

export default async function page({ searchParams }) {
  const location = await searchParams;
  const hostels = await getHostels(location);

  const hostelWithImages = await Promise.all(
    hostels.local_results?.map(async (h) => {
      const imageUrl = await getImages(h.photos_link);
      return { ...h, firstImage: imageUrl };
    })
  );

  return (
    <main className="px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Hostels in{" "}
        <span className="text-blue-500 capitalize">{location.location}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {hostelWithImages?.map((h) => (
          <Link
            key={h.data_id}
            href={`/hostel/${h.data_id}?lat=${h.gps_coordinates.latitude}&lng=${h.gps_coordinates.longitude}`}
            className="group border bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={h.firstImage ? h.firstImage : "/placeholder.png"}
              alt="Hostel Image"
              width={400}
              height={300}
              className="h-40 sm:h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-4 space-y-1">
              <h3 className="font-bold text-lg sm:text-xl leading-snug">
                {h.title}
              </h3>

              <p className="text-gray-700 text-sm sm:text-base">
                {h.types?.join(", ")}
              </p>

              <p className="text-gray-600 text-sm mt-1">{h.address}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-semibold text-sm sm:text-base">
                  ⭐ {h.rating || "N/A"}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {h.reviews} Reviews
                </span>
              </div>

              <p className="mt-2 text-blue-600 text-sm underline">
                View Details
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
