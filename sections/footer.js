const html = (strings, ...values) => strings.raw[0];

export const FooterSection = () => {
  return new Promise((resolve, reject) => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.innerHTML = html`
        <div class="footer">
          <div class="bg-[#F5F5F5] w-full text-center">
            <div class="text-center bg-[#F5F5F5] p-[20px] inline-block">
              <h3
                class="font-[600] writing-effect max-md:hidden"
                data-key="footerSecurityText"
              >
                All transactions are secure and processed swiftly with RAHMAT's
                payment system.
              </h3>
              <h3
                class="font-[600] hidden max-md:block"
                data-key="footerSecurityText"
              >
                All transactions are secure and processed swiftly with RAHMAT's
                payment system.
              </h3>
            </div>
          </div>
          <div class="container">
            <div
              class="relative py-[60px] border-b-[#D8D9D8] border-b-[1px] flex justify-between max-sm:flex-col max-sm:gap-[23px]"
            >
              <div class="flex justify-between flex-col">
                <img src="./assets/logo.svg" alt="logo" class="w-[90px]" />
                <div class="max-sm:hidden">
                  <p
                    class="text-[25px] text-[#010101] tracking-[-1px]"
                    data-key="fastText"
                  >
                    Fast.
                  </p>
                  <p
                    class="text-[25px] text-[#888888] tracking-[-1px]"
                    data-key="noRegistrationsText"
                  >
                    No registrations.
                  </p>
                  <p
                    class="text-[25px] text-[#888888] tracking-[-1px]"
                    data-key="noAppsText"
                  >
                    No apps. Instantly.
                  </p>
                </div>
              </div>
              <div
                class="grid grid-cols-4 w-[70%] max-lg:grid-cols-2 max-[355px]:grid-cols-1 max-lg:gap-y-[10px] gap-y-[30px] max-[355px]:gap-[40px] max-sm:w-full"
              >
                <div>
                  <p
                    class="font-[500] text-[#010101] mb-[20px]"
                    data-key="companyTitle"
                  >
                    Company
                  </p>
                  <div class="grid gap-[12px]">
                    <a
                      href="#how-it-works"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="howItWorksLink"
                      >How it works</a
                    >
                    <a
                      href="#advantages"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="advantagesLink"
                      >Advantages</a
                    >
                    <a
                      href="#pos-systems"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="posSystemsLink"
                      >POS-Systems</a
                    >
                    <a
                      href="#partners"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="partnersLink"
                      >Partners</a
                    >
                    <a
                      href="#faq"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="faqLink"
                      >FAQ</a
                    >
                  </div>
                </div>
                <div>
                  <p
                    class="font-[500] text-[#010101] mb-[20px]"
                    data-key="rahmatBusinessTitle"
                  >
                    Rahmat business
                  </p>
                  <div class="grid gap-[12px]">
                    <a
                      href="#how-it-works"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="howItWorksLink2"
                      >How it works</a
                    >
                    <a
                      href="#advantages"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="advantagesLink2"
                      >Advantages</a
                    >
                    <a
                      href="#pos-systems"
                      class="text-[16px] text-[#010101] hover:underline w-max"
                      data-key="posSystemsLink2"
                      >POS-Systems</a
                    >
                  </div>
                </div>
                <div>
                  <p
                    class="font-[500] text-[#010101] mb-[20px]"
                    data-key="contactsTitle"
                  >
                    Contacts
                  </p>
                  <div class="grid gap-[12px]">
                    <a
                      href="#"
                      class="text-[16px] text-[#010101] flex items-center gap-[3px]"
                    >
                      <img src="./assets/icons/phone-icon.svg" alt="phone" />
                      <span>+998 55 506 01 01</span>
                    </a>
                    <a href="#" class="text-[16px] flex items-center gap-[3px]">
                      <img
                        src="./assets/icons/telegram-icon.svg"
                        alt="telegram"
                      />
                      <span class="text-[#F05039]" data-key="telegramLink"
                        >Telegram Bot</span
                      >
                    </a>
                  </div>
                </div>
                <div>
                  <p
                    class="font-[500] text-[#010101] mb-[20px]"
                    data-key="socialsTitle"
                  >
                    Socials
                  </p>
                  <div class="flex items-center gap-[20px] header-social-links">
                    <div>
                      <button class="icon-btn white">
                        <img
                          src="./assets/icons/facebook-icon.svg"
                          alt="Facebook"
                        />
                      </button>
                    </div>
                    <div>
                      <button class="icon-btn white">
                        <img
                          src="./assets/icons/twitter-icon.svg"
                          alt="Twitter"
                        />
                      </button>
                    </div>
                    <div>
                      <button class="icon-btn white">
                        <img
                          src="./assets/icons/instagram-icon.svg"
                          alt="Instagram"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center gap-[8px] explore-btn absolute right-[0] bottom-[60px]"
              >
                <span
                  class="text-[16px] font-[500] max-sm:hidden"
                  data-key="explore"
                  >To the top</span
                >
                <button class="icon-btn scroll-down-button" id="toTopBtn">
                  <img src="./assets/icons/arrow-top-icon.svg" alt="Arrow Up" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3
              class="font-[600] bg-[#F5F5F5 text-center p-[20px]"
              data-key="footerCopyright"
            >
              © 2024 Rahmatpay. All rights reserved.
            </h3>
          </div>
        </div>
      `;
      resolve("footer loaded");
    } else {
      reject(new Error("footer element not found!"));
    }
  });
};
