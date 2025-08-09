import React from "react";

const RestaurantCard = ({ restaurant }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 mb-6">
    <img
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full h-40 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-lg font-bold mb-2">{restaurant.name}</h3>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>⭐ {restaurant.rating}</span>
      <span>{restaurant.deliveryTime}</span>
      <span>₹{restaurant.deliveryFee} delivery</span>
    </div>
    <div className="text-gray-500">{restaurant.cuisine}</div>
    {restaurant.isPromoted && (
      <div className="mt-2 inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
        Promoted
      </div>
    )}
  </div>
);

export default RestaurantCard;
