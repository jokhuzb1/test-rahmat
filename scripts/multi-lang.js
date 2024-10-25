async function loadLanguageData() {
  try {
    const response = await fetch('locales.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading language data:', error);
  }
}

const langButtons = document.querySelectorAll('.lang-btn');
const textElements = document.querySelectorAll('[data-key]');

var currentLang = localStorage.getItem('selectedLanguage');

function changeLanguage(language, languageData) {
  textElements.forEach(el => {
    const key = el.getAttribute('data-key');

    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.setAttribute('placeholder', languageData[language][key]);
    } else {
      el.innerHTML = languageData[language][key];
    }
  });

  langButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  const activeButton = document.querySelector(`.lang-btn[data-lang="${language}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  localStorage.setItem('selectedLanguage', language);

  currentLang = language

  applyGSAPAnimations()

  fetchData()
}

loadLanguageData().then(languageData => {
  // Get the saved language from localStorage or default to 'en'
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLanguage, languageData);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      changeLanguage(selectedLang, languageData);
    });
  });
});