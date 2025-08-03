export default function Services() {
  const services = [
    {
      title: "Wedding Planning",
      description: "Crafting elegant weddings with seamless coordination and stunning decor.",
      icon: "💍",
    },
    {
      title: "Corporate Events",
      description: "Organizing professional corporate events, conferences, and product launches.",
      icon: "🏢",
    },
    {
      title: "Birthday Parties",
      description: "Fun-filled birthday celebrations with personalized themes and activities.",
      icon: "🎉",
    },
    {
      title: "Concerts & Shows",
      description: "Large-scale concerts and live shows with professional stage setups.",
      icon: "🎤",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
