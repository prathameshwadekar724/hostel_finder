export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        About HostelFinder
      </h1>

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        <strong>HostelFinder</strong> is a smart and lightweight platform that helps
        users explore hostels, PG accommodations, and dormitories across different
        locations. It collects real-time data such as ratings, reviews, photos, and
        contact details using Google Maps + SerpAPI, making it easy for users to
        compare and choose the best place to stay.
      </p>

      <section className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">What You Can Do</h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Search hostels by entering your preferred location</li>
          <li>View detailed information like address, phone number & website</li>
          <li>See hostel photos, user reviews, and ratings</li>
          <li>Compare hostels and select the best option for your stay</li>
          <li>Discover nearby hostels through “People Also Search For” suggestions</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h2>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Our mission is to make the hostel search process faster, simpler, and more
          transparent. Instead of browsing multiple platforms, HostelFinder brings all
          essential details into one clean and user-friendly interface.
        </p>
      </section>

      <section className="bg-blue-50 border border-blue-200 p-5 sm:p-6 rounded-xl space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Behind the Project
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          This project is built using <strong>Next.js 16</strong>,{" "}
          <strong>TailwindCSS</strong>, and <strong>SerpAPI</strong> for retrieving
          real-time Google Maps data. The aim is to demonstrate modern frontend
          development, clean UI design, API integration, and real-world problem-solving.
        </p>
      </section>

      <p className="text-gray-500 text-xs sm:text-sm text-center pt-4">
        © {new Date().getFullYear()} HostelFinder · All Rights Reserved
      </p>
    </main>
  );
}
