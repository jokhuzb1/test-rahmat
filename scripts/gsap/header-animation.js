export const HeaderAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const HeaderText = document.querySelector(".header-text");
      const HeaderSection = document.querySelector(".showcase-section");

      if (HeaderText) {
        // Wrap each word in a span for animation
        const headerTextWords = HeaderText.innerText.split(" ");
        HeaderText.innerHTML = headerTextWords
          .map((word) => `<span class="header-text-word">${word}</span>`)
          .join(" ");
      } else {
        console.warn("Header text element not found.");
        return resolve("Header animation skipped due to missing element.");
      }

      const headerTextSpan = document.querySelectorAll(".header-text-word");

      if (headerTextSpan.length === 0) {
        console.warn("No words found to animate.");
        return resolve("Header animation skipped due to missing spans.");
      }

      // Apply GSAP animation
      gsap.fromTo(
        headerTextSpan,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: HeaderSection || HeaderText,
            start: "top center",
            end: "bottom top",
          },
        }
      );
      gsap.to(HeaderSection, {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
      });

      resolve("Header animation is ready");
    } catch (err) {
      console.error("Error in header GSAP animation:", err);
      reject(err);
    }
  });
};
