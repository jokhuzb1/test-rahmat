export const FooterAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      // Safely query the footer section
      const footerSection = document.querySelector(".footer");

      if (!footerSection) {
        console.warn("Footer section not found.");
        return resolve("Footer animation skipped due to missing element.");
      }

      // Apply GSAP animation
      gsap.fromTo(
        footerSection,
        { className: "footer" },
        {
          className: "footer active",
          stagger: 0.5,
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerSection,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            toggleActions: "restart none none none",
          },
        }
      );

      resolve("Footer animation is ready");
    } catch (err) {
      console.error("Error in Footer animation:", err);
      reject(err);
    }
  });
};
