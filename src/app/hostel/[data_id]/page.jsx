import { getHostelDetails } from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params, searchParams }) {
  const { data_id } = await params;

  const par =  await searchParams;

  const details = await getHostelDetails(data_id, par.lat, par.lng);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {details.title}
        </h1>

        <p className="text-blue-600 font-semibold text-lg">
          {details.type?.join(", ")}
        </p>

        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-1 text-yellow-500 text-xl font-bold">
            ⭐ {details.rating}
          </div>
          <span className="text-gray-600">{details.reviews} reviews</span>
        </div>
      </section>

      {/* INFO CARD */}
      <section className="bg-white shadow-md rounded-2xl p-6 space-y-3 border border-gray-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📍</span>
          <p className="text-gray-800 leading-relaxed">
            <span className="font-semibold">Address:</span> {details.address}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-2xl">📞</span>
          <p className="text-gray-800">
            <span className="font-semibold">Contact:</span> {details.phone}
          </p>
        </div>

        {details.website && (
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌐</span>
            <p className="text-gray-800">
              <span className="font-semibold">Website:</span>{" "}
              <Link
                href={details.website}
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {details.website}
              </Link>
            </p>
          </div>
        )}
      </section>

      {/* PHOTOS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Photos</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {details.images?.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={img.thumbnail}
                alt="Hostel Photo"
                width={400}
                height={300}
                className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* RATING BREAKDOWN */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Rating Breakdown</h2>

        <div className="space-y-2">
          {details.rating_summary?.map((r, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-14 font-semibold">{r.stars} ⭐</span>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${r.amount}%` }}
                ></div>
              </div>

              <span className="text-gray-700 w-8 text-right">{r.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* USER REVIEWS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>

        <div className="space-y-4">
          {details.user_reviews?.most_relevant
            ?.slice()
            ?.sort((a, b) => b.rating - a.rating)
            ?.map((review, index) => (
              <div
                key={index}
                className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-lg">{review.username}</p>
                  <p className="text-yellow-500 font-bold">⭐ {review.rating}</p>
                </div>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  {review.description}
                </p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
