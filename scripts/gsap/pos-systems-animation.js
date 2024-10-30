export const PosSystemsAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      // Element Selectors

      const posSystemText = document.querySelector(".pos-system-text");
      // Prepare text spans for animation
      const words = posSystemText.innerText.split(" ");
      posSystemText.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
      const sectionWithEllipse = document.querySelector(
        ".section-with-ellipse"
      );
      const posSystemRightContent = document.querySelector(
        ".pos-system-right-content"
      );
      const posSystemTextWords = document.querySelectorAll(
        ".pos-system-text-word"
      );
      const posSystemTitle = document.querySelector(".pos-system-title");
      const ellipseGif = document.querySelector(".ellipse-gif");
      const posSystemSection = document.querySelector(".pos-system-section");
      const wordSpans = document.querySelectorAll(".word");

      // GSAP helper functions
      const fadeInFromBottom = (target, options) =>
        gsap.fromTo(
          target,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ...options }
        );
      const animateElement = (element, from, to, options) =>
        gsap.fromTo(element, from, { ...to, ...options });

      // Text Span Animation
      fadeInFromBottom(posSystemTextWords, {
        stagger: 0.1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionWithEllipse,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        },
      });

      // Right Content Animation
      animateElement(
        posSystemRightContent,
        { className: "w-[50%] pos-system-right-content max-lg:!w-[100%]" },
        {
          className: "w-[50%] pos-system-right-content max-lg:!w-[100%] active",
        },
        {
          scrollTrigger: {
            trigger: sectionWithEllipse,
            start: "60% bottom",
            end: "bottom top",
            toggleActions: "restart none none none",
          },
        }
      );

      // Word Span Animation
      fadeInFromBottom(wordSpans, {
        stagger: 0.1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: posSystemSection,
          start: "25% 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        },
      });

      // Color Change Animation for Word Spans
      gsap
        .timeline({
          scrollTrigger: {
            trigger: posSystemSection,
            start: "top top",
            end: "+=150%",
            scrub: 0.75,
            pin: true,
          },
        })
        .to(wordSpans, { color: "#F05039", stagger: 0.1 });

      // Title and Ellipse Scale Animation
      const scaleAnimations = [
        { target: posSystemTitle, scale: 0.5, opacity: 1 },
        { target: ellipseGif, scale: 0, opacity: 1, duration: 1.2 },
      ];
      scaleAnimations.forEach(({ target, scale, opacity, duration = 1 }) => {
        gsap.fromTo(
          target,
          { scale, opacity: 0 },
          {
            scale: 1,
            opacity,
            duration,
            scrollTrigger: {
              trigger: posSystemSection,
              start: "25% 75%",
              end: "bottom top",
              toggleActions: "restart none none none",
            },
          }
        );
      });

      // Ellipse Animation
      animateElement(
        ellipseGif,
        { left: window.innerWidth <= 1300 ? "29%" : "32%" },
        { left: "-30vw", top: "148%" },
        {
          scrollTrigger: {
            trigger: sectionWithEllipse,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      resolve("POS systems animation is ready.");
    } catch (err) {
      console.error("POS systems GSAP animation error:", err);
      reject(err);
    }
  });
};
