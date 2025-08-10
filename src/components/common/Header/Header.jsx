import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  ExternalLink,
  MapPin,
  ChevronDown,
  X,
  User,
  ShoppingBag,
  Home,
  ClipboardList,
  Star,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function UberEatsHeader() {
  const [showAddressBar, setShowAddressBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const openUberRide = () => {
    const appLink = "uber://?action=setPickup";
    const webLink = "https://m.uber.com/ul/?action=setPickup";
    const timeout = setTimeout(() => {
      window.open(webLink, "_blank");
    }, 500);
    window.location.href = appLink;
    return () => clearTimeout(timeout);
  };
  const openUberAuthModal = (mode) => {
    const baseUrl = "https://auth.uber.com/v2";
    const nextUrl = encodeURIComponent("https://www.ubereats.com");
    const authUrl =
      mode === "login"
        ? `${baseUrl}/?next_url=${nextUrl}`
        : `${baseUrl}/signup?next_url=${nextUrl}`;

    window.location.href = authUrl; // redirect to Uber's auth page
  };


  useEffect(() => {
    const handleScroll = () => {
      setShowAddressBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const diff = touchEndX.current - touchStartX.current;
        if (diff > 70 && !isMenuOpen) setIsMenuOpen(true);
        if (diff < -70 && isMenuOpen) setIsMenuOpen(false);
      }
      touchStartX.current = null;
      touchEndX.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`w-screen fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showAddressBar
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="w-full px-3 sm:px-4 lg:px-5">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              showAddressBar ? "h-14" : "h-16"
            }`}
          >
            {/* Left */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Menu
                  className={`w-6 h-6 ${
                    showAddressBar ? "text-black" : "text-white"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`font-extrabold text-lg tracking-tight cursor-pointer ${
                  showAddressBar
                    ? "text-gray-900 hover:text-green-600"
                    : "text-white hover:text-green-600"
                }`}
              >
                Uber Eats
              </div>
              {showAddressBar && (
                <div className="hidden md:flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium space-x-2 hover:bg-gray-200 transition ml-4">
                  <MapPin className="w-4 h-4" />
                  <span>Enter delivery address</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button
                onClick={openUberRide}
                className={`flex items-center space-x-1 text-sm font-medium ${
                  showAddressBar
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-600"
                }`}
              >
                <span>Get a ride</span>
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => openUberAuthModal("login")}
                className={`flex items-center space-x-1 text-sm font-medium ${
                  showAddressBar
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-600"
                }`}
              >
                <User className="w-4 h-4" />
                <span>Log in</span>
              </button>
              <button
                onClick={() => openUberAuthModal("signup")}
                className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all ${
                  showAddressBar
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-green-600 hover:bg-gray-100"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Blur background */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 backdrop-blur-sm ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div className="space-y-3">
            <button
              onClick={() => openUberAuthModal("signup")}
              className="w-full bg-black text-white rounded-md py-3 font-semibold"
            >
              Sign up
            </button>
            <button
              onClick={() => openUberAuthModal("login")}
              className="w-full bg-gray-100 rounded-md py-3 font-semibold"
            >
              Log in
            </button>
          </div>

          <nav className="space-y-4 text-gray-700">
            <a href="#" className="flex items-center space-x-3 hover:text-green-600">
              <Home className="w-5 h-5" /> <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-green-600">
              <ClipboardList className="w-5 h-5" /> <span>Orders</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-green-600">
              <Star className="w-5 h-5" /> <span>Favourites</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-green-600">
              <Settings className="w-5 h-5" /> <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-green-600">
              <HelpCircle className="w-5 h-5" /> <span>Help</span>
            </a>
            <button
              onClick={openUberRide}
              className="flex items-center space-x-3 hover:text-green-600 w-full text-left"
            >
              Get a ride <ExternalLink className="ml-1 w-4 h-4" />
            </button>
          </nav>
        </div>

        <div className="p-5 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Get the full Uber Eats experience
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Download the app for exclusive deals and faster checkout.
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
              App Store
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
