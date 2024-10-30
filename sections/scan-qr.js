const html = (strings, ...values) => strings.raw[0];

export const ScanQrSection = () => {
  return new Promise((resolve, reject) => {
    const scanQr = document.getElementById("scan-qr");

    if (scanQr) {
      scanQr.innerHTML = html`
        <div class="hidden horizontal-scroll mt-[20px]">
          <div class="container">
            <div
              id="phone-1"
              class="phone-item flex flex-col justify-center items-center w-full h-[100vh] mb-[150px]"
            >
              <div
                class="flex items-center justify-between w-full max-md:hidden"
              >
                <p class="section-title !text-[#000]" data-key="scanQr">
                  Scan QR-code
                </p>
                <h2 class="text-[50px]" data-key="section01">01</h2>
              </div>
              <h2
                class="text-[#000] text-center text-[25px]"
                data-key="scanQrHeading"
              >
                Scan the QR-code <br />
                to
                <span class="text-[#888888]" data-key="paySecurely"
                  >Pay Securely</span
                >
              </h2>
              <img
                src="./assets/gifs/phone_1.gif"
                alt="phone"
                class="w-[150px] my-[10px]"
              />
              <div
                class="flex items-center justify-between w-full max-md:justify-center"
              >
                <h2
                  class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                  data-key="scanQrHeading"
                >
                  Scan the QR-code <br />
                  to
                  <span class="text-[#888888]" data-key="paySecurely"
                    >Pay Securely</span
                  >
                </h2>
                <p
                  class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full px-[20px] max-md:mt-[20px]"
                  data-key="scanQrInstruction"
                >
                  Simply point your phone's camera at the QR code to scan and
                  complete your payment instantly. Enjoy a fast, secure, and
                  hassle-free transaction experience.
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div
              id="phone-2"
              class="phone-item flex flex-col justify-center items-center w-full h-[100vh] mb-[150px]"
            >
              <div
                class="flex items-center justify-between w-full max-md:hidden sticky top-0"
              >
                <p class="section-title !text-[#000]" data-key="payment">
                  Payment
                </p>
                <h2 class="text-[50px]" data-key="section02">02</h2>
              </div>
              <h2
                class="text-[#000] text-center text-[25px]"
                data-key="paymentHeading"
              >
                Guests can
                <span class="text-[#888888]"
                  >pay their <br />
                  bill easily</span
                >
                via QR scan!
              </h2>
              <img
                src="./assets/gifs/phone_1.gif"
                alt="phone"
                class="w-[150px] my-[10px]"
              />
              <div
                class="flex items-center justify-between w-full max-md:justify-center"
              >
                <h2
                  class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                  data-key="paymentHeading"
                >
                  Guests can
                  <span class="text-[#888888]"
                    >pay their <br />
                    bill easily</span
                  >
                  via QR scan!
                </h2>
                <p
                  class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full px-[20px] max-md:mt-[20px]"
                  data-key="paymentInstruction"
                >
                  Just scan the QR code RAHMAT and choose a payment method!
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div
              id="phone-3"
              class="phone-item flex flex-col justify-center items-center w-full h-[100vh] mb-[150px]"
            >
              <div
                class="flex items-center justify-between w-full max-md:hidden"
              >
                <p class="section-title !text-[#000]" data-key="gratuities">
                  Gratuities
                </p>
                <h2 class="text-[50px]" data-key="section03">03</h2>
              </div>
              <h2
                class="text-[#000] text-center text-[25px]"
                data-key="gratuitiesHeading"
              >
                <span class="text-[#888888]">Seamless</span> Service <br />
                and Easy Get Tipping!
              </h2>
              <img
                src="./assets/gifs/phone_2.gif"
                alt="phone"
                class="w-[150px] my-[10px]"
              />
              <div
                class="flex items-center justify-between w-full max-md:justify-center"
              >
                <h2
                  class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                  data-key="gratuitiesHeading"
                >
                  <span class="text-[#888888]">Seamless</span> Service <br />
                  and Easy Get Tipping!
                </h2>
                <p
                  class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full px-[20px] max-md:mt-[20px]"
                  data-key="gratuitiesInstruction"
                >
                  If you are satisfied with your service, the guest can pay the
                  bill and leave a tip in one action. Easily and quickly
                  directly to the waiter's bill!
                </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div
              id="phone-4"
              class="phone-item flex flex-col justify-center items-center w-full h-[100vh] mb-[150px]"
            >
              <div
                class="flex items-center justify-between w-full max-md:hidden"
              >
                <p class="section-title !text-[#000]" data-key="reviews">
                  Reviews
                </p>
                <h2 class="text-[50px]" data-key="section04">04</h2>
              </div>
              <h2
                class="text-[#000] text-center text-[25px]"
                data-key="reviewsHeading"
              >
                Real-Time <br />
                Guest <span class="text-[#888888]">Feedback!</span>
              </h2>
              <img
                src="./assets/gifs/phone_3.gif"
                alt="phone"
                class="w-[150px] my-[10px]"
              />
              <div
                class="flex items-center justify-between w-full max-md:justify-center"
              >
                <h2
                  class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                  data-key="reviewsHeading"
                >
                  Real-Time <br />
                  Guest <span class="text-[#888888]">Feedback!</span>
                </h2>
                <p
                  class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full px-[20px] max-md:mt-[20px]"
                  data-key="reviewsInstruction"
                >
                  The establishment can receive honest and relevant reviews
                  about the service provided. The guest can leave an emotional
                  review by choosing one of the emotions, or write a message
                  that the management of the establishment will see instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("scan qr loaded");
    } else {
      reject(new Error("scan qr element not found!"));
    }
  });
};
