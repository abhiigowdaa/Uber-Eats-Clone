import React, { useState } from "react";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UberEatsHero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("Deliver now");

  const handleSelect = (value: string) => {
    setDeliveryTime(value);
    setDropdownOpen(false);
  };

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/images/Herobg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 lg:space-y-10 max-w-2xl"
            >
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg"
              >
                Order delivery
                <br />
                near you
              </motion.h1>

              {/* Search Form */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 lg:gap-4 relative"
                >
                  {/* Address Input */}
                  <div className="flex-1 relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <MapPin
                        className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter delivery address"
                      className="w-full pl-12 lg:pl-14 pr-4 py-3 lg:py-4 text-sm lg:text-base rounded-lg lg:rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg text-gray-900 placeholder-gray-600 bg-white transition-transform group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Delivery Time Dropdown */}
                  <div className="relative sm:min-w-[180px] lg:min-w-[200px]">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center justify-between w-full pl-12 lg:pl-14 pr-10 py-3 lg:py-4 text-sm lg:text-base rounded-lg lg:rounded-xl border-0 shadow-lg text-gray-900 bg-white cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Clock
                          className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600"
                          strokeWidth={1.5}
                        />
                      </div>
                      {deliveryTime}
                      <ChevronDown
                        className={`h-5 w-5 lg:h-6 lg:w-6 text-gray-600 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>

                    {/* Animated Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden"
                        >
                          {["Deliver now", "Schedule for later"].map((option) => (
                            <li
                              key={option}
                              onClick={() => handleSelect(option)}
                              className="px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer text-gray-800"
                            >
                              {option}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Search Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap"
                  >
                    Search here
                  </motion.button>
                </motion.div>

                {/* Sign In */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm lg:text-base"
                >
                  <span className="text-white">Or </span>
                  <a
                    href="https://auth.uber.com/v2/?next_url=https%3A%2F%2Fwww.ubereats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:no-underline font-medium"
                  >
                    Sign In
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              {/* Optional floating food image */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
