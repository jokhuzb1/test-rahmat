export const applyGSAPAnimations = () => {
  return new Promise((resolve, reject) => {
    try {
      // Safely select sections with fallback to an empty array
      const fullSections = gsap.utils.toArray(".full") || [];

      // Helper function to get the scroll distance for each section
      const getScrollDistance = (section) => {
        const itemContainer = section.querySelector(".container");
        return itemContainer
          ? -1 * (itemContainer.offsetHeight - section.offsetHeight)
          : 0;
      };

      // Apply animations only if sections are available
      if (fullSections.length) {
        fullSections.forEach((section) => {
          const container = section.querySelector(".container");
          if (!container) return; // Skip if container is missing

          // Create and configure GSAP timeline with ScrollTrigger
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 0%",
              end: "350%",
              pin: true,
              scrub: true,
              markers: false,
              invalidateOnRefresh: true,
            },
          });

          // Animate container's vertical movement
          tl.to(container, {
            y: () => getScrollDistance(section),
            ease: "none",
          });
        });
      }

      resolve("apply gsap animation is ready");
    } catch (err) {
      console.error("Error in applyGSAPAnimations:", err);
      reject(err);
    }
  });
};
