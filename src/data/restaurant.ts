export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface Gallery {
  ambiance: string[];
  experience: string[];
  savoirFaire: string[];
}

export interface RestaurantData {
  id: string;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    address: string;
    instagram: string;
  };
  gallery: Gallery;
  categories: MenuCategory[];
}

export const restaurant: RestaurantData = {
  id: "ma-restaut",
  name: "Ma Restaut",
  slug: "ma-restaut",
  slogan: "Une table pensée pour se retrouver autour de bons produits et de cuissons maîtrisées.",
  description: "Un lieu de vie pour les déjeuners rapides et les longs dîners. Nous proposons une carte resserrée, où les viandes au grill côtoient les produits de la mer, sans autre ambition que celle du goût juste.",
  contact: {
    phone: "+229 01 68 76 59 27",
    whatsapp: "2290168765927", // Used for the API
    address: "Abomey Calavi Kpota",
    instagram: "@marestaut",
  },
  gallery: {
    ambiance: [
      "/images/restaurant/ambiance-maitre.jpg",
      "/images/restaurant/ambiance-extension1.jpg",
      "/images/restaurant/ambiance-extension2.jpg",
      "/images/restaurant/ambiance-extension3.jpg"
    ],
    experience: [
      "/images/restaurant/table-decord.jpg",
      "/images/restaurant/table-extension1.jpg",
      "/images/restaurant/table-extension2.jpg",
      "/images/restaurant/table-extension3.jpg"
    ],
    savoirFaire: [
      "/images/restaurant/savoir-faire-decord.jpg",
      "/images/restaurant/savoir-faire-extension1.jpg",
      "/images/restaurant/savoir-faire-extension2.jpg",
      "/images/restaurant/savoir-faire-extension3.jpg"
    ]
  },
  categories: [
    {
      id: "entrees-tapas",
      name: "Entrées & Tapas",
      description: "À partager en attendant la suite, entre petites bouchées croustillantes et assiettes de crudités.",
      items: [
        {
          id: "salade-cesar",
          name: "Salade César au Poulet Croustillant",
          description: "Laitue romaine, blanc de poulet pané, parmesan, croûtons dorés, sauce césar maison.",
          price: "5 500",
          image: "/images/restaurant/entrees-tapas-salade-cesar-au-poulet-croustillant.jpg",
          featured: true,
        },
        {
          id: "carpaccio-buf",
          name: "Carpaccio de Bœuf & Roquette",
          description: "Fines tranches de bœuf mariné à l'huile d'olive et citron, copeaux de parmesan, câpres.",
          price: "6 500",
          image: "/images/restaurant/entrees-tapas-carpaccio-de-buf-roquette.jpg",
        },
        {
          id: "bruschetta",
          name: "Bruschetta Tomates & Mozzarella",
          description: "Pain de campagne toasté à l'ail, concassé de tomates fraîches, basilic, mozzarella di bufala.",
          price: "4 500",
          image: "/images/restaurant/entrees-tapas-bruschetta-tomates-mozzarella.jpg",
        },
        {
          id: "calamars-frits",
          name: "Calamars Frits Sauce Tartare",
          description: "Anneaux d'encornets panés dorés et croustillants, quartiers de citron vert.",
          price: "5 000",
          image: "/images/restaurant/entrees-tapas-calamars-frits-sauce-tartare.jpg",
        },
        {
          id: "nems-samoussas",
          name: "Assortiment de Nems & Samoussas",
          description: "Rouleaux croustillants viande ou légumes, sauce aigre-douce pimentée.",
          price: "4 000",
          image: "/images/restaurant/entrees-tapas-assortiment-de-nems-samoussas.jpg",
        }
      ]
    },
    {
      id: "poissons-fruits-de-mer",
      name: "Poissons & Fruits de Mer",
      description: "Des produits de la mer travaillés simplement, relevés d'herbes fraîches ou passés au grill.",
      items: [
        {
          id: "saumon-roti",
          name: "Pavé de Saumon Rôti à l'Aneth",
          description: "Filet grillé unilatéral, sauce crème au citron vert, écrasé de pommes de terre.",
          price: "12 000",
          image: "/images/restaurant/poissons-fruits-de-mer-pave-de-saumon-roti-a-l-aneth.jpg",
          featured: true,
        },
        {
          id: "poisson-braise",
          name: "Poisson Braisé Entier",
          description: "Assaisonnement aux herbes et épices, cuit à la braise, bananes plantains frites.",
          price: "9 000",
          image: "/images/restaurant/poissons-fruits-de-mer-poisson-braise-entier.jpg",
          featured: true,
        },
        {
          id: "crevettes-geantes",
          name: "Crevettes Géantes Sautées à l'Ail & Persil",
          description: "Grosses gambas revenues au beurre d'ail, piment doux et persil frais.",
          price: "14 000",
          image: "/images/restaurant/poissons-fruits-de-mer-crevettes-geantes-sautees-a-l-ail-persil.jpg",
        },
        {
          id: "brochettes-lotte",
          name: "Brochettes de Lotte ou Thon Mi-Cuit",
          description: "Morceaux de poisson snackés, graines de sésame, réduction de sauce soja sucrée.",
          price: "10 500",
          image: "/images/restaurant/poissons-fruits-de-mer-brochettes-de-lotte-marinees-aux-herbes-de-la-garrigue.jpg",
        },
        {
          id: "marmite-pecheur",
          name: "Marmite du Pêcheur en Cassolette",
          description: "Mélange de calamars, moules, crevettes et morceaux de poisson dans un bouillon tomaté parfumé.",
          price: "15 000",
          image: "/images/restaurant/poissons-fruits-de-mer-marmite-du-pecheur-en-cassolette.jpg",
        }
      ]
    },
    {
      id: "viandes-volailles",
      name: "Viandes & Barbecues",
      description: "Des pièces épaisses et des volailles entières, marquées au fer ou longuement braisées.",
      items: [
        {
          id: "entrecote-grillee",
          name: "Entrecôte Grillée Sauce Poivre Vert",
          description: "Pièce de bœuf tendre saisie au grill, sauce onctueuse au poivre, frites maison.",
          price: "13 000",
          image: "/images/restaurant/viandes-volailles-entrecote-grillee-sauce-poivre-vert.jpg",
          featured: true,
        },
        {
          id: "demi-poulet",
          name: "Demi-Poulet Braisé à la Flamme",
          description: "Poulet mariné au gingembre, moutarde et épices locales, oignons confits.",
          price: "6 500",
          image: "/images/restaurant/viandes-volailles-demi-poulet-braise-a-la-flamme.jpg",
        },
        {
          id: "burger-gourmand",
          name: "Burger Gourmand Façon Bouchère",
          description: "Steak haché pur bœuf, cheddar affiné, bacon croustillant, oignons caramélisés.",
          price: "7 500",
          image: "/images/restaurant/viandes-volailles-burger-gourmand-facon-bouchere.jpg",
        },
        {
          id: "cotes-agneau",
          name: "Côtes d'Agneau Grillées au Romarin",
          description: "Côtelettes grillées à feu vif, fleur de sel, légumes de saison glacés.",
          price: "11 000",
          image: "/images/restaurant/viandes-volailles-cotes-d-agneau-grillees-au-romarin.jpg",
        },
        {
          id: "brochettes-buf",
          name: "Brochettes de Bœuf Mixtes",
          description: "Dés de bœuf tendre, poivrons multicolores et oignons marinés, grillés sur broche.",
          price: "7 000",
          image: "/images/restaurant/viandes-volailles-brochettes-de-buf-mixtes.jpg",
        }
      ]
    },
    {
      id: "plats-vegetariens",
      name: "Plats Végétariens & Pâtes",
      description: "Pour accompagner une viande ou se suffire à eux-mêmes : des légumes rôtis et des pâtes fraîches.",
      items: [
        {
          id: "risotto-cremeux",
          name: "Risotto Crémeux aux Champignons Sauvages",
          description: "Riz arborio lié au parmesan, poêlée de champignons de Paris et cèpes, huile de truffe.",
          price: "8 500",
          image: "/images/restaurant/plats-vegetariens-feculents-risotto-cremeux-aux-champignons-sauvages.jpg",
        },
        {
          id: "pates-linguine",
          name: "Pâtes Linguine Pesto & Tomates Confites",
          description: "Pâtes fraîches enrobées de pesto de basilic, pignons de pin, tomates cerises rôties.",
          price: "7 000",
          image: "/images/restaurant/plats-vegetariens-feculents-pates-linguine-pesto-tomates-confites.jpg",
        },
        {
          id: "wok-nouilles",
          name: "Wok de Nouilles aux Légumes Croquants",
          description: "Nouilles sautées à la sauce soja, carottes, brocolis, chou chinois et sésame.",
          price: "6 000",
          image: "/images/restaurant/plats-vegetariens-feculents-wok-de-nouilles-aux-legumes-croquants2.jpg",
        },
        {
          id: "burger-vegetarien",
          name: "Burger Végétarien au Galette de Légumes",
          description: "Steak de lentilles et patate douce, guacamole, pousses d'épinards.",
          price: "6 500",
          image: "/images/restaurant/plats-vegetariens-feculents-burger-vegetarien-au-galette-de-legumes.jpg",
        },
        {
          id: "gratin-dauphinois",
          name: "Gratin Dauphinois Traditionnel",
          description: "Fines rondelles de pommes de terre fondantes cuites à la crème et muscade.",
          price: "5 000",
          image: "/images/restaurant/plats-vegetariens-feculents-gratin-dauphinois-traditionnel.jpg",
        }
      ]
    },
    {
      id: "desserts-gateaux",
      name: "Desserts & Douceurs",
      description: "Des fruits de saison, du chocolat noir et quelques classiques de la pâtisserie pour clore le repas.",
      items: [
        {
          id: "moelleux-chocolat",
          name: "Moelleux au Chocolat Cœur Coulant",
          description: "Gâteau tiède au chocolat noir intense, servi avec une boule de glace vanille.",
          price: "4 000",
          image: "/images/restaurant/desserts-gateaux-moelleux-au-chocolat-cur-coulant.jpg",
          featured: true,
        },
        {
          id: "tiramisu",
          name: "Tiramisu Traditionnel au Café",
          description: "Biscuits cuillères imbibés d'expresso, crème onctueuse au mascarpone, cacao en poudre.",
          price: "4 500",
          image: "/images/restaurant/desserts-gateaux-tiramisu-traditionnel-au-cafe.jpg",
        },
        {
          id: "cheesecake",
          name: "Cheesecake Coulis de Fruits Rouges",
          description: "Base biscuitée croustillante, crème fondante au fromage frais, coulis de framboise.",
          price: "5 000",
          image: "/images/restaurant/desserts-gateaux-cheesecake-coulis-de-fruits-rouges.jpg",
        },
        {
          id: "creme-brulee",
          name: "Crème Brûlée à la Gousse de Vanille",
          description: "Crème onctueuse vanillée sous une fine coque de sucre roux caramélisée au chalumeau.",
          price: "4 000",
          image: "/images/restaurant/desserts-gateaux-creme-brulee-a-la-gousse-de-vanille.jpg",
        },
        {
          id: "assiette-fruits",
          name: "Assiette de Fruits Frais Découpés",
          description: "Sélection d'ananas victoria, mangue, pastèque et fruits de la passion.",
          price: "3 000",
          image: "/images/restaurant/desserts-gateaux-assiette-de-fruits-frais-decoupes.jpg",
        }
      ]
    },
    {
      id: "boissons-cocktails",
      name: "Cocktails & Signatures",
      description: "Des jus pressés minute, des infusions glacées et quelques mélanges maison pour accompagner les assiettes.",
      items: [
        {
          id: "virgin-mojito",
          name: "Virgin Mojito Menthe & Citron Vert",
          description: "Feuilles de menthe fraîche pilées, quartier de citron vert, sirop de canne, eau gazeuse.",
          price: "3 500",
          image: "/images/restaurant/boissons-cocktails-virgin-mojito-menthe-citron-vert.jpg",
        },
        {
          id: "cocktail-tropical",
          name: "Cocktail Signature Tropical",
          description: "Mélange de jus d'ananas, fruit de la passion, sirop de grenadine et trait de citron.",
          price: "4 000",
          image: "/images/restaurant/boissons-cocktails-cocktail-signature-tropical.jpg",
        },
        {
          id: "jus-fruits",
          name: "Jus de Fruits Pressés du Jour",
          description: "Orange fraîchement pressée ou jus maison d'ananas-gingembre.",
          price: "2 500",
          image: "/images/restaurant/boissons-cocktails-jus-de-fruits-presses-du-jour.jpg",
        },
        {
          id: "the-glace",
          name: "Thé Glacé Maison Pêche & Hibiscus",
          description: "Infusion fraîche parfumée, rondelles d'agrumes et glaçons.",
          price: "3 000",
          image: "/images/restaurant/boissons-cocktails-the-glace-maison-peche-hibiscus.jpg",
        },
        {
          id: "bissap-maison",
          name: "Bissap Maison Rafraîchissant",
          description: "Infusion de fleurs d'hibiscus rouge, menthe douce et vanille.",
          price: "1 500",
          image: "/images/restaurant/boissons-cocktails-bissap-maison-rafraichissant.jpg",
        }
      ]
    }
  ]
};
