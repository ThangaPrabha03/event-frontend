import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 text-white px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        We Create <span className="text-yellow-300">Stunning Events ✨</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Grandora Event specializes in corporate events, weddings, and grand
        celebrations with creativity and precision.
      </p>
      <button
        onClick={() => navigate("/register-event")}
        className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all duration-300"
      >
        Book Your Event
      </button>
    </section>
  );
}
