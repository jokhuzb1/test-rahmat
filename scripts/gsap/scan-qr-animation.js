export const ScanQrAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const phoneItems = document.querySelectorAll(".phone-item");
      const horizontalScroll = document.querySelector(".horizontal-scroll");
      const phoneSections = [
        document.querySelector("#phone-1"),
        document.querySelector("#phone-2"),
        document.querySelector("#phone-3"),
        document.querySelector("#phone-4"),
      ];

      // GSAP helper function for section animations
      const animateSection = (section) => {
        gsap.fromTo(
          section,
          { y: 300, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 3,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              toggleActions: "restart none none none",
            },
          }
        );
      };

      // Horizontal scroll animation for phone items
      gsap.to(phoneItems, {
        xPercent: -100 * (phoneItems.length - 0.7),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalScroll,
          pin: true,
          scrub: 1,
          snap: 1 / (phoneItems.length - 1),
          end: () => `+=${horizontalScroll.offsetWidth + 200}`,
        },
      });

      // Apply animation to each phone section if it exists
      phoneSections.forEach((section) => {
        if (section) animateSection(section);
      });

      resolve("Scan QR animation is ready");
    } catch (err) {
      console.error("Scan QR GSAP animation error:", err);
      reject(err);
    }
  });
};
