export const MultiLanguage = async () => {
  try {
    console.log("Initializing Multi-language");

    const langButtons = document.querySelectorAll(".lang-btn");
    const textElements = document.querySelectorAll("[data-key]");
    let currentLang = localStorage.getItem("selectedLanguage") || "en";

    // Fetch language data
    const loadLanguageData = async () => {
      try {
        const response = await fetch("locales.json");
        return await response.json();
      } catch (error) {
        console.error("Error loading language data:", error);
      }
    };

    // Update text elements with the selected language data
    const changeLanguage = (language, languageData) => {
      textElements.forEach((el) => {
        const key = el.getAttribute("data-key");
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", languageData[language][key]);
        } else {
          el.innerHTML = languageData[language][key];
        }
      });

      // Update button active state
      langButtons.forEach((btn) =>
        btn.classList.toggle("active", btn.dataset.lang === language)
      );

      // Save the selected language
      localStorage.setItem("selectedLanguage", language);
      currentLang = language;
    };

    const languageData = await loadLanguageData();

    if (languageData) {
      changeLanguage(currentLang, languageData);

      langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const selectedLang = btn.getAttribute("data-lang");
          changeLanguage(selectedLang, languageData);
        });
      });
    }

    console.log("Multi-language ready");
    return "Multi-language ready";
  } catch (error) {
    console.error("Error initializing multi-language:", error);
    throw error;
  }
};
