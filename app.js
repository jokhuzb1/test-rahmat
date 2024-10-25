const allDropDownButtons = document.querySelectorAll('.dropdownButton');
const mainMenu = document.querySelector('.main-menu');
const mainMenuLinks = document.querySelectorAll('.main-menu a');
const burgerButton = document.querySelector('.burger-icon');
const closeMenuButton = document.querySelector('.menu-close-icon');
const toDownBtn = document.querySelector('#toDownBtn');
const toTopBtn = document.querySelector('#toTopBtn');
const FAQSection = document.querySelector(".faq-mapped-data")
const nextSectionButtons = document.querySelectorAll(".scrollToNextButtonMobile")

function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

allDropDownButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    const chevronIcon = btn.querySelector(".chevronIcon");
    chevronIcon.classList.toggle('rotate-180');
    btn.classList.toggle('active')
  })
  //
  window.addEventListener("click", () => {
    const chevronIcon = btn.querySelector(".chevronIcon");
    chevronIcon.classList.remove('rotate-180');
    btn.classList.remove("active")
  })
})

burgerButton.addEventListener("click", (e) => {
  mainMenu.classList.toggle("active")
  e.stopPropagation()
})

mainMenu.addEventListener("click", (e) => {
  e.stopPropagation()
})

closeMenuButton.addEventListener("click", () => {
  mainMenu.classList.remove("active")
})

mainMenuLinks.forEach(links => {
  links.addEventListener(('click'), () => {
    mainMenu.classList.remove("active")
  })
})

window.addEventListener("click", () => {
  mainMenu.classList.remove('active')
})

toDownBtn.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight * 1.5,
    behavior: 'smooth'
  });
})

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

nextSectionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("button clicked")
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  })
})

const faqButtonsContainer = document.getElementById('faqButtons');
const faqContentContainer = document.getElementById('faqContent');
let currentCategoryIdx = 0;

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.rahmatqr.uz/api/get_faq/');
    const data = response.data;
    renderCategories(data);
    renderFAQContent(data[currentCategoryIdx]);
    addAnimation();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const nameText = (details) => {
  if (currentLang === 'en') {
    return details.name_en
  }
  if (currentLang === 'ru') {
    return details.name_ru
  }
  if (currentLang === 'uz') {
    return details.name_uz
  }
}

const renderCategories = (data) => {
  faqButtonsContainer.innerHTML = '';
  data.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = currentCategoryIdx === index ? 'btn big dark select-btn' : 'btn big white select-btn';
    button.innerText = nameText(category);
    button.addEventListener('click', () => {
      currentCategoryIdx = index;
      renderFAQContent(data[currentCategoryIdx]);
      updateButtons(data);
      addAnimation();
    });
    faqButtonsContainer.appendChild(button);
  });
};

const questionText = (details) => {
  if (currentLang === 'en') {
    return details.question_en
  }
  if (currentLang === 'ru') {
    return details.question_ru
  }
  if (currentLang === 'uz') {
    return details.question_uz
  }
}

const answerText = (details) => {
  if (currentLang === 'en') {
    return details.answer_en
  }
  if (currentLang === 'ru') {
    return details.answer_ru
  }
  if (currentLang === 'uz') {
    return details.answer_uz
  }
}

const renderFAQContent = (category) => {
  faqContentContainer.innerHTML = '';
  if (!category || !category.items) return;

  category.items.forEach((details, index) => {
    const detailsElement = document.createElement('details');
    detailsElement.className = 'py-[30px] px-[40px] max-md:p-0 max-md:border-b-[1px] max-md:border-b-[#88888880] max-md:pb-[15px]';

    detailsElement.innerHTML = `
            <summary class="flex justify-between items-center">
              <h3 class="max-md:hidden text-[16px]">0${index + 1}</h3>
              <div class="flex items-center justify-between w-[50%] max-md:w-full">
                <h1 class="text-[30px] max-w-[350px] max-lg:text-[25px] max-sm:text-[16px] max-sm:max-w-[200px]">${questionText(details)}</h1>
               <div>
                  <button class="icon-btn white plus">
                    <img src="./assets/icons/plus-icon.svg" alt="plus" />
                  </button>
                   <button class="icon-btn hidden minus">
                      <img src="./assets/icons/minus-icon.svg" alt="minus" />
                    </button>
                </div>
              </div>
            </summary>
            <div class="content flex justify-between items-center">
              <div class="max-md:hidden"></div>
              <div class="w-[50%] max-md:w-full">
                <p class="max-w-[430px] max-md:w-full max-sm:text-[12px]">${answerText(details)}</p>
              </div>
            </div>
          `;

    faqContentContainer.appendChild(detailsElement);
  });
};

const updateButtons = (data) => {
  const buttons = faqButtonsContainer.querySelectorAll('button');
  buttons.forEach((button, index) => {
    button.className = currentCategoryIdx === index ? 'btn big dark' : 'btn big white';
  });
};

const addAnimation = () => {
  document.querySelectorAll("details").forEach((el) => {
    const summary = el.querySelector("summary");
    const content = el.querySelector(".content");
    const plusBtn = el.querySelector(".plus");
    const minusBtn = el.querySelector(".minus");

    summary.addEventListener("click", (e) => {
      e.preventDefault();
      if (el.open) {
        slideUp(content, () => {
          el.open = false;
          plusBtn.classList.add('block');
          plusBtn.classList.remove('hidden');
          minusBtn.classList.add('hidden');
          minusBtn.classList.remove('block');
        });
      } else {
        el.open = true;
        plusBtn.classList.add('hidden');
        plusBtn.classList.remove('block');
        minusBtn.classList.add('block');
        minusBtn.classList.remove('hidden');
        slideDown(content);
      }
    });
  });
};

const slideUp = (element, callback) => {
  const height = element.offsetHeight + 45;
  element.style.height = height + "px";
  element.offsetHeight;
  element.style.height = "0";
  element.style.paddingTop = "0";
  element.addEventListener("transitionend", function handler() {
    element.removeEventListener("transitionend", handler);
    callback();
  });
};

const slideDown = (element) => {
  element.style.height = "0";
  element.offsetHeight;

  const viewportWidth = window.innerWidth;
  const paddingTop = viewportWidth <= 600 ? "20px" : "40px";
  const height = element.scrollHeight + (parseInt(paddingTop) + 5);
  element.style.height = height + "px";
  element.style.paddingTop = paddingTop;

  element.addEventListener("transitionend", function handler() {
    element.removeEventListener("transitionend", handler);
    element.style.height = "auto";
    element.style.paddingTop = paddingTop;
  });
};

fetchData();

