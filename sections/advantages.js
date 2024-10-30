const html = (strings, ...values) => strings.raw[0];

export const AdvantagesSection = () => {
  return new Promise((resolve, reject) => {
    const advantages = document.getElementById("advantages");
    if (advantages) {
      advantages.innerHTML = html`
        <div class="bg-[#010101] h-full max-lg:hidden">
          <div class="px-[20px]">
            <div class="advantages-section">
              <div class="advantages-left relative">
                <!-- Add data-key for translation -->
                <p
                  class="section-title top-[60px] absolute"
                  data-key="advantagesTitle"
                >
                  Advantages
                </p>
                <div
                  class="w-full h-full flex justify-center items-center relative"
                >
                  <video
                    class="absolute w-[360px] h-[360px] !touch-none"
                    autoplay
                    muted
                    loop
                    playsinline
                    webkit-playsinline
                  >
                    <source
                      src="/assets/gifs/advantages-text-bg.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="flex items-center z-[2]">
                    <!-- Add data-key for translation -->
                    <h2
                      class="text-[50px] text-[#fff]"
                      data-key="advantagesFor"
                    >
                      For
                    </h2>
                    <div
                      class="flex flex-col ml-[20px] h-[65px] relative overflow-hidden"
                    >
                      <!-- Add data-key for dynamic business, employees, and customers text -->
                      <span
                        class="text-[#fff] text-[50px] relative"
                        data-key="forBusiness"
                        >business</span
                      >
                      <span
                        class="text-[#fff] text-[50px] relative"
                        data-key="forEmployees"
                        >employees</span
                      >
                      <span
                        class="text-[#fff] text-[50px] relative"
                        data-key="forCustomers"
                        >customers</span
                      >
                    </div>
                  </div>
                </div>
                <button
                  class="absolute bottom-[60px] active:scale-[.95]"
                  id="scrollToNextButton"
                >
                  <img src="./assets/icons/to-down-icon.svg" alt="to down" />
                </button>
              </div>

              <div class="advantages-right">
                <div class="advantages-details-wrapper">
                  <div
                    class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full my-[20px] relative overflow-hidden"
                  >
                    <!-- Add data-key for translation -->
                    <h2
                      class="text-[25px] text-center mt-[40px]"
                      data-key="advantage1"
                    >
                      Seamless <span class="text-[gray]">Integration</span> and
                      <br />
                      Fast Payments!
                    </h2>
                    <video
                      class="max-w-[483px] mt-[20px] !touch-none"
                      autoplay
                      muted
                      loop
                      playsinline
                      webkit-playsinline
                    >
                      <source
                        src="./assets/gifs/integrations.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div class="h-[146px]"></div>
                    <img
                      src="./assets/icons/showcase-left-illustrator.svg"
                      alt="down-illustrator"
                      class="absolute rotate-[-90deg] bottom-[-180px]"
                    />
                  </div>

                  <div
                    class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full my-[20px] relative overflow-hidden"
                  >
                    <!-- Add data-key for translation -->
                    <h2
                      class="text-[25px] text-center mt-[40px]"
                      data-key="advantage2"
                    >
                      Instant Tips, Feedback, and <br />
                      Analytics for <span class="text-[gray]">Waitstaff!</span>
                    </h2>
                    <video
                      class="max-w-[483px] mt-[20px] !touch-none"
                      autoplay
                      muted
                      loop
                      playsinline
                      webkit-playsinline
                    >
                      <source
                        src="./assets/gifs/analytics.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div class="h-[146px]"></div>
                    <img
                      src="./assets/icons/showcase-left-illustrator.svg"
                      alt="down-illustrator"
                      class="absolute rotate-[-90deg] bottom-[-180px]"
                    />
                  </div>

                  <div
                    class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full my-[20px] relative overflow-hidden"
                  >
                    <!-- Add data-key for translation -->
                    <h2
                      class="text-[25px] text-center mt-[40px]"
                      data-key="advantage3"
                    >
                      Easy and <span class="text-[gray]">Quick Payments</span>,
                      Tips, <br />
                      and Reviews with RAHMAT!
                    </h2>
                    <video
                      class="max-w-[483px] mt-[20px] !touch-none"
                      autoplay
                      muted
                      loop
                      playsinline
                      webkit-playsinline
                    >
                      <source
                        src="./assets/gifs/integration.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div class="h-[146px]"></div>
                    <img
                      src="./assets/icons/showcase-left-illustrator.svg"
                      alt="down-illustrator"
                      class="absolute rotate-[-90deg] bottom-[-180px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden mt-[150px]">
          <div class="advantages-scroll relative">
            <div
              class="advantages-item bg-[#010101] w-full h-[100vh] rounded-[16px] py-[20px]"
            >
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title" data-key="advantages">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                      data-key="forBusinessMobile"
                    >
                      For business
                    </h2>
                    <div class="flex justify-center">
                      <img
                        src="/assets/gifs/advantages-text-bg.gif"
                        alt="gif"
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh]"
                      />
                    </div>
                  </div>
                  <button
                    class="active:scale-[.95] scrollToNextButtonMobile"
                  ></button>
                </div>
              </div>
            </div>
            <div
              class="advantages-item advantages-details h-[100vh] bg-[#FFFFFF] rounded-[8px] w-full mt-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Seamless <span class="text-[gray]">Integration</span> <br />
                and Fast Payments!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/integrations.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
            <div
              class="advantages-item bg-[#010101] w-full h-[100vh] rounded-[16px] py-[20px]"
            >
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title" data-key="advantages">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                      data-key="forEmployeesMobile"
                    >
                      For employees
                    </h2>
                    <div class="flex justify-center">
                      <video
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh] !touch-none"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline
                      >
                        <source
                          src="./assets/gifs/advantages-text-bg.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <button class="active:scale-[.95] scrollToNextButtonMobile">
                    <img src="./assets/icons/to-down-icon.svg" alt="to down" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="advantages-item advantages-details h-[100vh] bg-[#FFFFFF] rounded-[8px] w-full mt-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Instant Tips, Feedback, and Analytics for
                <span class="text-[gray]">Waitstaff</span>!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/analytics.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
            <div
              class="advantages-item bg-[#010101] w-full rounded-[16px] py-[20px]"
            >
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title" data-key="advantages">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                      data-key="forCustomersMobile"
                    >
                      For customers
                    </h2>
                    <div class="flex justify-center">
                      <video
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh] !touch-none"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline
                      >
                        <source
                          src="./assets/gifs/advantages-text-bg.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <button class="active:scale-[.95] scrollToNextButtonMobile">
                    <img src="./assets/icons/to-down-icon.svg" alt="to down" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="advantages-item advantages-details h-[100vh] bg-[#FFFFFF] rounded-[8px] w-full my-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Easy and <span class="text-[gray]">Quick Payments</span>, Tips,
                and Reviews with RAHMAT!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/integration.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
          </div>
        </div>
        <div class="hidden max-lg:block mt-[200px]">
          <div class="relative advantages-1">
            <div class="bg-[#010101] w-full rounded-[16px] py-[20px]">
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                    >
                      For business
                    </h2>
                    <div class="flex justify-center">
                      <img
                        src="/assets/gifs/advantages-text-bg.gif"
                        alt="gif"
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh]"
                      />
                    </div>
                  </div>
                  <button
                    class="active:scale-[.95] scrollToNextButtonMobile"
                  ></button>
                </div>
              </div>
            </div>
            <div
              class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full mt-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Seamless <span class="text-[gray]">Integration</span> <br />
                and Fast Payments!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/integrations.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
          </div>

          <div class="relative advantages-2">
            <div class="bg-[#010101] w-full rounded-[16px] py-[20px]">
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                    >
                      For employees
                    </h2>
                    <div class="flex justify-center">
                      <video
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh] !touch-none"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline
                      >
                        <source
                          src="./assets/gifs/advantages-text-bg.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <button class="active:scale-[.95] scrollToNextButtonMobile">
                    <img src="./assets/icons/to-down-icon.svg" alt="to down" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full mt-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Instant Tips, Feedback, and Analytics for
                <span class="text-[gray]">Waitstaff</span>!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/analytics.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
          </div>

          <div class="relative advantages-3">
            <div class="bg-[#010101] w-full rounded-[16px] py-[20px]">
              <div class="container">
                <div
                  class="flex justify-between items-center flex-col h-[90vh]"
                >
                  <p class="section-title">Advantages</p>
                  <div class="w-full">
                    <h2
                      class="text-[30px] text-[#fff] z-[2] relative text-center"
                    >
                      For customers
                    </h2>
                    <div class="flex justify-center">
                      <video
                        class="absolute max-w-[360px] max-sm:w-full h-[250px] object-cover top-[30vh] !touch-none"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline
                      >
                        <source
                          src="./assets/gifs/advantages-text-bg.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <button class="active:scale-[.95] scrollToNextButtonMobile">
                    <img src="./assets/icons/to-down-icon.svg" alt="to down" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="advantages-details bg-[#FFFFFF] rounded-[8px] w-full my-[20px] relative"
            >
              <h2
                class="text-[25px] text-center mt-[40px] max-w-[250px]"
                data-key="advantage1"
              >
                Easy and <span class="text-[gray]">Quick Payments</span>, Tips,
                and Reviews with RAHMAT!
              </h2>
              <video
                class="max-w-[350px] mt-[20px] !touch-none"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/gifs/integration.mp4" type="video/mp4" />
              </video>
              <div class="h-[146px]"></div>
              <img
                src="./assets/icons/showcase-bottom-illustrator.svg"
                alt="down-illustrator"
                class="absolute bottom-0"
              />
            </div>
          </div>
        </div>
      `;
      resolve("advantages loaded");
    } else {
      reject(new Error("advantages element not found!"));
    }
  });
};

/**

 */
