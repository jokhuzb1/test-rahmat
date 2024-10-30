const html = (strings, ...values) => strings.raw[0];

export const HeaderSection = () => {
  return new Promise((resolve, reject) => {
    const header = document.getElementById("header");

    if (header) {
      header.innerHTML = html`
        <div class="max-lg:hidden">
          <div class="absolute left-0 top-[280px] w-max flex items-center">
            <img
              src="./assets/icons/header-img-left-1.svg"
              alt="Illustration"
              class="header-img-1"
            />
            <img
              src="./assets/icons/header-img-left-2.svg"
              alt="Illustration"
              class="header-img-2"
            />
            <img
              src="./assets/icons/header-img-left-3.svg"
              alt="Illustration"
              class="header-img-3"
            />
          </div>
        </div>
        <div class="container showcase-section relative">
          <div
            class="flex items-center justify-between flex-col"
            style="height: 100vh"
          >
            <div
              class="flex items-center justify-end w-full max-lg:flex-col max-lg:justify-center"
              style="height: 100%"
            >
              <h1
                class="text-[58px] max-w-[474px] mr-[200px] z-[2] header-text max-lg:text-center max-lg:max-w-full max-lg:mr-0 max-md:text-[40px] max-sm:text-[30px]"
                data-key="headerTitle"
              >
                Pay the Bill, Leave Reviews and Tips via QR Code Now!
              </h1>
              <div class="hidden max-lg:block">
                <a href="#contact-us">
                  <button
                    class="btn big pop-up-animation relative top-[40px] max-sm:top-[80px]"
                    data-key="becomePartner"
                  >
                    Become a partner
                  </button>
                </a>
                <div class="flex justify-center">
                  <img
                    src="./assets/icons/showcase-bottom-illustrator.svg"
                    alt="showcase"
                    class="absolute bottom-0"
                  />
                </div>
              </div>
            </div>
            <div
              class="flex justify-between items-center w-full mb-[30px] max-lg:justify-end"
            >
              <div
                class="flex items-center gap-[20px] header-social-links max-lg:hidden"
              >
                <button class="icon-btn white">
                  <img src="./assets/icons/facebook-icon.svg" alt="Facebook" />
                </button>
                <button class="icon-btn white">
                  <img src="./assets/icons/twitter-icon.svg" alt="Twitter" />
                </button>
                <button class="icon-btn white">
                  <img
                    src="./assets/icons/instagram-icon.svg"
                    alt="Instagram"
                  />
                </button>
              </div>
              <a href="#contact-us">
                <button
                  class="btn big dark contact-us-btn max-lg:hidden"
                  data-key="contactUs"
                >
                  Contact us
                </button>
              </a>
              <div class="flex items-center gap-[8px] explore-btn">
                <span
                  class="text-[16px] font-[500] max-sm:hidden"
                  data-key="explore"
                  >Explore</span
                >
                <button class="icon-btn scroll-down-button" id="toDownBtn">
                  <img
                    src="./assets/icons/arrow-down-icon.svg"
                    alt="Arrow Down"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("Header loaded");
    } else {
      reject(new Error("Header element not found!"));
    }
  });
};
