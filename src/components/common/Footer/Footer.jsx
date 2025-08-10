// src/components/common/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Top grid: logo + columns + language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Logo + badges (left) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="text-3xl font-extrabold leading-none">Uber <span className="font-black">Eats</span></div>

            {/* Badges (pure markup + svg/icon) */}
            <div className="flex gap-3 items-center">
              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center bg-black text-white rounded-md px-3 py-2 shadow-sm hover:opacity-90"
                aria-label="Download on the App Store"
              >
                <FaApple className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-[10px] leading-3">Download on the</div>
                  <div className="text-sm font-semibold leading-4">App Store</div>
                </div>
              </a>

              {/* Google Play badge (simple triangle SVG + text to avoid external images) */}
              <a
                href="#"
                className="inline-flex items-center bg-black text-white rounded-md px-3 py-2 shadow-sm hover:opacity-90"
                aria-label="Get it on Google Play"
              >
                {/* Play triangle */}
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 2v20l18-10L3 2z" fill="white" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-3">GET IT ON</div>
                  <div className="text-sm font-semibold leading-4">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Link columns (center) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-4">
              <a className="block text-base text-gray-800 hover:underline" href="#">Get Help</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Buy gift cards</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Add your restaurant</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Sign up to deliver</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Create a business account</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Promotions</a>
            </div>

            <div className="space-y-4">
              <a className="block text-base text-gray-800 hover:underline" href="#">Restaurants near me</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">View all cities</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">View all countries</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Pickup near me</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">About Uber Eats</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Shop groceries</a>
            </div>

            <div className="space-y-4">
              <a className="block text-base text-gray-800 hover:underline" href="#">Partner with us</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Careers</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Gift cards</a>
              <a className="block text-base text-gray-800 hover:underline" href="#">Blog</a>
            </div>
          </div>

          {/* Language (right) */}
          <div className="lg:col-span-2 flex items-start lg:justify-end">
            <button className="flex items-center gap-3 text-sm text-gray-800 hover:underline">
              <MdLanguage size={18} />
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Thin divider */}
        <hr className="mt-10 border-gray-200" />

        {/* Bottom area: social icons + center links + legal */}
        <div className="mt-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
            {/* Social icons (left) */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-gray-900">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-gray-900">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-gray-900">
                <FaInstagram size={18} />
              </a>
            </div>

            {/* Center quick links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Do not sell or share my personal information</a>
            </div>

            {/* Right: kept empty for balance on mobile, copyright shown below */}
            <div className="hidden lg:block w-1/6" />
          </div>

          {/* Legal + copyright row */}
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="w-full lg:w-1/3"></div>

            <div className="text-center lg:text-center text-sm text-gray-600">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>

            <div className="w-full lg:w-1/3 text-right">
              <div>© 2025 Uber Technologies Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
