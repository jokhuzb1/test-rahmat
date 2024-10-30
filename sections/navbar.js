const html = (strings, ...values) => strings.raw[0];

export const NavbarSection = () => {
  return new Promise((resolve, reject) => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.innerHTML = html`
        <div class="absolute w-full top-0 left-0 navbar z-[200] ">
          <div class="container">
            <div
              class="flex justify-between items-start my-[20px] max-md:mt-[20px]"
            >
              <img src="/assets/logo.svg" alt="Logo" class="logo" />
              <div class="flex items-start">
                <div class="nav-links-drop-down max-lg:!hidden">
                  <button
                    class="dropdown-button dropdownButton max-lg:hidden"
                    data-key="projects"
                  >
                    Projects.
                    <img
                      src="/assets/icons/chevron-down-icon.svg"
                      alt="Chevron Down"
                      class="chevron chevronIcon"
                    />
                  </button>
                </div>
                <div class="relative p-2">
                  <!-- Dropdown toggle button -->
                  <button
                    id="dropdownToggle"
                    class="text-[18px] leading-[26px]  max-lg:!block  dropdown-button dropdownButton proj"
                  >
                    <span>Projects</span>
                    <img
                      src="/assets/icons/chevron-down-icon.svg"
                      alt="Chevron Down"
                      class="chevron chevronIcon"
                    />
                  </button>

                  <!-- Dropdown menu -->
                  <ul
                    id="dropdownMenu"
                    class="nav-links mr-[134px] max-lg:!hidden absolute bg-white shadow-lg rounded-md py-2 hidden "
                  >
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-4  text-[18px] leading-[22px] hover:bg-gray-100 lang-btn"
                        data-key="payments"
                      >
                        Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-4  text-[18px] leading-[22px] hover:bg-gray-100"
                        data-key="onlineMenu"
                      >
                        Online Menu
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-4  text-[18px] leading-[22px] hover:bg-gray-100"
                        data-key="delivery"
                      >
                        Delivery
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- <ul class="nav-links mr-[134px] max-lg:!hidden">
                  <li>
                    <a
                      href="/"
                      class="text-[#888888] text-[14px] leading-[18px] active"
                      data-key="projects"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="text-[#888888] text-[14px] leading-[18px]"
                      data-key="payments"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="text-[#888888] text-[14px] leading-[18px]"
                      data-key="onlineMenu"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="text-[#888888] text-[14px] leading-[18px]"
                      data-key="delivery"
                    ></a>
                  </li>
                </ul> -->
                <div
                  class="flex items-center gap-[20px] mr-[60px] nav-buttons max-lg:hidden"
                >
                  <button class="dropdown-button dropdownButton">
                    <span data-key="rahmatBusiness">Rahmat business</span>
                    <img
                      src="/assets/icons/chevron-down-icon.svg"
                      alt="Chevron Down"
                      class="chevron chevronIcon"
                    />
                  </button>
                  <a href="#contact-us">
                    <button class="btn" data-key="becomePartner">
                      Become a partner
                    </button>
                  </a>
                </div>
                <div class="flex items-center gap-[20px]">
                  <button class="dropdown-button dropdownButton relative">
                    <span data-key="language">En</span>
                    <img
                      src="/assets/icons/chevron-down-icon.svg"
                      alt="Chevron Down"
                      class="chevron chevronIcon"
                    />
                    <div>
                      <span class="lang-btn" data-lang="en">English</span>
                      <span class="lang-btn" data-lang="ru">Русский</span>
                      <span class="lang-btn" data-lang="uz">O'zbekcha</span>
                    </div>
                  </button>
                  <button class="burger-icon">
                    <img
                      src="/assets/icons/burger-icon.svg"
                      alt="Burger Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-menu overflow-hidden fixed z-[200]">
          <div class="flex items-center justify-between">
            <h2
              class="text-[24px] text-[#010101] max-sm:text-[20px]"
              data-key="menu"
            >
              Menu
            </h2>
            <button class="menu-close-icon">
              <img src="./assets/icons/close-icon.svg" alt="img" />
            </button>
          </div>
          <div class="menu-links flex flex-col gap-[2px] mt-[30px]">
            <a
              href="#how-it-works"
              class="flex hover:text-[#F05039] transition items-center gap-[20px]"
            >
              <span class="text-[16px] relative top-[-6px] max-sm:top-[1px]"
                >01</span
              >
              <span class="text-[40px] max-sm:text-[25px]" data-key="howItWorks"
                >How it works</span
              >
            </a>
            <a
              href="#advantages"
              class="flex hover:text-[#F05039] transition items-center gap-[20px]"
            >
              <span class="text-[16px] relative top-[-6px] max-sm:top-[1px]"
                >02</span
              >
              <span class="text-[40px] max-sm:text-[25px]" data-key="advantages"
                >Advantages</span
              >
            </a>
            <a
              href="#pos-systems"
              class="flex hover:text-[#F05039] transition items-center gap-[20px]"
            >
              <span class="text-[16px] relative top-[-6px] max-sm:top-[1px]"
                >03</span
              >
              <span class="text-[40px] max-sm:text-[25px]" data-key="posSystems"
                >POS-Systems</span
              >
            </a>
            <a
              href="#partners"
              class="flex hover:text-[#F05039] transition items-center gap-[20px]"
            >
              <span class="text-[16px] relative top-[-6px] max-sm:top-[1px]"
                >04</span
              >
              <span class="text-[40px] max-sm:text-[25px]" data-key="partners"
                >Partners</span
              >
            </a>
            <a
              href="#faq"
              class="flex hover:text-[#F05039] transition items-center gap-[20px]"
            >
              <span class="text-[16px] relative top-[-6px] max-sm:top-[1px]"
                >05</span
              >
              <span class="text-[40px] max-sm:text-[25px]" data-key="faq"
                >FAQ</span
              >
            </a>
          </div>
          <h3
            class="text-[40px] max-sm:text-[20px] pl-[36px] max-sm:pl-0 mt-[36px] pop-up-animation"
            data-key="rahmatBusiness"
          >
            Rahmat business
          </h3>
          <div
            class="flex items-center gap-[32px] pl-[36px] max-sm:pl-0 mt-[20px] question-links"
          >
            <a
              href="#how-it-works"
              class="text-[24px] max-sm:text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="howItWorks"
              >How it works</a
            >
            <a
              href="#advantages"
              class="text-[24px] max-sm:text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="advantages"
              >Advantages</a
            >
            <a
              href="#faq"
              class="text-[24px] max-sm:text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="faq"
              >FAQ</a
            >
          </div>
          <div
            class="flex justify-between items-center mt-[50px] max-sm:flex-col max-sm:items-start max-sm:gap-[20px] max-sm:mt-[40px]"
          >
            <a href="#contact-us">
              <button class="btn big pop-up-animation" data-key="becomePartner">
                Become a partner
              </button>
            </a>
            <div class="flex items-center gap-[20px] social-links">
              <button class="icon-btn white">
                <img src="./assets/icons/facebook-icon.svg" alt="Facebook" />
              </button>
              <button class="icon-btn white">
                <img src="./assets/icons/twitter-icon.svg" alt="Twitter" />
              </button>
              <button class="icon-btn white">
                <img src="./assets/icons/instagram-icon.svg" alt="Instagram" />
              </button>
            </div>
          </div>
        </div>
      `;
      const dropdownToggle = document.getElementById("dropdownToggle");
      const dropdownMenu = document.getElementById("dropdownMenu");

      if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", () => {
          dropdownMenu.classList.toggle("hidden");
        });
      }
      resolve("Navbar loaded");
    } else {
      reject(new Error("Navbar element not found!"));
    }
  });
};
