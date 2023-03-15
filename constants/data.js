import images from "./images";

const drinks = [
  {
    title: "KIRIN BEER",
    price: "€4",
    tags: "5% ABV | 33CL",
  },
  {
    title: "PIJIU BEER",
    price: "€5",
    tags: "5.2% ABV | 33CL",
  },
  {
    title: "Homemade yuzu lemonade",
    price: "€5",
    tags: "PALCEHOLDER",
  },
  {
    title: "Ramune japanese lemonade",
    price: "€5",
    tags: "LEMON-LIME | 33CL",
  },
];

const food = [
  {
    title: "Karaage",
    price: "€11",
    tags: "JAPANESE FRIED CHICKEN",
  },
  {
    title: "Green curry mussels",
    price: "€11",
    tags: "LOCAL MUSSELS WITH GREEN CURRY SAUCE",
  },
  {
    title: "Dan dan mian",
    price: "€15",
    tags: "SPICY SICHUAN NOODLE WITH SESAME AND GROUND PORK | BROTH OR NO BROTH",
  },
  {
    title: "Wonton soup",
    price: "€11",
    tags: "PORK DUMPLINGS SERVED IN BROTH",
  },
  {
    title: "Pork belly Bao",
    price: "€13",
    tags: "BBQ PORK BELLY BUNS | 2 PCS",
  },
];

const desserts = [
  {
    title: "Bao Pork belly ",
    price: "€13",
    tags: "BBQ PORK BELLY BUNS | 2 PCS",
  },
  {
    title: "Bao Pork belly ",
    price: "€13",
    tags: "BBQ PORK BELLY BUNS | 2 PCS",
  },
  {
    title: "Bao Pork belly ",
    price: "€13",
    tags: "BBQ PORK BELLY BUNS | 2 PCS",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const menu_page = [
  {
    tag: "Food",
    title: "What To Eat",
    description:
      " Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.",
  },
  {
    tag: "Drink",
    title: "What to drink",
    description:
      " Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.",
  },
  {
    tag: "Dessert",
    title: "for your sweet tooth",
    description:
      " Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.",
  },
];

export default { drinks, food, desserts, awards, menu_page };
