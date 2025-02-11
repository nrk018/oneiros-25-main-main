"use client";

import Link from "next/link";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white w-full overflow-hidden font-montserrat">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />
        <motion.div
          className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full bg-purple-600/20 rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-gloock text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Glow Beyond Limits
              </span>
            </h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-gloock text-xl font-semibold mb-4 text-purple-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-instrument-sans text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-gloock text-xl font-semibold mb-4 text-purple-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    aria-label={link.ariaLabel}
                  >
                    <link.icon
                      className="text-purple-400 group-hover:scale-110 transition-transform duration-300"
                      size={18}
                    />
                    <span className="font-instrument-sans">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-gloock text-xl font-semibold mb-4 text-purple-300">
              Location
            </h3>
            <address className="not-italic space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin
                  className="text-purple-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="font-instrument-sans">
                  Manipal University Jaipur
                  <br />
                  Dehmi Kalan, Jaipur
                  <br />
                  Rajasthan 303007
                </span>
              </p>
              <Link
                href="https://maps.app.goo.gl/V4o9U5RiRbWZHvSx6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <span className="font-instrument-sans">
                  View on Google Maps
                </span>
                <ExternalLink size={14} />
              </Link>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-12 pt-8 text-center">
          <div className="absolute top-0 left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform -translate-x-1/2" />
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              © 2024 Oneiros. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              Crafted with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart
                  className="text-red-500 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                  size={14}
                />
              </motion.span>
              by Web Dev Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const quickLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "About" },
  { href: "#", text: "Events" },
  { href: "#", text: "Schedule" },
  { href: "#", text: "Register" },
];

const contactLinks = [
  {
    href: "https://instagram.com/oneiros_muj",
    icon: Instagram,
    text: "@oneiros_muj",
    ariaLabel: "Visit our Instagram page",
  },
  {
    href: "mailto:oneiros@muj.manipal.edu",
    icon: Mail,
    text: "oneiros@muj.manipal.edu",
    ariaLabel: "Send us an email",
  },
  {
    href: "tel:+919876543210",
    icon: Phone,
    text: "+91 98765 43210",
    ariaLabel: "Call us",
  },
];

export default Footer;
