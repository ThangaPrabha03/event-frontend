import { Link } from "react-router-dom";
export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Grandora Event Office</h3>
            <p className="text-gray-600 mb-2">📍 123 Main Street, Chennai, India</p>
            <p className="text-gray-600 mb-2">📞 +91 89054 36745 </p>
            <p className="text-gray-600">📧 contact@grandoraevent.in</p>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075831988!2d-74.25819419345032!3d40.70583163927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjAiTiA3NMKwMTUnMDcuMCJX!5e0!3m2!1sen!2sin!4v1613706912345!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
