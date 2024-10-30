const html = (strings, ...values) => strings.raw[0];

export const PartnersSection = () => {
  return new Promise((resolve, reject) => {
    const partners = document.getElementById("partners");

    if (partners) {
      partners.innerHTML = html`
        <div class="container relative partners-section-container my-7">
          <div class="partners-section">
            <div class="min-h-[270vh]">
              <div class="partners-images">
                <div
                  class="partners-card animated-card animated-card-1 absolute z-[3]"
                >
                  <img
                    src="./assets/partners/img_1.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-2 absolute"
                >
                  <img
                    src="./assets/partners/img_2.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-3 absolute"
                >
                  <img
                    src="./assets/partners/img_3.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-4 absolute"
                >
                  <img
                    src="./assets/partners/img_4.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-5 absolute"
                >
                  <img
                    src="./assets/partners/img_5.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-6 absolute"
                >
                  <img
                    src="./assets/partners/img_6.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-7 absolute"
                >
                  <img
                    src="./assets/partners/img_7.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div
                  class="partners-card animated-card animated-card-8 absolute"
                >
                  <img
                    src="./assets/partners/img_8.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
              </div>
              <div
                class="flex justify-center items-center flex-col h-[100vh] mt-[100px] max-md:hidden max-sm:mt-[0] our-partners-title"
              >
                <p
                  class="section-title !text-[black] partners-section-title"
                  data-key="ourPartnersTitle"
                >
                  Our partners
                </p>
                <h2
                  class="text-[50px] text-center mt-[40px] partners-title max-w-[800px] max-md:text-[35px] max-sm:text-[20px]"
                  data-key="ourPartnersDesc"
                >
                  The city's favorite establishments are already with us!
                </h2>
              </div>
              <div
                class="grid  grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2 gap-[15px] relative max-sm:top-[70px]"
              >
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_1.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_2.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_3.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_4.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_5.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_6.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_7.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_8.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_9.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_10.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_11.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_12.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_13.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_14.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_15.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_16.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_18.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_19.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_20.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/img_21.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("partners loaded");
    } else {
      reject(new Error("partners element not found!"));
    }
  });
};
