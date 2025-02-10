"use client";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white w-full overflow-hidden">
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Left Section */}
          <div className="relative flex flex-col items-center md:items-start">
            {/* Gradient blob */}
            <div className="absolute inset-0 z-0">
              <motion.div
                className="absolute w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="w-full h-full bg-purple-600/30 rounded-full blur-[80px]" />
              </motion.div>
            </div>

            {/* Text content */}
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="block text-white">Glow Beyond</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200">
                  Limits
                </span>
              </h2>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <Link
                href="https://instagram.com"
                className="flex items-center justify-center gap-3 hover:text-purple-400 transition-all duration-300 group"
              >
                <Instagram
                  className="group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>Instagram</span>
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="flex items-center justify-center gap-3 hover:text-purple-400 transition-all duration-300 group"
              >
                <Mail
                  className="group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>contact@example.com</span>
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 hover:text-purple-400 transition-all duration-300 group"
              >
                <Phone
                  className="group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>+1 (234) 567-890</span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Visit Us
            </h3>
            <address className="not-italic space-y-3">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="text-purple-400" size={18} />
                <span className="font-medium">Manipal University Jaipur</span>
              </p>
              <div className="space-y-1">
                <p className="text-gray-300">Dehmi Kalan, Jaipur</p>
                <p className="text-gray-300">Rajasthan 303007</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-8 pt-6">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="flex flex-col items-center gap-3">
            <p className="text-white text-sm">© 2024 All rights reserved.</p>
            <p className="text-white text-sm flex items-center gap-2">
              Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart
                  className="text-red-500 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                  size={14}
                />
              </motion.span>{" "}
              by Web Dev Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
