import React from "react";

const CitiesNearMe = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-16">
      {/* Cities near me header */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-8">
        <h2 className="text-[28px] md:text-2xl lg:text-[40px] font-extrabold text-gray-900">
          Cities near me
        </h2>
        <a
          href="#"
          className="text-black hover:underline hover:text-green-600 text-sm font-medium"
        >
          View all 500+ cities
        </a>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto mb-10 overflow-hidden shadow-md h-[420px] rounded-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609856707!2d72.74109872759337!3d19.082197839521095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e18a9477f%3A0xa4e0c67a0af6f0f6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691743456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Cities list */}
      <div className="max-w-7xl mx-auto overflow-x-auto pb-8">
        <div className="grid grid-cols-4 min-w-[1100px] gap-x-24 gap-y-8 text-base leading-8 text-gray-800">
          <ul className="space-y-6">
            <li>Bridgeport</li>
            <li>Concord</li>
            <li>Dayton</li>
            <li>El Paso</li>
            <li>Fort Lauderdale</li>
            <li>Fresno</li>
          </ul>

          <ul className="space-y-6">
            <li>Indianapolis</li>
            <li>McAllen</li>
            <li>Mesa</li>
            <li>Milwaukee</li>
            <li>Minneapolis</li>
            <li>Moreno Valley</li>
          </ul>

          <ul className="space-y-6">
            <li>Oklahoma City</li>
            <li>Omaha</li>
            <li>Orlando</li>
            <li>Palm Bay</li>
            <li>Pittsburgh</li>
            <li>Portland</li>
          </ul>

          <ul className="space-y-6">
            <li>San Antonio</li>
            <li>Stony Brook</li>
            <li>Tucson</li>
            <li>West Hollywood</li>
            <li>Worcester</li>
            <li>Yonkers</li>
          </ul>
        </div>
      </div>

      {/* Countries header */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mt-12 mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900">
          Countries with Uber Eats
        </h2>
        <a
          href="#"
          className="text-black hover:underline hover:text-green-600 text-sm font-medium"
        >
          View all countries
        </a>
      </div>

      {/* Countries list */}
      <div className="max-w-7xl mx-auto overflow-x-auto pb-12">
        <div className="grid grid-cols-4 min-w-[1100px] gap-x-24 gap-y-8 text-base leading-8 text-gray-800">
          <ul className="space-y-6">
            <li>Australia</li>
            <li>Belgium</li>
            <li>Canada</li>
            <li>Chile</li>
            <li>Costa Rica</li>
            <li>Dominican Republic</li>
            <li>Ecuador</li>
            <li>El Salvador</li>
          </ul>

          <ul className="space-y-6">
            <li>France</li>
            <li>Germany</li>
            <li>Guatemala</li>
            <li>Ireland</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Kenya</li>
            <li>Luxembourg</li>
          </ul>

          <ul className="space-y-6">
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>New Zealand</li>
            <li>Panama</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>South Africa</li>
            <li>Spain</li>
          </ul>

          <ul className="space-y-6">
            <li>Sri Lanka</li>
            <li>Sweden</li>
            <li>Switzerland</li>
            <li>Taiwan (ROC)</li>
            <li>United Kingdom</li>
            <li>United States</li>
            <li>Vietnam</li>
            <li>UAE</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CitiesNearMe;
