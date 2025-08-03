import { useLocation } from "react-router-dom";

export default function BlogDetail() {
  const { state } = useLocation(); // Get blog details from state

  if (!state) {
    return <p className="text-center mt-10 text-gray-600">No blog found.</p>;
  }

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <img src={state.img} alt={state.title} className="w-full h-80 object-cover rounded-lg mb-6" />
        <p className="text-gray-500 text-sm">{state.date}</p>
        <h1 className="text-3xl font-bold text-purple-700 mt-2 mb-4">{state.title}</h1>
        <p className="text-gray-700 leading-relaxed">{state.content}</p>
      </div>
    </div>
  );
}
