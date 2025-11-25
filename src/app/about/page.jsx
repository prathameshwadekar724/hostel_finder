export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900">About HostelFinder</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>HostelFinder</strong> is a simple and smart platform that helps users
        explore hostels, PG accommodations, and dormitories across different locations.
        It collects real-time data like ratings, reviews, photos, and contact details
        using Google Maps + SerpAPI, making it easy to compare and choose the best place
        to stay.
      </p>

      {/* Features section */}
      <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
        <h2 className="text-2xl font-bold">What You Can Do</h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Search hostels by entering your preferred location</li>
          <li>View detailed information like address, phone number & website</li>
          <li>See hostel photos, user reviews, and ratings</li>
          <li>Compare hostels and choose what suits you best</li>
          <li>Explore nearby hostels through “People Also Search For” recommendations</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Our Mission</h2>

        <p className="text-gray-700 leading-relaxed">
          We aim to make the hostel search process faster, smoother, and more transparent.
          Instead of searching manually across multiple platforms, HostelFinder brings
          everything into one clean and user-friendly interface.
        </p>
      </section>

      {/* Developer note */}
      <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-700">Behind the Project</h2>

        <p className="text-gray-700 mt-2 leading-relaxed">
          This project is built using <strong>Next.js 16</strong>, 
          <strong> TailwindCSS</strong>, and <strong>SerpAPI</strong> for real-time data 
          fetching. The purpose is to showcase modern frontend skills, API integration, 
          clean UI design, and real-world problem solving.
        </p>
      </section>

      {/* Footer */}
      <p className="text-gray-500 text-sm text-center mt-8">
        © {new Date().getFullYear()} HostelFinder · All Rights Reserved
      </p>
    </main>
  );
}
