const html = (strings, ...values) => strings.raw[0];

export const PayReviewMobileSection = () => {
  return new Promise((resolve, reject) => {
    const payReviewMobile = document.getElementById("pay-review-mobile");

    if (payReviewMobile) {
      payReviewMobile.innerHTML = html`
        <div class="hidden max-lg:block relative mt-[20px]">
          <div class="container">
            <div class="flex justify-center">
              <img
                src="/assets/payment-images/img_0.png"
                alt="animated payment img"
                class="w-[177px] z-[99] absolute top-[50px] left-[-70px]"
              />
              <img
                src="/assets/payment-images/img_1.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[160px] left-[-20px]"
              />
              <img
                src="/assets/payment-images/img_2.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[290px] left-[-100px]"
              />
              <img
                src="/assets/payment-images/img_3.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[20px] right-[-85px]"
              />
              <img
                src="/assets/payment-images/img_4.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[140px] right-[-100px]"
              />
              <img
                src="/assets/payment-images/img_5.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[245px] right-[-100px]"
              />
              <img
                src="/assets/payment-images/img_6.png"
                alt="animated payment img"
                class="w-[177px] z-[1] absolute top-[360px] right-[-40px]"
              />
              <img
                src="/assets/phone.png"
                alt="phone"
                class="animated phone z-[100] relative w-[180px]"
              />
            </div>
          </div>
        </div>
      `;
      resolve("pay review mobile loaded");
    } else {
      reject(new Error("pay review mobile element not found!"));
    }
  });
};
