
const translations = {
  en: {
    home: "Home",
    crops: "Crop Information",
    marketplace: "Farmer Marketplace",
    weather: "Live Weather",
    calculator: "Farm Calculator",
    machinery: "Machinery Services",
    suppliers: "Input Suppliers",
    welcome: "Connecting Farmers, Empowering Agriculture.",
    explore: "Explore Services",
    learnMore: "Learn More",
    backHome: "Back to Home",
    language: "ଓଡ଼ିଆ"
  },

  or: {
    home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
    crops: "ଫସଲ ସୂଚନା",
    marketplace: "କୃଷକ ବଜାର",
    weather: "ପାଣିପାଗ ସୂଚନା",
    calculator: "କୃଷି କାଲକୁଲେଟର",
    machinery: "କୃଷି ଯନ୍ତ୍ରପାତି ସେବା",
    suppliers: "କୃଷି ସାମଗ୍ରୀ ଯୋଗାଣକାରୀ",
    welcome: "କୃଷକଙ୍କୁ ଯୋଡ଼ିବା, କୃଷିକୁ ସଶକ୍ତ କରିବା।",
    explore: "ସେବାଗୁଡ଼ିକ ଦେଖନ୍ତୁ",
    learnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
    backHome: "ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ",
    language: "English"
  }
};

function getLanguage() {
  return localStorage.getItem("krishi-language") || "en";
}

function setLanguage(language) {
  if (!translations[language]) return;

  localStorage.setItem("krishi-language", language);
  applyLanguage();
}

function toggleLanguage() {
  const current = getLanguage();
  setLanguage(current === "en" ? "or" : "en");
}

function applyLanguage() {
  const language = getLanguage();
  const words = translations[language];

  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.dataset.translate;

    if (words[key]) {
      element.textContent = words[key];
    }
  });

  document.querySelectorAll("[data-language-button]").forEach(button => {
    button.textContent = words.language;
  });

  document.documentElement.lang = language === "or" ? "or" : "en";
}

document.addEventListener("DOMContentLoaded", applyLanguage);
