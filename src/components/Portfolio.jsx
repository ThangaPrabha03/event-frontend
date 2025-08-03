export default function Portfolio() {
  const portfolioItems = [
    { img: "https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-a-romantic-white-and-gold-wedding-ceremony-with-delicate-floral-arrangements-image_16609904.jpg", title: "Elegant Wedding" },
    { img: "https://www.aahadecorevents.com/events/corporate-events/corporate-event-management-company-in-chennai.jpg", title: "Corporate Conference" },
    { img: "https://cdn.shopify.com/s/files/1/2690/0106/files/Birthday_ideas_480x480.jpg?v=1704192956", title: "Birthday Celebration" },
    { img: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=", title: "Concert Night" },
    { img: "https://www.hunarcourses.com/blog/wp-content/uploads/2021/02/Hunar-Online-Fashion-show-1-730x410.jpg", title: "Fashion Show" },
    { img: "https://www.marriagecolours.com/images/service-offered/theme-curation.jpg", title: "Event Decor" },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
