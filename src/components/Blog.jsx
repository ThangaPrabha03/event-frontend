import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/950724094/photo/bridal-background-with-planner-checklist.jpg?s=612x612&w=0&k=20&c=r7GyKVTDaOMGXIXrOC559ktUUj6H3JWVHHwaSHl9Xnk=",
      title: "10 Tips for Perfect Wedding Planning",
      date: "July 25, 2024",
      content: `Planning a wedding can be overwhelming, but with proper organization and these 10 tips, you can make it a memorable and stress-free experience! ...`,
    },
    {
      id: 2,
      img: "https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg",
      title: "How to Organize a Corporate Event Seamlessly",
      date: "August 10, 2024",
      content: `Corporate events require precise planning. From venue selection to scheduling speakers, here’s how you can organize an event seamlessly...`,
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/9/FU/ZL/PO/109313197/product-jpeg.jpg",
      title: "Creative Birthday Party Ideas You'll Love",
      date: "September 2, 2024",
      content: `Birthdays are special, and throwing a creative party can make it unforgettable. Here are some fun ideas for themes, games, and decor...`,
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12">
          Event Tips & Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-4">{post.title}</h3>
                <Link
                  to={`/blog/${post.id}`}
                  state={post} // Pass full blog details to next page
                  className="text-purple-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
