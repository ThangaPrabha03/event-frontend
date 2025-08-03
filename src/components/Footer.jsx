import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Grandora Event</h2>
          <p className="text-gray-400">
            Creating unforgettable events with precision and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>📧 info@grandoraevent.com</p>
          <p>📞 +91 89054 36745</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Grandora Event. All Rights Reserved.
      </div>
    </footer>
  );
}
