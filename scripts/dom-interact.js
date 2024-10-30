export const InteractWithDom = async () => {
  try {
    console.log("Function is loading");

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    const allDropDownButtons = $$(".dropdownButton");
    const mainMenu = $(".main-menu");
    const mainMenuLinks = $$(".main-menu a");
    const burgerButton = $(".burger-icon");
    const closeMenuButton = $(".menu-close-icon");
    const toDownBtn = $("#toDownBtn");
    const toTopBtn = $("#toTopBtn");
    const nextSectionButtons = $$(".scrollToNextButtonMobile");
    const faqButtonsContainer = $("#faqButtons");
    const faqContentContainer = $("#faqContent");
    let currentCategoryIdx = 0;

    // Attach event listeners only if elements exist
    allDropDownButtons?.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("button is clicked");
        const chevronIcon = btn.querySelector(".chevronIcon");
        chevronIcon?.classList.toggle("rotate-180");
        btn.classList.toggle("active");
      });

      window.addEventListener("click", () => {
        const chevronIcon = btn.querySelector(".chevronIcon");
        chevronIcon?.classList.remove("rotate-180");
        btn.classList.remove("active");
      });
    });

    burgerButton?.addEventListener("click", (e) => {
      mainMenu?.classList.toggle("active");
      e.stopPropagation();
    });

    mainMenu?.addEventListener("click", (e) => e.stopPropagation());
    closeMenuButton?.addEventListener("click", () =>
      mainMenu?.classList.remove("active")
    );

    mainMenuLinks?.forEach((link) => {
      link.addEventListener("click", () =>
        mainMenu?.classList.remove("active")
      );
    });

    window.addEventListener("click", () =>
      mainMenu?.classList.remove("active")
    );

    toDownBtn?.addEventListener("click", () => {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: "smooth" });
    });

    toTopBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    nextSectionButtons?.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log("button clicked");
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      });
    });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.rahmatqr.uz/api/get_faq/"
        );
        const data = response.data;
        renderCategories(data);
        renderFAQContent(data[currentCategoryIdx]);
        addAnimation();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getTextByLang = (details, field) =>
      details?.[`${field}_${currentLang}`] || "";

    const renderCategories = (data) => {
      faqButtonsContainer.innerHTML = "";
      data.forEach((category, index) => {
        const button = document.createElement("button");
        button.className = `btn big ${
          currentCategoryIdx === index ? "dark" : "white"
        } select-btn`;
        button.innerText = getTextByLang(category, "name");

        button.addEventListener("click", () => {
          currentCategoryIdx = index;
          renderFAQContent(data[currentCategoryIdx]);
          updateButtons(data);
          addAnimation();
        });

        faqButtonsContainer.appendChild(button);
      });
    };

    const renderFAQContent = (category) => {
      faqContentContainer.innerHTML = "";
      if (!category?.items) return;

      category.items.forEach((details, index) => {
        const detailsElement = document.createElement("details");
        detailsElement.className =
          "py-[30px] px-[40px] max-md:p-0 max-md:border-b-[1px] max-md:border-b-[#88888880] max-md:pb-[15px]";

        detailsElement.innerHTML = `
          <summary class="flex justify-between items-center">
            <h3 class="max-md:hidden text-[16px]">0${index + 1}</h3>
            <div class="flex items-center justify-between w-[50%] max-md:w-full">
              <h1 class="text-[30px] max-w-[350px] max-lg:text-[25px] max-sm:text-[16px] max-sm:max-w-[200px]">
                ${getTextByLang(details, "question")}
              </h1>
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
              <p class="max-w-[430px] max-md:w-full max-sm:text-[12px]">
                ${getTextByLang(details, "answer")}
              </p>
            </div>
          </div>
        `;

        faqContentContainer.appendChild(detailsElement);
      });
    };

    const updateButtons = (data) => {
      faqButtonsContainer
        .querySelectorAll("button")
        .forEach((button, index) => {
          button.className = `btn big ${
            currentCategoryIdx === index ? "dark" : "white"
          }`;
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
              plusBtn.classList.toggle("block", true);
              plusBtn.classList.toggle("hidden", false);
              minusBtn.classList.toggle("block", false);
              minusBtn.classList.toggle("hidden", true);
            });
          } else {
            el.open = true;
            plusBtn.classList.toggle("block", false);
            plusBtn.classList.toggle("hidden", true);
            minusBtn.classList.toggle("block", true);
            minusBtn.classList.toggle("hidden", false);
            slideDown(content);
          }
        });
      });
    };

    const slideUp = (element, callback) => {
      element.style.height = element.offsetHeight + 45 + "px";
      element.offsetHeight; // Trigger reflow
      element.style.height = "0";
      element.style.paddingTop = "0";

      element.addEventListener("transitionend", function handler() {
        element.removeEventListener("transitionend", handler);
        callback();
      });
    };

    const slideDown = (element) => {
      element.style.height = "0";
      element.offsetHeight; // Trigger reflow

      const paddingTop = window.innerWidth <= 600 ? "20px" : "40px";
      element.style.height =
        element.scrollHeight + parseInt(paddingTop) + 5 + "px";
      element.style.paddingTop = paddingTop;

      element.addEventListener("transitionend", function handler() {
        element.removeEventListener("transitionend", handler);
        element.style.height = "auto";
      });
    };

    await fetchData();
    console.log("Function is ready");
  } catch (err) {
    console.error("Error from DOM interaction:", err);
    throw err;
  }
};
