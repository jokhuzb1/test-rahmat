export const PartnersAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const elements = {
        partnersSection: document.querySelector(".partners-section"),
        partnersImages: document.querySelectorAll(".animated-card"),
        partnersSectionTitle: document.querySelector(".partners-section-title"),
        ourPartnersTitle: document.querySelector(".our-partners-title"),
        ourPartnersTitle2: document.querySelector(".our-partners-title-2"),
        partnersTitle: document.querySelector(".partners-title"),
        becomeValuedPartner: document.querySelector(".become-valued-partner"),
        contactSection: document.querySelector(".contact-section"),
      };

      const parentImageProps = [
        { startLeft: "50%", midLeft: "-8%", startTop: "50%", midTop: "200px" },
        { startLeft: "50%", midLeft: "17%", startTop: "50%", midTop: "50px" },
        { startRight: "50%", midRight: "30%", startTop: "50%", midTop: "80px" },
        {
          startRight: "50%",
          midRight: "-2%",
          startTop: "50%",
          midTop: "120px",
        },
        { startLeft: "50%", midLeft: "-2%", startTop: "50%", midTop: "550px" },
        { startLeft: "50%", midLeft: "25%", startTop: "50%", midTop: "700px" },
        {
          startRight: "50%",
          midRight: "25%",
          startTop: "50%",
          midTop: "560px",
        },
        {
          startRight: "50%",
          midRight: "-2%",
          startTop: "50%",
          midTop: "580px",
        },
      ];

      const animateTextSpans = (element, className) => {
        if (element) {
          element.innerHTML = element.innerText
            .split(" ")
            .map((word) => `<span class="${className}">${word}</span>`)
            .join(" ");
        }
      };

      const handleVisibility = (element, isVisible) => {
        element.style.visibility = isVisible ? "visible" : "hidden";
        element.style.opacity = isVisible ? "1" : "0";
      };

      const removeElement = (element) => {
        if (element) element.remove();
      };

      // const animateCardsOnScroll = (self, images) => {
      //   const progress = self.progress;
      //   images.forEach((img, i) => {
      //     const { startLeft, midLeft, startTop, midTop, startRight, midRight } =
      //       parentImageProps[i];
      //     gsap.to(img, {
      //       opacity: progress,
      //       left: gsap.utils.interpolate(startLeft, midLeft, progress),
      //       right: gsap.utils.interpolate(startRight, midRight, progress),
      //       top: gsap.utils.interpolate(startTop, midTop, progress),
      //       ease: "expo.out",
      //     });
      //   });
      // };

      const animateCardsOnScroll = (self, images) => {
        const progress = self.progress;

        images.forEach((img, i) => {
          const { startLeft, midLeft, startTop, midTop, startRight, midRight } =
            parentImageProps[i];

          img.style.opacity = progress;
          img.style.left = gsap.utils.interpolate(
            startLeft || "auto",
            midLeft || "auto",
            progress
          );
          img.style.right = gsap.utils.interpolate(
            startRight || "auto",
            midRight || "auto",
            progress
          );
          img.style.top = gsap.utils.interpolate(startTop, midTop, progress);
        });
      };

      const onLeave = () => {
        elements.partnersImages.forEach((img) =>
          gsap.to(img, { top: "100%", opacity: 0, duration: 1 })
        );
        handleVisibility(elements.ourPartnersTitle, false);
        handleVisibility(elements.partnersSectionTitle, false);
        handleVisibility(elements.ourPartnersTitle2, false);
      };

      const onComplete = () => {
        removeElement(elements.partnersTitle); // Remove title after animation
      };

      const onEnterBack = () => {
        elements.partnersImages.forEach((img, i) => {
          const { midLeft, midRight, midTop } = parentImageProps[i];
          gsap.to(img, {
            left: midLeft,
            right: midRight,
            top: midTop,
            opacity: 1,
          });
        });
        handleVisibility(elements.ourPartnersTitle, true);
        handleVisibility(elements.partnersSectionTitle, true);
        handleVisibility(elements.ourPartnersTitle2, false);
      };

      if (!elements.partnersSection) {
        console.warn("Partners section not found.");
        return resolve("Skipped partners animation.");
      }

      animateTextSpans(elements.partnersTitle, "partner-text-word");
      animateTextSpans(
        elements.becomeValuedPartner,
        "become-valued-partner-word"
      );

      gsap.fromTo(
        document.querySelectorAll(".partner-text-word"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "top top",
            end: "bottom 20%",
            scrub: 0.5,
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        elements.partnersSectionTitle,
        { visibility: "hidden" },
        {
          visibility: "visible",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "60% bottom",
            end: "bottom top",
            scrub: true,
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        elements.partnersImages,
        {
          left: (i) => parentImageProps[i]?.startLeft,
          right: (i) => parentImageProps[i]?.startRight,
          top: (i) => parentImageProps[i]?.startTop,
          opacity: 0,
        },
        {
          opacity: 1,
          left: (i) => parentImageProps[i]?.midLeft,
          right: (i) => parentImageProps[i]?.midRight,
          top: (i) => parentImageProps[i]?.midTop,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "40% bottom",
            end: "bottom top",
            scrub: true,
            pin: elements.partnersSection,
            onUpdate: (self) =>
              animateCardsOnScroll(self, elements.partnersImages),
            onLeave,
            onEnterBack,
            onComplete,
          },
        }
      );

      if (elements.contactSection) {
        gsap.fromTo(
          document.querySelectorAll(".become-valued-partner-word"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 2,
            ease: "power4.out",
          }
        );
      }

      resolve("Partners animation is ready");
    } catch (err) {
      console.error("Error in partners animation:", err);
      reject(err);
    }
  });
};
