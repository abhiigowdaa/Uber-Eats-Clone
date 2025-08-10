import React from "react";

const cards = [
  {
    img:  'https://www.ubereats.com/_static/88d55f7112efe55f.webp', // put your own image path
    title: "Feed your employees",
    linkText: "Create a business account",
    linkHref: "#",
  },
  {
    img: "https://www.ubereats.com/_static/711d51ca1b458931.webp", // put your own image path
    title: "Your restaurant, delivered",
    linkText: "Add your restaurant",
    linkHref: "#",
  },
  {
    img: "https://www.ubereats.com/_static/16522a701585873b.webp", // put your own image path
    title: "Deliver with Uber Eats",
    linkText: "Sign up to deliver",
    linkHref: "#",
  },
];

const BusinessSection = () => {
  return (
    <section className="max-w-8xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <div key={idx} className="flex flex-col">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-60 object-cover  mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 leading-tight">{card.title}</h3>
          <a
            href={card.linkHref}
            className="text-lg text-black underline hover:text-green-600 font-medium"
          >
            {card.linkText}
          </a>
        </div>
      ))}
    </section>
  );
};

export default BusinessSection;