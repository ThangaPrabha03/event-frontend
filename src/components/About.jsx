import { Link } from "react-router-dom";
export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://www.heliosevent.in/images/about.jpg" // Replace with local or custom image for Prabha Event
            alt="About Prabha Event"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            About Grandora Event
          </h2>
          <p className="text-gray-600 mb-6">
            Grandora Event is a premier event management company specializing 
            in corporate events, weddings, and grand celebrations. 
            With creativity, precision, and passion, we turn your vision 
            into unforgettable experiences.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
