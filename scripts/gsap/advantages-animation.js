export const AdvantagesAnimation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const advantages = [
        document.querySelector(".advantages-1"),
        document.querySelector(".advantages-2"),
        document.querySelector(".advantages-3"),
      ];
      const advantagesItem = document.querySelectorAll(".advantages-item");
      const advantagesScroll = document.querySelector(".advantages-scroll");
      const button = document.getElementById("scrollToNextButton");
      const sections = document.querySelectorAll(".advantages-details");

      // GSAP animation for '.advantages-left span'
      const animation = gsap.to(".advantages-left span", {
        top: "-158px",
        stagger: {
          each: 0.1,
        },
        ease: "none",
      });
      // ScrollTrigger setup
      ScrollTrigger.create({
        trigger: ".advantages-section",
        start: "top top",
        end: "bottom bottom",
        pin: ".advantages-left",
        animation,
        scrub: 1,
        onEnter: () => navbar.classList.add("active"),
      });

      const animateAdvantages = (element) => {
        gsap.fromTo(
          element,
          { y: 300, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 1,
            duration: 3,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "5% top",
              scrub: true,
              toggleActions: "restart none none none",
            },
          }
        );
      };

      advantages.forEach(animateAdvantages);

      gsap.to(advantagesItem, {
        xPercent: -100 * (advantagesItem.length - 0.7),
        ease: "none",
        scrollTrigger: {
          trigger: ".advantages-scroll",
          pin: true,
          scrub: 1,
          snap: 1 / (advantagesItem.length - 1),
          end: () => "+=" + (advantagesScroll.offsetWidth + 200),
        },
      });

      let currentSectionIndex = 0;

      function scrollToNextSection() {
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        } else {
          currentSectionIndex = sections.length - 1; // Prevent going beyond
        }
        sections[currentSectionIndex].scrollIntoView({
          behavior: "smooth",
        });
      }

      button.addEventListener("click", scrollToNextSection);
      resolve("advantages animation is ready");
    } catch (err) {
      console.log(err, "advantages gsap animation");
      reject(err);
    }
  });
};
