export type Dish = {
  slug: string;
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  image: string;
  dietary?: string[];
};

export const dishes: Dish[] = [
  {
    slug: "charred-octopus",
    name: "Charred Octopus",
    price: "$18",
    description: "Wood-fired octopus with smoked paprika aioli and fingerling potatoes.",
    ingredients: ["Spanish octopus", "smoked paprika aioli", "fingerling potato", "caper relish"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    dietary: ["Gluten-Free"],
  },
  {
    slug: "heirloom-tomato-salad",
    name: "Heirloom Tomato Salad",
    price: "$14",
    description: "Summer tomatoes layered with burrata, basil oil, and toasted pistachios.",
    ingredients: ["Heirloom tomato", "burrata", "basil oil", "pistachio", "aged balsamic"],
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    slug: "seared-scallops",
    name: "Seared Scallops",
    price: "$29",
    description: "Diver scallops over truffle cauliflower purée with citrus brown butter.",
    ingredients: ["Diver scallop", "cauliflower purée", "citrus brown butter", "micro herb"],
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
    dietary: ["Gluten-Free"],
  },
  {
    slug: "wild-mushroom-risotto",
    name: "Wild Mushroom Risotto",
    price: "$24",
    description: "Carnaroli rice simmered with porcini stock, Parmigiano, and herb oil.",
    ingredients: ["Carnaroli rice", "porcini mushroom", "Parmigiano Reggiano", "herb oil"],
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
    dietary: ["Vegetarian"],
  },
  {
    slug: "dry-aged-ribeye",
    name: "Dry-Aged Ribeye",
    price: "$46",
    description: "45-day aged ribeye with charred broccolini, roasted garlic butter, and demi-glace.",
    ingredients: ["Dry-aged ribeye", "broccolini", "garlic butter", "bordelaise sauce"],
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "yuzu-cheesecake",
    name: "Yuzu Cheesecake",
    price: "$11",
    description: "Silky yuzu cheesecake with sesame crumb and macerated berries.",
    ingredients: ["Yuzu", "cream cheese", "sesame crumb", "seasonal berry"],
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
    dietary: ["Vegetarian"],
  },
];
