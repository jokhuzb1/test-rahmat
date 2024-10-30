const html = (strings, ...values) => strings.raw[0];

export const FaqSection = () => {
  return new Promise((resolve, reject) => {
    const faq = document.getElementById("faq");

    if (faq) {
      faq.innerHTML = html`
        <div class="container mt-6 min-h-[60vh]">
          <div class="max-md:flex max-md:justify-center">
            <p
              class="section-title !text-[#010101] min-w-[150px] w-max faq-title"
              data-key="faqTitle"
            >
              FAQ
            </p>
          </div>
          <h2
            class="text-[50px] text-[#010101] mt-[40px] max-md:text-[25px] max-md:text-center"
            data-key="questionsAndAnswers"
          >
            Questions <span class="text-[#888888]">&</span> Answers
          </h2>
          <div
            class="flex items-center gap-[20px] mt-[60px] faq-buttons max-md:mt-[30px]"
            id="faqButtons"
          ></div>
          <div
            class="mt-[50px] border-b-gray-400 border-b-[1px] max-md:mt-[30px] max-md:border-b-[transparent]"
          >
            <div class="faq-tab-content" id="faqContent"></div>
          </div>
        </div>
      `;
      resolve("faq loaded");
    } else {
      reject(new Error("faq element not found!"));
    }
  });
};
