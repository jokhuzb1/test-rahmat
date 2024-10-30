export const PayReviewAnimation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const phoneElement = document.querySelector(".phone-image");
      const imgElements = document.querySelectorAll(".img-payment");
      const illustration = document.querySelector(".illustration");
      const rightIllustrator = document.querySelector(".right-illustrator");
      const leftIllustrator = document.querySelector(".left-illustrator");

      const imageProps = [
        {
          className: "img-0",
          startLeft: "40%",
          endLeft: "12%",
          startTop: "40%",
          top: "10%",
        },
        {
          className: "img-1",
          startLeft: "40%",
          endLeft: "14%",
          startTop: "40%",
          top: "36%",
        },
        {
          className: "img-2",
          startLeft: "40%",
          endLeft: "10%",
          startTop: "40%",
          top: "65%",
        },
        {
          className: "img-3",
          startRight: "40%",
          endRight: "15%",
          startTop: "40%",
          top: "7%",
        },
        {
          className: "img-4",
          startRight: "40%",
          endRight: "15%",
          startTop: "40%",
          top: "30%",
        },
        {
          className: "img-5",
          startRight: "40%",
          endRight: "13%",
          startTop: "40%",
          top: "52%",
        },
        {
          className: "img-6",
          startRight: "40%",
          endRight: "18%",
          startTop: "40%",
          top: "75%",
        },
      ];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: phoneElement,
            start: "-15% bottom",
            end: "100%",
            scrub: true,
          },
        })
        .fromTo(
          phoneElement,
          { left: "-10%", autoAlpha: 1, position: "fixed" },
          {
            left: "50%",
            xPercent: -50,
            position: "fixed",
            top: "50%",
            yPercent: -50,
            duration: 0.5,
            ease: "power2.out",
          }
        )
        .to(phoneElement, {
          rotate: 0,
          ease: "power2.inOut",
          duration: 0.5,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: illustration,
            start: "350% bottom",
            end: "700% bottom",
            scrub: true,
            onEnter: () => {
              gsap.to(rightIllustrator, {
                opacity: 1,
                visibility: "visible",
                left: "25%",
                ease: "power2.out",
              });
              gsap.to(leftIllustrator, {
                opacity: 1,
                visibility: "visible",
                right: "30%",
                ease: "power2.out",
              });
            },
            onLeave: () => {
              gsap.to(rightIllustrator, {
                opacity: 0,
                visibility: "hidden",
              });
              gsap.to(leftIllustrator, {
                opacity: 0,
                visibility: "hidden",
              });
            },
          },
        })
        .fromTo(
          rightIllustrator,
          {
            opacity: 0,
            position: "fixed",
            left: 450,
            top: "30%",
          },
          {
            opacity: 1,
            position: "fixed",
            left: "22%",
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          leftIllustrator,
          {
            opacity: 0,
            position: "fixed",
            visibility: "hidden",
            right: 450,
            top: "30%",
          },
          {
            opacity: 1,
            position: "fixed",
            right: "20%",
            ease: "power2.out",
          },
          0
        );

      gsap.fromTo(
        imgElements,
        {
          opacity: 0,
          left: (index) => imageProps[index]?.startLeft,
          right: (index) => imageProps[index]?.startRight,
          top: (index) => imageProps[index].startTop,
        },
        {
          opacity: 1,
          left: (index) => imageProps[index].endLeft,
          right: (index) => imageProps[index].endRight,
          top: (index) => imageProps[index].top,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: phoneElement,
            start: "450% bottom",
            end: "700% top",
            scrub: true,
            onupdate: (self) => {
              const progress = self.progress;
              imgElements.forEach((img, index) => {
                const { startLeft, endLeft, endRight, startTop, top } =
                  imageProps[index];

                img.style.opacity = progress;
                img.style.left = gsap.utils.interpolate(
                  startLeft,
                  endLeft,
                  progress
                );
                img.style.visibility = progress < 1 ? "visible" : "hidden";
                img.style.right = gsap.utils.interpolate(
                  startLeft,
                  endRight,
                  progress
                );
                img.style.top = gsap.utils.interpolate(startTop, top, progress);
              });
            },
            onLeave: () => {
              imgElements.forEach((img) => {
                if (img) {
                  img.style.opacity = "0";
                  img.style.visibility = "hidden";
                }
              });
              phoneElement.style.opacity = "0";
              phoneElement.style.visibility = "hidden";
            },
            onEnterBack: () => {
              imgElements.forEach((img) => {
                img.style.opacity = "1";
                img.style.visibility = "visible";
              });
              phoneElement.style.opacity = "1";
              phoneElement.style.visibility = "visible";
              navbar.classList.remove("active");
            },
          },
        }
      );

      resolve(" pay review animation is ready");
    } catch (err) {
      console.log(err, "pay review gsap animation");
      reject(err);
    }
  });
};
