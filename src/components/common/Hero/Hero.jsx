import React from 'react';
import { MapPin, Clock, ChevronDown } from 'lucide-react';

export default function UberEatsHero() {
  return (
    <section 
      className="relative"
      style={{ 
        backgroundColor: '#FDB85A',
        backgroundImage: 'url(/images/Herobg.jpg)', // Add your food background image here
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
        {/* Content Container */}
        <div className="flex items-center min-h-screen px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left side - Content */}
              <div className="space-y-8 lg:space-y-10 max-w-2xl">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Order delivery<br />near you
                </h1>
                
                {/* Search form */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    {/* Address input */}
                    <div className="flex-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                        <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" strokeWidth={1.5} />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter delivery address"
                        className="w-full pl-12 lg:pl-14 pr-4 py-3 lg:py-4 text-sm lg:text-base rounded-lg lg:rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-black shadow-lg text-gray-900 placeholder-gray-600 bg-white"
                      />
                    </div>
                    
                    {/* Delivery time dropdown */}
                    <div className="relative sm:min-w-[180px] lg:min-w-[200px]">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                        <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" strokeWidth={1.5} />
                      </div>
                      <select className="w-full pl-12 lg:pl-14 pr-10 py-3 lg:py-4 text-sm lg:text-base rounded-lg lg:rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-black shadow-lg text-gray-900 bg-white appearance-none cursor-pointer">
                        <option>Deliver now</option>
                        <option>Schedule for later</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronDown className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Search button */}
                    <button className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap">
                      Search here
                    </button>
                  </div>
                  
                  {/* Sign in link */}
                  <div className="text-sm lg:text-base">
                    <span className="text-white">Or </span>
                    <a href="#" className="text-white underline hover:no-underline font-medium">
                      Sign In
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - Space for food imagery */}
              <div className="hidden lg:block">
                {/* Space for background image content */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
  );
}