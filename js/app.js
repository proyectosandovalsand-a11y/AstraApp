/**
 * ASTRA PERFUMERIA - Haute Parfumerie & E-Commerce Engine
 * High-performance, luxury responsive catalog
 * Atención y Pedidos: 3138852832 | Moneda: COP
 */

const WHATSAPP_NUMBER = "573138852832";
const STORE_NAME = "ASTRA PERFUMERIA";
const FREE_SHIPPING_THRESHOLD = 250000; // $250.000 COP como perfumeriaeau

// Embedded fallback data in case of local file:// execution
const FALLBACK_DATA = [
  {
    "id": "astra-01",
    "brand": "Maison Francis Kurkdjian",
    "name": "Baccarat Rouge 540 Extrait",
    "category": "Nicho",
    "concentration": "Extrait de Parfum",
    "gender": "Unisex",
    "family": "Oriental/Especiada",
    "occasion": ["Noche", "Citas", "Invierno"],
    "description": "La máxima expresión del lujo olfativo. Una alquimia magistral de jazmín grandiflorum egipcio, azafrán ambarino y cedro de Virginia. Crea una estela adictiva, radiante y magnética que dura más de 24 horas.",
    "featured": true,
    "bestseller": true,
    "rating": 5.0,
    "reviewsCount": 84,
    "sillage": "Enorme",
    "sillageScore": 98,
    "longevity": "16+ Horas",
    "longevityScore": 99,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Almendra Amarga de Marruecos", "Azafrán Radiante"],
    "heartNotes": ["Jazmín Grandiflorum de Egipto", "Madera de Cedro"],
    "baseNotes": ["Ámbar Gris", "Acorde Amaderado Almizclado"],
    "tags": ["Azafrán", "Ámbar Gris", "Almendra"],
    "presentations": [
      { "size": "Decant 5ml", "price": 95000, "inStock": true, "badge": "Popular" },
      { "size": "Decant 10ml", "price": 179000, "inStock": true, "badge": "Mejor Valor" },
      { "size": "Frasco 70ml", "price": 1850000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-02",
    "brand": "Lattafa",
    "name": "Khamrah",
    "category": "Árabe",
    "concentration": "Eau de Parfum",
    "gender": "Unisex",
    "family": "Gourmand",
    "occasion": ["Noche", "Citas", "Invierno"],
    "description": "El fenómeno oriental más aclamado del momento. Un perfume cálido, licoroso y gourmand con notas dulces de canela, dátiles, praliné crujiente y vainilla cremosa sobre fondo ambarino.",
    "featured": true,
    "bestseller": true,
    "rating": 4.9,
    "reviewsCount": 126,
    "sillage": "Pesada",
    "sillageScore": 90,
    "longevity": "12+ Horas",
    "longevityScore": 92,
    "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Canela", "Nuez Moscada", "Bergamota"],
    "heartNotes": ["Dátiles", "Praliné", "Nardos", "Mahonial"],
    "baseNotes": ["Vainilla", "Haba Tonka", "Benjuí", "Mirra", "Madera de Ámbar"],
    "tags": ["Dátiles", "Canela", "Praliné"],
    "presentations": [
      { "size": "Decant 5ml", "price": 38000, "inStock": true, "badge": "Económico" },
      { "size": "Decant 10ml", "price": 68000, "inStock": true, "badge": "Más Pedido" },
      { "size": "Frasco 100ml", "price": 280000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-03",
    "brand": "Creed",
    "name": "Aventus",
    "category": "Nicho",
    "concentration": "Eau de Parfum",
    "gender": "Masculino",
    "family": "Cítrica",
    "occasion": ["Día", "Oficina", "Citas"],
    "description": "El rey indiscutible de la perfumería masculina de nicho. Proyecta poder, elegancia y éxito con su icónica apertura de piña ahumada, grosellas y manzana, envuelta en abedul y ámbar gris.",
    "featured": true,
    "bestseller": true,
    "rating": 4.9,
    "reviewsCount": 97,
    "sillage": "Pesada",
    "sillageScore": 88,
    "longevity": "12 Horas",
    "longevityScore": 89,
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Piña Real", "Bergamota Italiana", "Grosella Negra", "Manzana"],
    "heartNotes": ["Abedul Ahumado", "Pachulí", "Jazmín de Marruecos", "Rosa"],
    "baseNotes": ["Ámbar Gris", "Almizcle", "Musgo de Roble", "Vainilla"],
    "tags": ["Piña Ahumada", "Abedul", "Ámbar Gris"],
    "presentations": [
      { "size": "Decant 5ml", "price": 98000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 185000, "inStock": true, "badge": "Recomendado" },
      { "size": "Frasco 100ml", "price": 1950000, "inStock": true, "badge": "Sellado Lujo" }
    ]
  },
  {
    "id": "astra-04",
    "brand": "Parfums de Marly",
    "name": "Delina Exclusif",
    "category": "Nicho",
    "concentration": "Parfum / Extrait",
    "gender": "Femenino",
    "family": "Floral",
    "occasion": ["Día", "Citas", "Noche"],
    "description": "El epítome de la feminidad de alta cuna. Una rosa turca sublime envuelta en notas de lichi dulce, pera jugosa, incienso aterciopelado y una base irresistible de vainilla y ámbar.",
    "featured": true,
    "bestseller": true,
    "rating": 5.0,
    "reviewsCount": 68,
    "sillage": "Pesada",
    "sillageScore": 92,
    "longevity": "14+ Horas",
    "longevityScore": 94,
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Lichi Fresco", "Pera Jugosa", "Bergamota"],
    "heartNotes": ["Rosa Turca", "Incienso", "Oud Suave"],
    "baseNotes": ["Vainilla de Madagascar", "Ámbar", "Notas Amaderadas"],
    "tags": ["Rosa Turca", "Lichi", "Vainilla"],
    "presentations": [
      { "size": "Decant 5ml", "price": 92000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 175000, "inStock": true, "badge": "Popular" },
      { "size": "Frasco 75ml", "price": 1690000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-05",
    "brand": "Armaf",
    "name": "Club de Nuit Intense Man (Pure Parfum)",
    "category": "Árabe",
    "concentration": "Parfum / Extrait",
    "gender": "Masculino",
    "family": "Cítrica",
    "occasion": ["Día", "Oficina", "Noche"],
    "description": "La bestia negra de los cumplidos masculinos en su concentración más pura. Cítricos vibrantes, manzana crujiente y abedul ahumado con una estela arrolladora que no pasa desapercibida.",
    "featured": true,
    "bestseller": true,
    "rating": 4.8,
    "reviewsCount": 142,
    "sillage": "Enorme",
    "sillageScore": 95,
    "longevity": "12+ Horas",
    "longevityScore": 93,
    "image": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Limón", "Piña", "Bergamota", "Grosella Negra"],
    "heartNotes": ["Abedul", "Jazmín", "Rosa"],
    "baseNotes": ["Almizcle", "Ámbar Gris", "Pachulí", "Vainilla"],
    "tags": ["Abedul", "Limón", "Ámbar Gris"],
    "presentations": [
      { "size": "Decant 5ml", "price": 32000, "inStock": true, "badge": "Económico" },
      { "size": "Decant 10ml", "price": 58000, "inStock": true, "badge": "Top Ventas" },
      { "size": "Frasco 150ml", "price": 340000, "inStock": true, "badge": "Maxi Frasco" }
    ]
  },
  {
    "id": "astra-06",
    "brand": "Kilian Paris",
    "name": "Angels' Share",
    "category": "Nicho",
    "concentration": "Eau de Parfum",
    "gender": "Unisex",
    "family": "Gourmand",
    "occasion": ["Noche", "Citas", "Invierno"],
    "description": "Inspirado en los barriles de roble de la casa Hennessy. Una oda al coñac de reserva, aceite de canela, praliné tostado y haba tonka con madera de sándalo ultra cremosa.",
    "featured": true,
    "bestseller": true,
    "rating": 4.9,
    "reviewsCount": 59,
    "sillage": "Pesada",
    "sillageScore": 90,
    "longevity": "13 Horas",
    "longevityScore": 91,
    "image": "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Coñac Centenario"],
    "heartNotes": ["Aceite de Canela", "Roble", "Haba Tonka"],
    "baseNotes": ["Praliné", "Vainilla Bourbon", "Sándalo Cremoso"],
    "tags": ["Coñac", "Canela", "Praliné"],
    "presentations": [
      { "size": "Decant 5ml", "price": 95000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 178000, "inStock": true, "badge": "Destacado" },
      { "size": "Frasco 50ml", "price": 1420000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-07",
    "brand": "Dior",
    "name": "Sauvage Elixir",
    "category": "Diseñador",
    "concentration": "Parfum / Extrait",
    "gender": "Masculino",
    "family": "Oriental/Especiada",
    "occasion": ["Noche", "Invierno", "Citas"],
    "description": "Una sobredosis especiada de altísima concentración. Canela licorosa, cardamomo de Guatemala, lavanda personalizada de Nyons y maderas nobles. Potencia descomunal y sofisticada.",
    "featured": true,
    "bestseller": true,
    "rating": 4.9,
    "reviewsCount": 110,
    "sillage": "Enorme",
    "sillageScore": 99,
    "longevity": "16+ Horas",
    "longevityScore": 99,
    "image": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Nuez Moscada", "Canela", "Cardamomo", "Pomelo"],
    "heartNotes": ["Lavanda Exclusiva de Grasse"],
    "baseNotes": ["Regaliz", "Sándalo", "Ámbar Cálido", "Pachulí"],
    "tags": ["Canela", "Lavanda", "Regaliz"],
    "presentations": [
      { "size": "Decant 5ml", "price": 68000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 125000, "inStock": true, "badge": "Favorito" },
      { "size": "Frasco 60ml", "price": 890000, "inStock": true, "badge": "Sellado" },
      { "size": "Frasco 100ml", "price": 1180000, "inStock": true, "badge": "Maxi" }
    ]
  },
  {
    "id": "astra-08",
    "brand": "Le Labo",
    "name": "Santal 33",
    "category": "Nicho",
    "concentration": "Eau de Parfum",
    "gender": "Unisex",
    "family": "Amaderada",
    "occasion": ["Día", "Noche", "Oficina"],
    "description": "El perfume de culto de Nueva York. Sándalo australiano, cardamomo aromático, violeta y notas de cuero ahumado. Un aroma inconfundible que transmite estilo refinado e intelectual.",
    "featured": false,
    "bestseller": true,
    "rating": 4.8,
    "reviewsCount": 77,
    "sillage": "Pesada",
    "sillageScore": 86,
    "longevity": "12 Horas",
    "longevityScore": 89,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Violeta Suave", "Cardamomo"],
    "heartNotes": ["Iris", "Papiro", "Ambrox"],
    "baseNotes": ["Sándalo Australiano", "Madera de Cedro", "Cuero Fino"],
    "tags": ["Sándalo", "Cuero", "Cardamomo"],
    "presentations": [
      { "size": "Decant 5ml", "price": 85000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 158000, "inStock": true, "badge": "Recomendado" },
      { "size": "Frasco 100ml", "price": 1490000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-09",
    "brand": "Yves Saint Laurent",
    "name": "Libre Le Parfum",
    "category": "Diseñador",
    "concentration": "Parfum / Extrait",
    "gender": "Femenino",
    "family": "Floral",
    "occasion": ["Noche", "Citas", "Invierno"],
    "description": "Una bomba de sensualidad femenina. Flor de azahar de Marruecos y lavanda francesa, fusionadas con miel dorada y un acorde ardiente de azafrán.",
    "featured": false,
    "bestseller": true,
    "rating": 4.9,
    "reviewsCount": 83,
    "sillage": "Pesada",
    "sillageScore": 89,
    "longevity": "11-13 Horas",
    "longevityScore": 90,
    "image": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Azafrán", "Jengibre", "Mandarina", "Bergamota"],
    "heartNotes": ["Flor de Azahar", "Lavanda Francesa"],
    "baseNotes": ["Vainilla Bourbon", "Miel", "Haba Tonka", "Vetiver"],
    "tags": ["Flor de Azahar", "Miel", "Azafrán"],
    "presentations": [
      { "size": "Decant 5ml", "price": 55000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 99000, "inStock": true, "badge": "Favorito" },
      { "size": "Frasco 90ml", "price": 820000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-10",
    "brand": "Tom Ford",
    "name": "Tobacco Vanille",
    "category": "Nicho",
    "concentration": "Eau de Parfum",
    "gender": "Unisex",
    "family": "Oriental/Especiada",
    "occasion": ["Noche", "Invierno", "Citas"],
    "description": "Opulento, cálido e icónico. Reinterpreta un exclusivo club londinense con aromáticas hojas de tabaco de primera calidad, cacao aromático y vainilla cremosa.",
    "featured": false,
    "bestseller": false,
    "rating": 4.8,
    "reviewsCount": 65,
    "sillage": "Enorme",
    "sillageScore": 93,
    "longevity": "14 Horas",
    "longevityScore": 94,
    "image": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Hojas de Tabaco", "Notas Especiadas"],
    "heartNotes": ["Vainilla", "Cacao", "Haba Tonka", "Flor del Tabaco"],
    "baseNotes": ["Frutos Secos", "Madera Noble"],
    "tags": ["Tabaco", "Vainilla", "Cacao"],
    "presentations": [
      { "size": "Decant 5ml", "price": 92000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 172000, "inStock": true, "badge": "Popular" },
      { "size": "Frasco 50ml", "price": 1290000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-11",
    "brand": "Maison Margiela",
    "name": "Replica Jazz Club",
    "category": "Nicho",
    "concentration": "Eau de Toilette",
    "gender": "Unisex",
    "family": "Gourmand",
    "occasion": ["Noche", "Citas", "Invierno"],
    "description": "Atmósfera embriagadora de un club de jazz nocturno en Brooklyn. Ron especiado, hojas de tabaco rubio, salvia y una cálida vainilla que reconforta los sentidos.",
    "featured": false,
    "bestseller": false,
    "rating": 4.7,
    "reviewsCount": 51,
    "sillage": "Moderada",
    "sillageScore": 78,
    "longevity": "9 Horas",
    "longevityScore": 80,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Pimienta Rosa", "Neroli", "Limón"],
    "heartNotes": ["Ron Dorado", "Salvia", "Aceite de Vetiver"],
    "baseNotes": ["Hoja de Tabaco", "Vaina de Vainilla", "Styrax"],
    "tags": ["Ron", "Tabaco", "Vainilla"],
    "presentations": [
      { "size": "Decant 5ml", "price": 62000, "inStock": true, "badge": "Prueba" },
      { "size": "Decant 10ml", "price": 115000, "inStock": true, "badge": "Recomendado" },
      { "size": "Frasco 100ml", "price": 890000, "inStock": true, "badge": "Sellado" }
    ]
  },
  {
    "id": "astra-12",
    "brand": "Acqua di Parma",
    "name": "Fico di Amalfi",
    "category": "Nicho",
    "concentration": "Eau de Toilette",
    "gender": "Unisex",
    "family": "Fresca/Acuática",
    "occasion": ["Día", "Verano", "Oficina"],
    "description": "El sol radiante de la costa de Amalfi en un frasco. Néctar de higo dulce italiano, toronja chispeante, bergamota y cedro fresco. Frescura pura y sofisticada para el día.",
    "featured": false,
    "bestseller": false,
    "rating": 4.7,
    "reviewsCount": 43,
    "sillage": "Moderada",
    "sillageScore": 72,
    "longevity": "7-8 Horas",
    "longevityScore": 74,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
    "topNotes": ["Toronja Italiana", "Bergamota", "Limón", "Cidra"],
    "heartNotes": ["Néctar de Higo", "Pimienta Rosa", "Jazmín"],
    "baseNotes": ["Higuera", "Madera de Cedro", "Benjuí"],
    "tags": ["Higo", "Toronja", "Cedro"],
    "presentations": [
      { "size": "Decant 5ml", "price": 48000, "inStock": true, "badge": "Fresco" },
      { "size": "Decant 10ml", "price": 89000, "inStock": true, "badge": "Popular" },
      { "size": "Frasco 75ml", "price": 680000, "inStock": true, "badge": "Sellado" }
    ]
  }
];

// App State
const state = {
  perfumes: [],
  filtered: [],
  filters: {
    categoryTab: "todos", // 'todos', 'arabe', 'nicho', 'decants', 'dama', 'caballero', 'bestseller'
    search: "",
    gender: "Todos",
    family: "Todas",
    concentration: "Todas",
    occasion: "Todas",
    maxPrice: 2000000,
    sortBy: "bestseller"
  },
  cart: JSON.parse(localStorage.getItem("astra_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("astra_wishlist") || "[]"),
  modalPerfume: null,
  modalPresentationIdx: 0,
  modalQty: 1
};

// Colombian Pesos Formatter
function formatCOP(num) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(num);
}

// App Initialization
async function initApp() {
  try {
    const res = await fetch("data/perfumes.json");
    if (res.ok) {
      state.perfumes = await res.json();
    } else {
      state.perfumes = FALLBACK_DATA;
    }
  } catch (err) {
    state.perfumes = FALLBACK_DATA;
  }

  setupEventListeners();
  applyFilters();
  updateHeaderCounters();
  renderCart();
  renderWishlist();
}

// Event Listeners
function setupEventListeners() {
  // Desktop search input with instant results dropdown
  const desktopSearch = document.getElementById("search-input");
  if (desktopSearch) {
    desktopSearch.addEventListener("input", (e) => {
      state.filters.search = e.target.value.trim().toLowerCase();
      renderSearchSuggestions(state.filters.search);
      applyFilters();
    });
  }

  // Mobile search input
  const mobileSearch = document.getElementById("search-input-mobile");
  if (mobileSearch) {
    mobileSearch.addEventListener("input", (e) => {
      state.filters.search = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.filters.sortBy = e.target.value;
      applyFilters();
    });
  }

  // Price range slider
  const priceSlider = document.getElementById("price-range-slider");
  const priceDisplay = document.getElementById("price-range-display");
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      state.filters.maxPrice = Number(e.target.value);
      if (priceDisplay) priceDisplay.textContent = formatCOP(state.filters.maxPrice);
      applyFilters();
    });
  }

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCart();
      closeWishlist();
      closeMobileFilters();
      closeSearchSuggestions();
    }
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      desktopSearch?.focus();
    }
  });

  // Close search suggestions on click outside
  document.addEventListener("click", (e) => {
    const box = document.getElementById("search-suggestions-box");
    if (box && !box.contains(e.target) && e.target !== desktopSearch) {
      box.classList.add("hidden");
    }
  });
}

// Search Suggestions Popover
function renderSearchSuggestions(query) {
  const box = document.getElementById("search-suggestions-box");
  if (!box) return;

  if (!query || query.length < 2) {
    box.classList.add("hidden");
    return;
  }

  const matches = state.perfumes.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.tags.some(t => t.toLowerCase().includes(query))
  ).slice(0, 5);

  if (matches.length === 0) {
    box.innerHTML = `<div class="p-4 text-xs text-neutral-500 text-center">No encontramos coincidencias para "${query}"</div>`;
    box.classList.remove("hidden");
    return;
  }

  box.innerHTML = `
    <div class="p-2 border-b border-[#F0ECE4] text-[10px] font-bold uppercase tracking-wider text-[#A58039]">
      Sugerencias de Perfumes
    </div>
    <div class="divide-y divide-[#F5F2EB]">
      ${matches.map(p => `
        <div onclick="openProductModal('${p.id}'); closeSearchSuggestions();" class="p-2.5 flex items-center gap-3 hover:bg-[#FAF7F0] cursor-pointer transition-colors">
          <img src="${p.image}" alt="${p.name}" class="w-10 h-10 object-cover rounded-md bg-neutral-100" />
          <div class="flex-1 min-w-0">
            <p class="text-[10px] text-[#A58039] uppercase font-bold truncate">${p.brand}</p>
            <h4 class="text-xs font-semibold text-neutral-900 truncate">${p.name}</h4>
          </div>
          <span class="text-xs font-bold text-neutral-900">Desde ${formatCOP(p.presentations[0].price)}</span>
        </div>
      `).join('')}
    </div>
  `;
  box.classList.remove("hidden");
}

function closeSearchSuggestions() {
  const box = document.getElementById("search-suggestions-box");
  if (box) box.classList.add("hidden");
}

// Category Tabs Selection
function setCategoryTab(tabKey) {
  state.filters.categoryTab = tabKey;

  // Update tabs UI
  document.querySelectorAll(".category-pill").forEach(pill => {
    if (pill.getAttribute("data-category") === tabKey) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  applyFilters();
}

// Apply Filters
function applyFilters() {
  let list = [...state.perfumes];

  // 1. Category Tab Filter
  const tab = state.filters.categoryTab;
  if (tab === "arabe") {
    list = list.filter(p => p.category === "Árabe");
  } else if (tab === "nicho") {
    list = list.filter(p => p.category === "Nicho");
  } else if (tab === "dama") {
    list = list.filter(p => p.gender === "Femenino" || p.gender === "Unisex");
  } else if (tab === "caballero") {
    list = list.filter(p => p.gender === "Masculino" || p.gender === "Unisex");
  } else if (tab === "bestseller") {
    list = list.filter(p => p.bestseller);
  } else if (tab === "decants") {
    list = list.filter(p => p.presentations.some(pr => pr.size.includes("Decant")));
  }

  // 2. Search
  if (state.filters.search) {
    const q = state.filters.search;
    list = list.filter(p => {
      return p.name.toLowerCase().includes(q) ||
             p.brand.toLowerCase().includes(q) ||
             p.family.toLowerCase().includes(q) ||
             p.tags.some(t => t.toLowerCase().includes(q)) ||
             [...p.topNotes, ...p.heartNotes, ...p.baseNotes].some(n => n.toLowerCase().includes(q));
    });
  }

  // 3. Gender
  if (state.filters.gender !== "Todos") {
    list = list.filter(p => p.gender.toLowerCase() === state.filters.gender.toLowerCase());
  }

  // 4. Family
  if (state.filters.family !== "Todas") {
    list = list.filter(p => p.family === state.filters.family);
  }

  // 5. Concentration
  if (state.filters.concentration !== "Todas") {
    list = list.filter(p => p.concentration.includes(state.filters.concentration));
  }

  // 6. Occasion
  if (state.filters.occasion !== "Todas") {
    list = list.filter(p => p.occasion.includes(state.filters.occasion));
  }

  // 7. Max Price (check starting presentation)
  if (state.filters.maxPrice) {
    list = list.filter(p => p.presentations[0].price <= state.filters.maxPrice);
  }

  // 8. Sorting
  if (state.filters.sortBy === "price-asc") {
    list.sort((a, b) => a.presentations[0].price - b.presentations[0].price);
  } else if (state.filters.sortBy === "price-desc") {
    list.sort((a, b) => b.presentations[0].price - a.presentations[0].price);
  } else if (state.filters.sortBy === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Bestseller & rating first
    list.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0) || b.rating - a.rating);
  }

  state.filtered = list;
  renderCatalog();
  renderActiveFilterChips();
}

// Set custom individual filter
function setFilter(type, value) {
  state.filters[type] = value;
  
  // Highlight UI button
  document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(btn => {
    if (btn.getAttribute("data-filter-value") === value) {
      btn.classList.add("bg-neutral-900", "text-white", "border-neutral-900");
      btn.classList.remove("bg-white", "text-neutral-700", "border-neutral-200");
    } else {
      btn.classList.remove("bg-neutral-900", "text-white", "border-neutral-900");
      btn.classList.add("bg-white", "text-neutral-700", "border-neutral-200");
    }
  });

  applyFilters();
}

// Reset all filters
function resetFilters() {
  state.filters.categoryTab = "todos";
  state.filters.search = "";
  state.filters.gender = "Todos";
  state.filters.family = "Todas";
  state.filters.concentration = "Todas";
  state.filters.occasion = "Todas";
  state.filters.maxPrice = 2000000;
  state.filters.sortBy = "bestseller";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const mobileInput = document.getElementById("search-input-mobile");
  if (mobileInput) mobileInput.value = "";

  const slider = document.getElementById("price-range-slider");
  if (slider) slider.value = 2000000;
  const pDisp = document.getElementById("price-range-display");
  if (pDisp) pDisp.textContent = "$ 2.000.000 COP";

  setCategoryTab("todos");
  
  document.querySelectorAll("[data-filter-type]").forEach(btn => {
    const val = btn.getAttribute("data-filter-value");
    if (val === "Todos" || val === "Todas") {
      btn.classList.add("bg-neutral-900", "text-white", "border-neutral-900");
      btn.classList.remove("bg-white", "text-neutral-700", "border-neutral-200");
    } else {
      btn.classList.remove("bg-neutral-900", "text-white", "border-neutral-900");
      btn.classList.add("bg-white", "text-neutral-700", "border-neutral-200");
    }
  });

  applyFilters();
}

// Render active filter chips
function renderActiveFilterChips() {
  const container = document.getElementById("active-filters-chips");
  const countEl = document.getElementById("product-count-display");
  
  if (countEl) {
    countEl.textContent = `Mostrando ${state.filtered.length} de ${state.perfumes.length} fragancias disponibles`;
  }

  if (!container) return;
  container.innerHTML = "";

  const active = [];
  if (state.filters.search) active.push({ type: "search", label: `Búsqueda: "${state.filters.search}"` });
  if (state.filters.categoryTab !== "todos") active.push({ type: "categoryTab", label: `Categoría: ${state.filters.categoryTab.toUpperCase()}` });
  if (state.filters.gender !== "Todos") active.push({ type: "gender", label: `Género: ${state.filters.gender}` });
  if (state.filters.family !== "Todas") active.push({ type: "family", label: `Familia: ${state.filters.family}` });
  if (state.filters.concentration !== "Todas") active.push({ type: "concentration", label: `Concentración: ${state.filters.concentration}` });

  if (active.length === 0) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  let html = `<div class="flex items-center flex-wrap gap-2 text-xs">`;
  html += `<span class="text-neutral-500 font-semibold">Filtros activos:</span>`;

  active.forEach(item => {
    html += `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF5E8] text-[#8C6C2D] border border-[#E8DCBF] rounded-full font-medium">
        ${item.label}
        <button onclick="removeFilter('${item.type}')" class="hover:text-red-700 p-0.5 rounded-full" title="Quitar">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </span>
    `;
  });

  html += `
    <button onclick="resetFilters()" class="text-xs text-neutral-500 hover:text-neutral-900 underline ml-2 font-medium">
      Limpiar todos
    </button>
  </div>`;
  container.innerHTML = html;
}

function removeFilter(type) {
  if (type === "search") {
    state.filters.search = "";
    const s = document.getElementById("search-input");
    if (s) s.value = "";
  } else if (type === "categoryTab") {
    setCategoryTab("todos");
    return;
  } else {
    state.filters[type] = type === "gender" ? "Todos" : "Todas";
  }
  applyFilters();
}

// Render Products Catalog Grid
function renderCatalog() {
  const grid = document.getElementById("perfumes-grid");
  const emptyState = document.getElementById("empty-state");
  if (!grid) return;

  if (state.filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = state.filtered.map(perfume => {
    const isWishlisted = state.wishlist.includes(perfume.id);
    const startPrice = perfume.presentations[0]?.price || 0;
    const fullBottle = perfume.presentations.find(p => p.size.includes("Frasco") || (!p.size.includes("Decant") && p.size.includes("ml")));

    return `
      <article class="perfume-card rounded-2xl border border-[#EAE6DE] overflow-hidden flex flex-col justify-between">
        
        <!-- Image & Badges Container -->
        <div class="perfume-image-wrap pt-[100%] cursor-pointer" onclick="openProductModal('${perfume.id}')">
          <img 
            src="${perfume.image}" 
            alt="${perfume.brand} - ${perfume.name}" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />

          <!-- Badges top left -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            ${perfume.bestseller ? `
              <span class="px-2.5 py-0.5 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-wider uppercase rounded-md shadow-xs flex items-center gap-1">
                🔥 Bestseller
              </span>
            ` : ''}
            <span class="px-2.5 py-0.5 bg-white/95 text-[#8C6C2D] text-[10px] font-bold uppercase rounded-md shadow-xs border border-[#EAE6DE]">
              ${perfume.category}
            </span>
          </div>

          <!-- Wishlist Heart Button -->
          <button 
            onclick="event.stopPropagation(); toggleWishlist('${perfume.id}')"
            class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-neutral-600 hover:text-red-500 shadow-sm transition-all z-10"
            title="${isWishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
          >
            <svg class="w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'fill-none stroke-current'}" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>

          <!-- Quick view button overlay -->
          <div class="absolute inset-x-3 bottom-3 opacity-0 hover:opacity-100 transition-opacity">
            <button class="w-full py-2 bg-white/95 text-neutral-900 rounded-lg text-xs font-bold shadow-md hover:bg-white flex items-center justify-center gap-1.5">
              <span>Ver Pirámide & Tamaños</span>
            </button>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-white">
          <div>
            <!-- Category & Concentration -->
            <div class="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
              <span class="font-semibold tracking-wide uppercase text-[#A58039]">${perfume.brand}</span>
              <span>${perfume.gender}</span>
            </div>

            <!-- Perfume Name -->
            <h3 
              onclick="openProductModal('${perfume.id}')"
              class="font-serif-title text-lg font-semibold text-neutral-900 hover:text-[#C5A059] transition-colors leading-tight cursor-pointer line-clamp-1"
            >
              ${perfume.name}
            </h3>

            <!-- Rating Stars -->
            <div class="flex items-center gap-1.5 mt-1.5 text-xs text-neutral-600">
              <span class="text-amber-500 font-bold">★★★★★</span>
              <span class="text-[11px] font-semibold text-neutral-700">${perfume.rating}</span>
              <span class="text-[10px] text-neutral-400">(${perfume.reviewsCount})</span>
            </div>

            <!-- Notes Tags -->
            <div class="flex flex-wrap gap-1 mt-3">
              ${perfume.tags.map(tag => `
                <span class="px-2 py-0.5 bg-[#FAF9F6] border border-[#EFECE6] text-neutral-600 rounded text-[10px] font-medium">
                  ${tag}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Price & Buttons -->
          <div class="mt-5 pt-3.5 border-t border-[#F3F0E8] flex items-center justify-between gap-2">
            <div>
              <span class="text-[10px] uppercase font-semibold text-neutral-400 block">Decants desde</span>
              <span class="text-sm sm:text-base font-extrabold text-neutral-900">
                ${formatCOP(startPrice)}
              </span>
            </div>

            <div class="flex items-center gap-1.5">
              <!-- View detail button -->
              <button 
                onclick="openProductModal('${perfume.id}')"
                class="px-3 py-2 bg-[#FAF7F0] hover:bg-[#F3EFE4] text-neutral-800 text-xs font-bold rounded-lg border border-[#E5E0D5] transition-all"
                title="Ver detalles"
              >
                Detalles
              </button>

              <!-- WhatsApp Quick Order -->
              <button 
                onclick="orderWhatsAppSingle('${perfume.id}', 0)"
                class="p-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg shadow-xs transition-all flex items-center justify-center"
                title="Pedir por WhatsApp al 3138852832"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.578 1.764.88 2.791.88 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.766-5.768-5.766zm9.969 5.766c0 5.405-4.394 9.8-9.8 9.8-1.734 0-3.355-.453-4.771-1.246l-5.429 1.422 1.447-5.295c-.879-1.477-1.378-3.186-1.378-4.981 0-5.406 4.394-9.8 9.8-9.8 5.405 0 9.8 4.394 9.8 9.8z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Modal Details
function openProductModal(perfumeId) {
  const p = state.perfumes.find(item => item.id === perfumeId);
  if (!p) return;

  state.modalPerfume = p;
  state.modalPresentationIdx = 0;
  state.modalQty = 1;

  renderModalContent();
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function renderModalContent() {
  const p = state.modalPerfume;
  if (!p) return;

  const content = document.getElementById("product-modal-content");
  if (!content) return;

  const currentPresentation = p.presentations[state.modalPresentationIdx] || p.presentations[0];
  const totalPrice = currentPresentation.price * state.modalQty;

  content.innerHTML = `
    <div class="modal-animate relative flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
      
      <!-- Close Button -->
      <button 
        onclick="closeProductModal()"
        class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-neutral-100 text-neutral-800 flex items-center justify-center shadow-md transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <!-- Left Column: Image & Authenticity -->
      <div class="lg:w-1/2 bg-[#F7F5F0] p-6 lg:p-8 flex flex-col justify-between items-center relative">
        <div class="w-full flex justify-between items-center">
          <span class="px-3 py-1 bg-white text-xs font-bold text-[#8C6C2D] rounded-full border border-[#EAE6DE]">
            ${p.category} • ${p.gender}
          </span>
          <span class="px-3 py-1 bg-[#1A1A1A] text-white text-xs font-semibold rounded-full">
            ${p.concentration}
          </span>
        </div>

        <div class="my-6 w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden bg-white shadow-md border border-[#EFECE6] flex items-center justify-center p-4">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            class="max-h-full max-w-full object-contain"
          />
        </div>

        <div class="w-full bg-white/90 rounded-xl p-3 border border-[#EAE6DE] text-center text-xs text-neutral-600 flex items-center justify-center gap-2">
          <span class="text-[#25D366] text-base">🛡️</span>
          <span><strong>Garantía ASTRA:</strong> 100% Original o Devolución de Dinero</span>
        </div>
      </div>

      <!-- Right Column: Specs, Pyramid, Presentation & Actions -->
      <div class="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between bg-white">
        <div>
          <!-- Brand & Name -->
          <p class="text-xs font-bold tracking-widest text-[#A58039] uppercase">${p.brand}</p>
          <h2 class="font-serif-title text-2xl lg:text-3xl font-bold text-neutral-900 mt-1">${p.name}</h2>
          
          <div class="flex items-center gap-2 mt-2 text-xs text-neutral-600">
            <span class="text-amber-500 font-bold">★★★★★</span>
            <span class="font-bold text-neutral-900">${p.rating}</span>
            <span>(${p.reviewsCount} reseñas verificadas)</span>
            <span>•</span>
            <span class="font-semibold text-[#8C6C2D]">${p.family}</span>
          </div>

          <p class="text-xs lg:text-sm text-neutral-600 mt-4 leading-relaxed">${p.description}</p>

          <!-- Presentation Selector -->
          <div class="mt-6">
            <label class="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
              Presentación disponible:
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${p.presentations.map((pres, idx) => {
                const isSelected = idx === state.modalPresentationIdx;
                return `
                  <button 
                    onclick="selectModalPres(${idx})"
                    class="p-2.5 rounded-xl border text-left transition-all ${
                      isSelected 
                        ? 'border-[#C5A059] bg-[#FAF6EC] ring-1 ring-[#C5A059]' 
                        : 'border-[#EAE6DE] bg-white hover:border-neutral-400'
                    }"
                  >
                    <span class="block text-xs font-bold text-neutral-900">${pres.size}</span>
                    <span class="block text-xs font-extrabold text-[#9F792B] mt-0.5">${formatCOP(pres.price)}</span>
                    <span class="text-[10px] text-neutral-400 block">${pres.badge || 'Disponible'}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Olfactory Pyramid -->
          <div class="mt-6 p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE6DE]">
            <h4 class="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2.5 flex items-center gap-1.5">
              <span>🌸</span> Pirámide Olfativa
            </h4>
            <div class="space-y-2 text-xs">
              <div class="pyramid-card p-2 rounded-lg bg-white border border-[#F0ECE4] flex items-start gap-2">
                <span class="w-16 font-bold text-neutral-400 uppercase text-[10px] shrink-0">Salida</span>
                <span class="text-neutral-800 font-medium">${p.topNotes.join(", ")}</span>
              </div>
              <div class="pyramid-card p-2 rounded-lg bg-white border border-[#F0ECE4] flex items-start gap-2">
                <span class="w-16 font-bold text-[#A58039] uppercase text-[10px] shrink-0">Corazón</span>
                <span class="text-neutral-800 font-medium">${p.heartNotes.join(", ")}</span>
              </div>
              <div class="pyramid-card p-2 rounded-lg bg-white border border-[#F0ECE4] flex items-start gap-2">
                <span class="w-16 font-bold text-neutral-900 uppercase text-[10px] shrink-0">Fondo</span>
                <span class="text-neutral-800 font-medium">${p.baseNotes.join(", ")}</span>
              </div>
            </div>
          </div>

          <!-- Estela & Duración Meters -->
          <div class="grid grid-cols-2 gap-3 mt-4">
            <div class="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EAE6DE]">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-neutral-500 font-medium">Estela (Sillage):</span>
                <span class="font-bold text-neutral-900">${p.sillage}</span>
              </div>
              <div class="w-full bg-[#E5E0D5] h-1.5 rounded-full overflow-hidden">
                <div class="bg-[#C5A059] h-full rounded-full" style="width: ${p.sillageScore}%"></div>
              </div>
            </div>

            <div class="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EAE6DE]">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-neutral-500 font-medium">Duración en piel:</span>
                <span class="font-bold text-neutral-900">${p.longevity}</span>
              </div>
              <div class="w-full bg-[#E5E0D5] h-1.5 rounded-full overflow-hidden">
                <div class="bg-[#1A1A1A] h-full rounded-full" style="width: ${p.longevityScore}%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Purchase Action Bar -->
        <div class="mt-6 pt-4 border-t border-[#EAE6DE]">
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-[11px] text-neutral-500 block">Total a pagar:</span>
              <span class="text-xl lg:text-2xl font-serif-title font-extrabold text-neutral-900">
                ${formatCOP(totalPrice)}
              </span>
            </div>

            <div class="flex items-center border border-[#D5D0C2] rounded-lg bg-white overflow-hidden shadow-2xs">
              <button onclick="updateModalQty(-1)" class="px-3 py-1 text-sm font-bold text-neutral-600 hover:bg-[#F5F2EB]">-</button>
              <span class="px-3 py-1 text-xs font-bold text-neutral-900">${state.modalQty}</span>
              <button onclick="updateModalQty(1)" class="px-3 py-1 text-sm font-bold text-neutral-600 hover:bg-[#F5F2EB]">+</button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <!-- Order WhatsApp -->
            <button 
              onclick="orderWhatsAppModal()"
              class="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.578 1.764.88 2.791.88 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.766-5.768-5.766zm9.969 5.766c0 5.405-4.394 9.8-9.8 9.8-1.734 0-3.355-.453-4.771-1.246l-5.429 1.422 1.447-5.295c-.879-1.477-1.378-3.186-1.378-4.981 0-5.406 4.394-9.8 9.8-9.8 5.405 0 9.8 4.394 9.8 9.8z"/>
              </svg>
              Pedir al WhatsApp
            </button>

            <!-- Add to Cart -->
            <button 
              onclick="addModalToCart()"
              class="w-full py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              Agregar a la Bolsa
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectModalPres(idx) {
  state.modalPresentationIdx = idx;
  renderModalContent();
}

function updateModalQty(delta) {
  state.modalQty = Math.max(1, state.modalQty + delta);
  renderModalContent();
}

// Add Item from Modal to Cart
function addModalToCart() {
  const p = state.modalPerfume;
  if (!p) return;

  const pres = p.presentations[state.modalPresentationIdx];
  const cartItemId = `${p.id}_${pres.size}`;

  const existing = state.cart.find(i => i.cartItemId === cartItemId);
  if (existing) {
    existing.quantity += state.modalQty;
  } else {
    state.cart.push({
      cartItemId,
      perfumeId: p.id,
      name: p.name,
      brand: p.brand,
      image: p.image,
      size: pres.size,
      price: pres.price,
      quantity: state.modalQty
    });
  }

  saveCart();
  updateHeaderCounters();
  renderCart();
  closeProductModal();
  showToast(`✨ ${p.name} (${pres.size}) agregado a tu bolsa`);
}

// Cart Storage & Badge Counters
function saveCart() {
  localStorage.setItem("astra_cart", JSON.stringify(state.cart));
}

function updateHeaderCounters() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count-badge").forEach(el => {
    el.textContent = totalItems;
    el.classList.toggle("hidden", totalItems === 0);
  });

  const wishCount = state.wishlist.length;
  document.querySelectorAll(".wishlist-count-badge").forEach(el => {
    el.textContent = wishCount;
    el.classList.toggle("hidden", wishCount === 0);
  });
}

// Render Cart Drawer
function renderCart() {
  const container = document.getElementById("cart-items-container");
  const emptyMsg = document.getElementById("cart-empty-message");
  const checkoutSection = document.getElementById("cart-checkout-section");
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");
  const shippingMeter = document.getElementById("free-shipping-meter");
  const shippingText = document.getElementById("free-shipping-text");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.classList.remove("hidden");
    if (checkoutSection) checkoutSection.classList.add("hidden");
    return;
  }

  if (emptyMsg) emptyMsg.classList.add("hidden");
  if (checkoutSection) checkoutSection.classList.remove("hidden");

  let subtotal = 0;

  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-3 py-3 border-b border-[#F0ECE4] last:border-none">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl bg-neutral-100 p-0.5 border border-[#EAE6DE]" />
        
        <div class="flex-1 min-w-0">
          <p class="text-[10px] uppercase font-bold text-[#A58039] truncate">${item.brand}</p>
          <h4 class="text-xs font-bold text-neutral-900 truncate">${item.name}</h4>
          <span class="inline-block px-2 py-0.5 mt-0.5 text-[10px] bg-neutral-100 rounded text-neutral-700 font-semibold">
            ${item.size}
          </span>
          <p class="text-xs font-bold text-neutral-900 mt-1">${formatCOP(item.price)}</p>
        </div>

        <div class="flex flex-col items-end gap-2">
          <div class="flex items-center border border-[#D5D0C2] rounded-md bg-white">
            <button onclick="changeCartQty('${item.cartItemId}', -1)" class="px-2 py-0.5 text-xs font-bold text-neutral-600 hover:bg-neutral-100">-</button>
            <span class="px-2 py-0.5 text-xs font-bold text-neutral-900">${item.quantity}</span>
            <button onclick="changeCartQty('${item.cartItemId}', 1)" class="px-2 py-0.5 text-xs font-bold text-neutral-600 hover:bg-neutral-100">+</button>
          </div>
          <button onclick="removeCartItem('${item.cartItemId}')" class="text-[11px] text-red-500 hover:text-red-700 font-medium">
            Quitar
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
  if (totalEl) totalEl.textContent = formatCOP(subtotal);

  // Free shipping progress calculation
  if (shippingMeter && shippingText) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingMeter.style.width = "100%";
      shippingText.innerHTML = `🎉 ¡Felicidades! Calificas para <strong>ENVÍO GRATIS</strong> en Colombia`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingMeter.style.width = `${pct}%`;
      shippingText.innerHTML = `Agrega <strong>${formatCOP(remaining)}</strong> más para obtener <strong>ENVÍO GRATIS</strong>`;
    }
  }
}

function changeCartQty(cartItemId, delta) {
  const item = state.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  }

  saveCart();
  updateHeaderCounters();
  renderCart();
}

function removeCartItem(cartItemId) {
  state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  updateHeaderCounters();
  renderCart();
}

// Drawer Controls
function openCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Wishlist Functionality
function toggleWishlist(perfumeId) {
  const idx = state.wishlist.indexOf(perfumeId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast("Fragancia removida de favoritos");
  } else {
    state.wishlist.push(perfumeId);
    showToast("✨ Agregada a tus favoritos");
  }

  localStorage.setItem("astra_wishlist", JSON.stringify(state.wishlist));
  renderCatalog();
  updateHeaderCounters();
  renderWishlist();
}

function openWishlist() {
  const d = document.getElementById("wishlist-drawer");
  if (d) {
    d.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeWishlist() {
  const d = document.getElementById("wishlist-drawer");
  if (d) {
    d.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function renderWishlist() {
  const container = document.getElementById("wishlist-items-container");
  const emptyMsg = document.getElementById("wishlist-empty-message");
  if (!container) return;

  const items = state.perfumes.filter(p => state.wishlist.includes(p.id));

  if (items.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.classList.remove("hidden");
    return;
  }

  if (emptyMsg) emptyMsg.classList.add("hidden");

  container.innerHTML = items.map(p => `
    <div class="flex items-center gap-3 py-3 border-b border-[#F0ECE4] last:border-none">
      <img src="${p.image}" alt="${p.name}" class="w-14 h-14 object-cover rounded-xl bg-neutral-100 p-0.5 border border-[#EAE6DE]" />
      <div class="flex-1 min-w-0">
        <p class="text-[10px] uppercase font-bold text-[#A58039] truncate">${p.brand}</p>
        <h4 class="text-xs font-bold text-neutral-900 truncate">${p.name}</h4>
        <p class="text-xs font-bold text-neutral-900 mt-0.5">Desde ${formatCOP(p.presentations[0].price)}</p>
      </div>
      <div class="flex flex-col gap-1.5">
        <button onclick="openProductModal('${p.id}'); closeWishlist();" class="px-2.5 py-1 text-xs bg-[#1A1A1A] text-white font-bold rounded-md hover:bg-neutral-800">
          Ver
        </button>
        <button onclick="toggleWishlist('${p.id}')" class="text-[10px] text-red-500 hover:text-red-700 text-center font-medium">
          Quitar
        </button>
      </div>
    </div>
  `).join('');
}

// Mobile Filter Controls
function openMobileFilters() {
  const d = document.getElementById("mobile-filters-drawer");
  if (d) {
    d.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileFilters() {
  const d = document.getElementById("mobile-filters-drawer");
  if (d) {
    d.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// WhatsApp Integration
function orderWhatsAppSingle(perfumeId, presIdx = 0) {
  const p = state.perfumes.find(item => item.id === perfumeId);
  if (!p) return;

  const pres = p.presentations[presIdx] || p.presentations[0];
  const priceStr = formatCOP(pres.price);

  const msg = `Hola *ASTRA PERFUMERIA* ✨\n\n` +
              `Quiero consultar la disponibilidad para ordenar:\n` +
              `🔹 *Perfume:* ${p.name}\n` +
              `🔹 *Casa:* ${p.brand}\n` +
              `🔹 *Presentación:* ${pres.size}\n` +
              `🔹 *Valor:* ${priceStr} COP\n\n` +
              `¿Tienen despacho inmediato para mi ciudad? ¡Gracias!`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function orderWhatsAppModal() {
  const p = state.modalPerfume;
  if (!p) return;

  const pres = p.presentations[state.modalPresentationIdx];
  const qty = state.modalQty;
  const total = formatCOP(pres.price * qty);

  const msg = `Hola *ASTRA PERFUMERIA* ✨\n\n` +
              `Deseo realizar el siguiente pedido:\n` +
              `🛍️ *Perfume:* ${p.name} (${p.brand})\n` +
              `📏 *Presentación:* ${pres.size}\n` +
              `🔢 *Cantidad:* ${qty}\n` +
              `💰 *Total:* ${total} COP\n\n` +
              `¿Me confirman los datos de pago y tiempo de entrega? ¡Gracias!`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) return;

  const nameInput = document.getElementById("checkout-name");
  const cityInput = document.getElementById("checkout-city");
  const paymentInput = document.getElementById("checkout-payment");

  const name = nameInput?.value.trim() || "Cliente";
  const city = cityInput?.value.trim() || "A coordinar";
  const payment = paymentInput?.value || "Bancolombia / Nequi";

  let subtotal = 0;
  let itemsText = "";

  state.cart.forEach((item, idx) => {
    const sub = item.price * item.quantity;
    subtotal += sub;
    itemsText += `${idx + 1}. *${item.name}* (${item.brand})\n` +
                 `   • Medida: ${item.size} x ${item.quantity}\n` +
                 `   • Subtotal: ${formatCOP(sub)} COP\n\n`;
  });

  const isFreeShip = subtotal >= FREE_SHIPPING_THRESHOLD;

  const msg = `🌟 *NUEVO PEDIDO - ASTRA PERFUMERIA* 🌟\n` +
              `═══════════════════════════\n` +
              `👤 *Cliente:* ${name}\n` +
              `📍 *Ciudad / Dirección:* ${city}\n` +
              `💳 *Método de Pago:* ${payment}\n` +
              `═══════════════════════════\n` +
              `🛍️ *PRODUCTOS SELECCIONADOS:*\n\n` +
              `${itemsText}` +
              `═══════════════════════════\n` +
              `💰 *VALOR TOTAL:* ${formatCOP(subtotal)} COP\n` +
              `🚚 *Envío:* ${isFreeShip ? '¡GRATIS POR SUPERAR $250.000!' : 'A cotizar según transportadora'}\n` +
              `═══════════════════════════\n\n` +
              `¿Podrían confirmarme los datos de cuenta o despacho? ¡Muchas gracias!`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openWhatsAppAdvisory() {
  const msg = `Hola *ASTRA PERFUMERIA* ✨ Me gustaría recibir asesoría olfativa personalizada para encontrar mi fragancia ideal.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// Toast Feedback
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold shadow-2xl flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-[#C5A059]"></span><span>${msg}</span>`;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }, 3000);
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
