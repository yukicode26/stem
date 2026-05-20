const shopItems = [
  // Signature Bouquets
  {
    id: "white-peony",
    name: "White Peony",
    category: "Signature Bouquets",
    price: "$89",
    image: "/images/shop/white-peony.png",
    description: "Soft seasonal bouquet with white peonies and wild greens."
  },

  {
    id: "morning-bloom",
    name: "Morning Bloom",
    category: "Signature Bouquets",
    price: "$95",
    image: "/images/shop/morning-bloom.png",
    description: "Fresh neutral flowers inspired by quiet mornings."
  },

  {
    id: "ivory-garden",
    name: "Ivory Garden",
    category: "Signature Bouquets",
    price: "$110",
    image: "/images/shop/ivory-garden.png",
    description: "Elegant ivory arrangement with soft textures."
  },

  {
    id: "wild-stem",
    name: "Wild Stem",
    category: "Signature Bouquets",
    price: "$82",
    image: "/images/shop/wild-stem.png",
    description: "Natural hand-tied bouquet with organic movement."
  },

  {
    id: "quiet-blossom",
    name: "Quiet Blossom",
    category: "Signature Bouquets",
    price: "$98",
    image: "/images/shop/quiet-blossom.png",
    description: "Minimal bouquet with calm neutral tones."
  },

  {
    id: "soft-rose",
    name: "Soft Rose",
    category: "Signature Bouquets",
    price: "$92",
    image: "/images/shop/soft-rose.png",
    description: "Classic roses paired with delicate foliage."
  },

  // Seasonal Collection
  {
    id: "autumn-tones",
    name: "Autumn Tones",
    category: "Seasonal Collection",
    price: "$105",
    image: "/images/shop/autumn-tones.png",
    description: "Warm seasonal arrangement inspired by autumn leaves."
  },

  {
    id: "winter-light",
    name: "Winter Light",
    category: "Seasonal Collection",
    price: "$112",
    image: "/images/shop/winter-light.png",
    description: "White winter flowers with silver-green accents."
  },

  {
    id: "spring-air",
    name: "Spring Air",
    category: "Seasonal Collection",
    price: "$94",
    image: "/images/shop/spring-air.png",
    description: "Fresh pastel flowers celebrating spring."
  },

  {
    id: "summer-meadow",
    name: "Summer Meadow",
    category: "Seasonal Collection",
    price: "$108",
    image: "/images/shop/summer-meadow.png",
    description: "Soft meadow-inspired flowers in natural tones."
  },

  {
    id: "golden-leaves",
    name: "Golden Leaves",
    category: "Seasonal Collection",
    price: "$99",
    image: "/images/shop/golden-leaves.png",
    description: "Golden seasonal arrangement with earthy textures."
  },

  {
    id: "rainy-morning",
    name: "Rainy Morning",
    category: "Seasonal Collection",
    price: "$90",
    image: "/images/shop/rainy-morning.png",
    description: "Gentle bouquet inspired by rainy day calmness."
  },

  // Wedding & Events
  {
    id: "bridal-white",
    name: "Bridal White",
    category: "Wedding & Events",
    price: "$180",
    image: "/images/shop/bridal-white.png",
    description: "Romantic bridal bouquet with white roses."
  },

  {
    id: "ceremony-bloom",
    name: "Ceremony Bloom",
    category: "Wedding & Events",
    price: "$210",
    image: "/images/shop/ceremony-bloom.png",
    description: "Elegant floral styling for modern ceremonies."
  },

  {
    id: "silk-ribbon",
    name: "Silk Ribbon",
    category: "Wedding & Events",
    price: "$195",
    image: "/images/shop/silk-ribbon.png",
    description: "Soft bouquet finished with flowing silk ribbon."
  },

  {
    id: "moonlight-table",
    name: "Moonlight Table",
    category: "Wedding & Events",
    price: "$240",
    image: "/images/shop/moonlight-table.png",
    description: "Minimal table arrangement with candlelight mood."
  },

  {
    id: "classic-ivory",
    name: "Classic Ivory",
    category: "Wedding & Events",
    price: "$220",
    image: "/images/shop/classic-ivory.png",
    description: "Timeless ivory flowers for intimate weddings."
  },

  {
    id: "evening-garden",
    name: "Evening Garden",
    category: "Wedding & Events",
    price: "$230",
    image: "/images/shop/evening-garden.png",
    description: "Lush floral arrangement inspired by evening gardens."
  },

  // Indoor Plants
  {
    id: "olive-tree",
    name: "Olive Tree",
    category: "Indoor Plants",
    price: "$120",
    image: "/images/shop/olive-tree.png",
    description: "Minimal indoor olive tree in ceramic pot."
  },

  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "Indoor Plants",
    price: "$68",
    image: "/images/shop/peace-lily.png",
    description: "Elegant peace lily perfect for calm interiors."
  },

  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: "$75",
    image: "/images/shop/rubber-plant.png",
    description: "Deep green rubber plant with sculptural leaves."
  },

  {
    id: "monstera",
    name: "Monstera",
    category: "Indoor Plants",
    price: "$89",
    image: "/images/shop/monstera.png",
    description: "Modern tropical plant with iconic split leaves."
  },

  {
    id: "mini-fern",
    name: "Mini Fern",
    category: "Indoor Plants",
    price: "$45",
    image: "/images/shop/mini-fern.png",
    description: "Small fern arrangement for shelves and desks."
  },

  {
    id: "desert-cactus",
    name: "Desert Cactus",
    category: "Indoor Plants",
    price: "$52",
    image: "/images/shop/desert-cactus.png",
    description: "Minimal cactus with warm earthy tones."
  },

  // Vases & Objects
  {
    id: "ceramic-vase",
    name: "Ceramic Vase",
    category: "Vases & Objects",
    price: "$58",
    image: "/images/shop/ceramic-vase.png",
    description: "Hand-finished ceramic vase with soft texture."
  },

  {
    id: "stone-bowl",
    name: "Stone Bowl",
    category: "Vases & Objects",
    price: "$64",
    image: "/images/shop/stone-bowl.png",
    description: "Natural stone bowl for floral styling."
  },

  {
    id: "glass-vessel",
    name: "Glass Vessel",
    category: "Vases & Objects",
    price: "$72",
    image: "/images/shop/glass-vessel.png",
    description: "Clear glass vessel with minimal silhouette."
  },

  {
    id: "linen-wrap",
    name: "Linen Wrap",
    category: "Vases & Objects",
    price: "$35",
    image: "/images/shop/linen-wrap.png",
    description: "Soft linen wrap for bouquets and gifts."
  },

  {
    id: "clay-pot",
    name: "Clay Pot",
    category: "Vases & Objects",
    price: "$48",
    image: "/images/shop/clay-pot.png",
    description: "Warm clay pot designed for indoor plants."
  },

  {
    id: "wooden-tray",
    name: "Wooden Tray",
    category: "Vases & Objects",
    price: "$55",
    image: "/images/shop/wooden-tray.png",
    description: "Minimal wooden tray for home styling."
  }
];

export default shopItems;