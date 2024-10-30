const html = (strings, ...values) => strings.raw[0];

export const PosSystemsMobileSection = () => {
  return new Promise((resolve, reject) => {
    const posSystemsMobile = document.getElementById("pos-systems-mobile");

    if (posSystemsMobile) {
      posSystemsMobile.innerHTML = html`
        <div class="container hidden max-[768px]:block">
          <div
            class="flex justify-center items-center flex-col mt-[100px] max-sm:mt-[50px]"
          >
            <p
              class="section-title !text-[black] mt-[30px]"
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
            class="grid grid-cols-4 max-lg:grid-cols-3 max-[350px]:grid-cols-2 gap-[15px] max-[768px]:mt-[40px]"
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
      `;
      resolve("pos systems mobile loaded");
    } else {
      reject(new Error("pos systems mobile element not found!"));
    }
  });
};
