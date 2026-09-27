// ============================================================
// Menu Data — Ganti konten ini sesuai menu coffee shop kamu
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "coffee" | "non-coffee" | "tea" | "food" | "snack";
  isSignature?: boolean;
  isBestSeller?: boolean;
  image?: string; // path ke gambar, opsional
}

export const menuItems: MenuItem[] = [
  // ── COFFEE ──────────────────────────────────────────────
  {
    id: "es-kopi-susu",
    name: "Es Kopi Susu",
    description:
      "Espresso double shot yang dipadukan dengan susu segar dan sedikit gula aren. Segar, creamy, dan tidak terlalu manis.",
    price: "Rp 22.000",
    category: "coffee",
    isSignature: true,
    isBestSeller: true,
  },
  {
    id: "americano",
    name: "Americano",
    description:
      "Espresso yang diencerkan dengan air panas. Bersih, tegas, dan cocok untuk kamu yang suka rasa kopi murni.",
    price: "Rp 18.000",
    category: "coffee",
    isSignature: true,
  },
  {
    id: "latte",
    name: "Caffe Latte",
    description:
      "Espresso lembut dengan steamed milk dan sedikit foam di atasnya. Klasik, hangat, dan menenangkan.",
    price: "Rp 24.000",
    category: "coffee",
    isSignature: true,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Keseimbangan sempurna antara espresso, steamed milk, dan thick foam. Tekstur yang kaya dan rasa yang dalam.",
    price: "Rp 24.000",
    category: "coffee",
  },
  {
    id: "flat-white",
    name: "Flat White",
    description:
      "Ristretto shot dengan micro-foam susu whole milk. Lebih pekat dari latte, lebih halus dari cappuccino.",
    price: "Rp 26.000",
    category: "coffee",
  },
  {
    id: "v60",
    name: "V60 Pour Over",
    description:
      "Manual brew dengan metode pour over yang menghasilkan kopi bersih dengan nuansa fruity dan floral yang elegan.",
    price: "Rp 28.000",
    category: "coffee",
    isSignature: true,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description:
      "Kopi yang diseduh dingin selama 18 jam. Smooth, low-acid, dengan body yang penuh dan rasa yang kompleks.",
    price: "Rp 28.000",
    category: "coffee",
  },
  {
    id: "signature-brown-sugar",
    name: "Brown Sugar Latte",
    description:
      "Latte spesial kami dengan gula aren pilihan, cinnamon, dan oat milk. Warm, cozy, dan jadi favorit pelanggan.",
    price: "Rp 28.000",
    category: "coffee",
    isBestSeller: true,
  },

  // ── NON-COFFEE ──────────────────────────────────────────
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description:
      "Matcha ceremonial grade dari Uji, Jepang, dipadukan dengan steamed oat milk. Earthy, creamy, dan tidak terlalu manis.",
    price: "Rp 26.000",
    category: "non-coffee",
    isSignature: true,
    isBestSeller: true,
  },
  {
    id: "spanish-latte",
    name: "Dirty Matcha",
    description:
      "Matcha shot di atas espresso dengan susu segar. Dua dunia dalam satu gelas — bold dan earthy sekaligus.",
    price: "Rp 28.000",
    category: "non-coffee",
  },
  {
    id: "chocolate-latte",
    name: "Coklat Susu",
    description:
      "Dark chocolate premium dengan steamed milk. Indulgent, creamy, dan cocok untuk semua usia.",
    price: "Rp 22.000",
    category: "non-coffee",
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    description:
      "Susu segar dengan strawberry jam buatan sendiri. Fresh, fruity, dan sangat photogenic.",
    price: "Rp 24.000",
    category: "non-coffee",
  },

  // ── TEA ─────────────────────────────────────────────────
  {
    id: "chamomile",
    name: "Chamomile Tea",
    description:
      "Teh chamomile organik yang menenangkan. Disajikan panas atau dingin dengan madu pilihan.",
    price: "Rp 18.000",
    category: "tea",
  },
  {
    id: "earl-grey-latte",
    name: "Earl Grey Latte",
    description:
      "Earl Grey bergamot yang kuat dipadu dengan oat milk yang creamy. Aromatic dan sophisticated.",
    price: "Rp 22.000",
    category: "tea",
  },
  {
    id: "jasmine-green",
    name: "Jasmine Green Tea",
    description:
      "Teh hijau dengan bunga melati pilihan. Ringan, floral, dan menyegarkan.",
    price: "Rp 18.000",
    category: "tea",
  },
  {
    id: "oolong-latte",
    name: "Oolong Milk Tea",
    description:
      "Oolong Taiwan berkualitas tinggi dengan susu segar. Kompleks, smooth, dan adiktif.",
    price: "Rp 24.000",
    category: "tea",
  },

  // ── FOOD ─────────────────────────────────────────────────
  {
    id: "croissant",
    name: "Butter Croissant",
    description:
      "Croissant mentega premium dengan lapisan yang renyah di luar dan lembut di dalam. Dipanggang segar setiap hari.",
    price: "Rp 22.000",
    category: "food",
    isBestSeller: true,
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description:
      "Sourdough panggang dengan alpukat segar, telur poached, microgreens, dan flaky sea salt.",
    price: "Rp 38.000",
    category: "food",
  },
  {
    id: "egg-sandwich",
    name: "Egg & Cheese Sandwich",
    description:
      "Roti brioche panggang, telur orak-arik, keju cheddar, dan selada segar. Simple tapi sangat memuaskan.",
    price: "Rp 32.000",
    category: "food",
  },
  {
    id: "granola-bowl",
    name: "Granola Bowl",
    description:
      "Granola oat dengan yogurt Greek, buah-buahan segar, dan drizzle madu. Sarapan sehat yang mengenyangkan.",
    price: "Rp 35.000",
    category: "food",
  },

  // ── SNACK ────────────────────────────────────────────────
  {
    id: "banana-bread",
    name: "Banana Bread",
    description:
      "Banana bread buatan sendiri dengan walnuts dan cinnamon. Moist, flavorful, dan nyaman untuk menemani kopi.",
    price: "Rp 18.000",
    category: "snack",
    isBestSeller: true,
  },
  {
    id: "cookies",
    name: "Chocolate Chip Cookies",
    description:
      "Cookies renyah di luar, chewy di dalam. Dibuat dengan dark chocolate premium dan sea salt.",
    price: "Rp 15.000",
    category: "snack",
  },
  {
    id: "muffin",
    name: "Blueberry Muffin",
    description:
      "Muffin lembut dengan blueberry segar yang meledak di setiap gigitan. Dipanggang segar setiap pagi.",
    price: "Rp 18.000",
    category: "snack",
  },
  {
    id: "canele",
    name: "Canelé",
    description:
      "Pastry Prancis klasik dengan tekstur crusty di luar dan custard yang lembut di dalam. Rasa vanilla dan rum.",
    price: "Rp 20.000",
    category: "snack",
  },
];

export const signatureMenu = menuItems.filter((item) => item.isSignature);

export const getCategoryItems = (category: MenuItem["category"]) =>
  menuItems.filter((item) => item.category === category);

export const categoryLabels: Record<MenuItem["category"], string> = {
  coffee: "Coffee",
  "non-coffee": "Non Coffee",
  tea: "Tea",
  food: "Food",
  snack: "Snack",
};
