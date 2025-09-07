import Link from "next/link";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Section 1 */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Emna TRABELSI</h3>
          <p className="text-sm leading-relaxed">
            Professional portfolio showcasing expertise and projects. Reach out to collaborate or learn more.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
            <a href="mailto:medaly@example.com" className="hover:text-cyan-400 transition-colors flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2" /> Email
            </a>
            <a href="tel:+21690181394" className="hover:text-cyan-400 transition-colors flex items-center">
              <FaPhone className="w-5 h-5 mr-2" /> +216 90-181-394
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-5 md:pl-12 border-t md:border-t-0 md:border-l border-gray-800 pt-6 md:pt-0">
          <h3 className="text-lg font-semibold text-white">Legal & Location</h3>
          <p className="text-sm flex items-center">
            <FaGlobe className="w-5 h-5 mr-2 text-cyan-400" /> Tunis, Tunisia
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-5 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Emna TRABELSI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
