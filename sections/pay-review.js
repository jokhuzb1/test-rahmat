const html = (strings, ...values) => strings.raw[0];

export const PayReviewSection = () => {
  return new Promise((resolve, reject) => {
    const payReview = document.getElementById("pay-review");

    if (payReview) {
      payReview.innerHTML = html`
        <div
          class="max-lg:hidden  h-[100vh]  relative flex items-center justify-center"
        >
          <div class="right-illustrator transition illustration">
            <img
              src="./assets/icons/showcase-right-illustrator.svg"
              alt="Right Illustrator"
            />
          </div>
          <img
            src="/assets/payment-images/img_0.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-0 fixed"
          />
          <img
            src="/assets/payment-images/img_1.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-1 fixed"
          />
          <img
            src="/assets/payment-images/img_2.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-2 fixed"
          />
          <img
            src="/assets/payment-images/img_3.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-3 fixed"
          />
          <img
            src="/assets/payment-images/img_4.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-4 fixed"
          />
          <img
            src="/assets/payment-images/img_5.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-5 fixed"
          />
          <img
            src="/assets/payment-images/img_6.png"
            alt="animated payment img"
            class="img-payment w-[270px] z-[99] img-6 fixed"
          />
          <img
            src="/assets/phone.png"
            alt="animated phone"
            class="phone-image w-[270px] rotate-[90deg] absolute z-[99] transition"
          />

          <div class="left-illustrator transition illustration">
            <img
              src="./assets/icons/showcase-left-illustrator.svg"
              alt="Left Illustrator"
            />
          </div>
        </div>
      `;
      resolve("pay review loaded");
    } else {
      reject(new Error("pay review element not found!"));
    }
  });
};
