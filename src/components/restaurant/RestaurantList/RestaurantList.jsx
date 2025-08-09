import React from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import restaurants from "../../data/restaurants";

const RestaurantList = () => (
  <section className="max-w-4xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Nearby Restaurants</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  </section>
);

export default RestaurantList;
