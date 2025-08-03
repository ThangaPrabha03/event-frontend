const testimonials = [
  {
    name: "Priya Sharma",
    feedback: "Prabha Event made our wedding unforgettable! The decor and management were perfect.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahul Mehta",
    feedback: "Amazing corporate event planning! Everything was handled professionally and creatively.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Anita Rao",
    feedback: "Best event planners ever! They turned our ideas into a stunning celebration.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
