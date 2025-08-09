export const mockRestaurants = [
  {
    id: 1,
    name: "McDonald's",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    rating: 4.2,
    deliveryTime: "20-35 min",
    deliveryFee: 0,
    cuisine: "Fast Food",
    isPromoted: true,
    description: "Fast food restaurant chain",
    reviews: 1234,
    categories: [
      { id: 'popular', name: 'Popular Items' },
      { id: 'burgers', name: 'Burgers' },
      { id: 'sides', name: 'Sides' },
      { id: 'drinks', name: 'Drinks' }
    ],
    menu: [
      {
        id: 101,
        name: "Big Mac",
        description: "Two all-beef patties, special sauce, lettuce, cheese...",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=300",
        category: 'popular'
      },
      // Add more menu items...
    ]
  },
  {
    id: 2,
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    rating: 4.5,
    deliveryTime: "30-45 min",
    deliveryFee: 2.99,
    cuisine: "Pizza",
    isPromoted: false,
    description: "America's favorite pizza restaurant",
    reviews: 987,
    categories: [
      { id: 'popular', name: 'Popular Items' },
      { id: 'pizza', name: 'Pizza' },
      { id: 'wings', name: 'Wings' }
    ],
    menu: []
  },
  // Add more restaurants...
];

export const mockCategories = [
  { id: 1, name: "Fast Food", icon: "🍔" },
  { id: 2, name: "Pizza", icon: "🍕" },
  { id: 3, name: "Chinese", icon: "🥡" },
  { id: 4, name: "Italian", icon: "🍝" },
  { id: 5, name: "Mexican", icon: "🌮" },
  { id: 6, name: "Indian", icon: "🍛" },
];
