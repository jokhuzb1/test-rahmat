const html = (strings, ...values) => strings.raw[0];

export const HowItWorksSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works");

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="h-[450vh] max-[1023px]:hidden">
          <div class="video-section">
            <div class="video-container">
              <video
                class="vid active"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/1.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/2.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/3.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/4.mp4" type="video/mp4" />
              </video>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] texts-for-video ph-text"
                id="text-1"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="scanQr">
                    Scan QR-code
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="scanQrHeading"
                  >
                    Scan the QR-code <br />
                    to <span class="text-[#888888]">Pay Securely</span>
                  </h2>
                  <h2 class="text-[50px]" data-key="section01">01</h2>
                </div>
                <div
                  class="flex items-center justify-between w-full max-md:justify-center ph-text"
                >
                  <h2
                    class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                    data-key="scanQrHeading"
                  >
                    Scan the QR-code <br />
                    to <span class="text-[#888888]">Pay Securely</span>
                  </h2>
                  <p
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="scanQrInstruction"
                  >
                    Simply point your phone's camera at the QR code to scan and
                    complete your payment instantly. Enjoy a fast, secure, and
                    hassle-free transaction experience.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] texts-for-video ph-text"
                id="text-2"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden sticky top-0"
                >
                  <p class="section-title !text-[#000]" data-key="payment">
                    Payment
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="paymentHeading"
                  >
                    Guests can
                    <span class="text-[#888888]"
                      >pay their <br />
                      bill easily</span
                    >
                    via QR scan!
                  </h2>
                  <h2 class="text-[50px]" data-key="section02">02</h2>
                </div>
                <div
                  class="flex items-center justify-between w-full max-md:justify-center ph-text"
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
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="paymentInstruction"
                  >
                    Just scan the QR code RAHMAT and choose a payment method!
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] texts-for-video ph-text"
                id="text-3"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="gratuities">
                    Gratuities
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="gratuitiesHeading"
                  >
                    <span class="text-[#888888]">Seamless</span> Service <br />
                    and Easy Get Tipping!
                  </h2>
                  <h2 class="text-[50px]" data-key="section03">03</h2>
                </div>
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
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="gratuitiesInstruction"
                  >
                    If you are satisfied with your service, the guest can pay
                    the bill and leave a tip in one action. Easily and quickly
                    directly to the waiter's bill!
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] texts-for-video ph-text"
                id="text-4"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="reviews">
                    Reviews
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="reviewsHeading"
                  >
                    Real-Time <br />
                    Guest <span class="text-[#888888]">Feedback!</span>
                  </h2>
                  <h2 class="text-[50px]" data-key="section04">04</h2>
                </div>
                <div class="flex items-end justify-between w-full ">
                  <h2
                    class="text-[#000] text-[50px] text-start  max-lg:text-[30px] max-md:hidden"
                    data-key="reviewsHeading"
                  >
                    Real-Time <br />
                    Guest <span class="text-[#888888]">Feedback!</span>
                  </h2>
                  <p
                    class="text-[16px] text-right max-w-[275px]  max-md:text-center max-md:max-w-full max-md:mt-[20px]"
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
        </div>
        <!-- <div class="h-[450vh]"></div> -->
      `;
      resolve("How it works loaded");
    } else {
      reject(new Error("how it works element not found!"));
    }
  });
};

/*
        <div class="max-lg:hidden  h-[450vh] max-[1280px]:h-[650vh] "></div>
        <div class="h-[450vh] max-[1023px]:hidden">
          <div class="container">
            <section id="section2" class="first relative">
              <div class="full fullpage1 z-[5]">
                <div class="postcontainer">
                  <div
                    class="flex flex-col justify-between items-center w-full"
                  >
                    <img
                      src="./assets/gifs/phone.gif"
                      alt="phone"
                      class="w-[250px] mt-[100px] max-[1300px]:w-[200px]"
                    />
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] z-[2] absolute top-0"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="scanQr">
                    Scan QR-code
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="scanQrHeading"
                  >
                    Scan the QR-code <br />
                    to <span class="text-[#888888]">Pay Securely</span>
                  </h2>
                  <h2 class="text-[50px]" data-key="section01">01</h2>
                </div>
                <div
                  class="flex items-center justify-between w-full max-md:justify-center"
                >
                  <h2
                    class="text-[#000] text-[50px] max-lg:text-[30px] max-md:hidden"
                    data-key="scanQrHeading"
                  >
                    Scan the QR-code <br />
                    to <span class="text-[#888888]">Pay Securely</span>
                  </h2>
                  <p
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="scanQrInstruction"
                  >
                    Simply point your phone's camera at the QR code to scan and
                    complete your payment instantly. Enjoy a fast, secure, and
                    hassle-free transaction experience.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] z-[2] absolute top-[110vh]"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden sticky top-0"
                >
                  <p class="section-title !text-[#000]" data-key="payment">
                    Payment
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="paymentHeading"
                  >
                    Guests can
                    <span class="text-[#888888]"
                      >pay their <br />
                      bill easily</span
                    >
                    via QR scan!
                  </h2>
                  <h2 class="text-[50px]" data-key="section02">02</h2>
                </div>
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
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="paymentInstruction"
                  >
                    Just scan the QR code RAHMAT and choose a payment method!
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] z-[2] absolute top-[220vh]"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="gratuities">
                    Gratuities
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="gratuitiesHeading"
                  >
                    <span class="text-[#888888]">Seamless</span> Service <br />
                    and Easy Get Tipping!
                  </h2>
                  <h2 class="text-[50px]" data-key="section03">03</h2>
                </div>
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
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="gratuitiesInstruction"
                  >
                    If you are satisfied with your service, the guest can pay
                    the bill and leave a tip in one action. Easily and quickly
                    directly to the waiter's bill!
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col justify-between items-center w-full h-[100vh] z-[2] absolute top-[330vh]"
              >
                <div
                  class="flex items-center justify-between w-full max-md:hidden"
                >
                  <p class="section-title !text-[#000]" data-key="reviews">
                    Reviews
                  </p>
                  <h2
                    class="text-[#000] text-center text-[25px] relative top-[50px] left-[-50px]"
                    data-key="reviewsHeading"
                  >
                    Real-Time <br />
                    Guest <span class="text-[#888888]">Feedback!</span>
                  </h2>
                  <h2 class="text-[50px]" data-key="section04">04</h2>
                </div>
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
                    class="text-[16px] text-right max-w-[275px] max-md:text-center max-md:max-w-full max-md:mt-[20px]"
                    data-key="reviewsInstruction"
                  >
                    The establishment can receive honest and relevant reviews
                    about the service provided. The guest can leave an emotional
                    review by choosing one of the emotions, or write a message
                    that the management of the establishment will see instantly.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
*/
