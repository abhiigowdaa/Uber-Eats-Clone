import React from 'react';
import { Menu, ExternalLink } from 'lucide-react';

export default function UberEatsHeader() {
  return (
    <header className="w-screen bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="w-6 h-6 text-black" strokeWidth={1} />
            </button>
            <div className="text-black font-bold text-xl whitespace-nowrap">
              Uber Eats
            </div>
          </div>
          
          {/* Right side - Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 flex-shrink-0">
            <a href="#" className="flex items-center space-x-1 text-black hover:text-gray-600 text-sm font-medium whitespace-nowrap">
              <span>Get a ride</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#" className="text-black hover:text-gray-600 text-sm font-medium whitespace-nowrap">
              Log in
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}