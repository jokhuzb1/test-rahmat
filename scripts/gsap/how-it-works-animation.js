export const HowItWorksAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const videos = document.querySelectorAll(".vid");
      const textGroups = document.querySelectorAll(".texts-for-video");
      let currentIndex = 0;

      ScrollTrigger.create({
        trigger: ".video-section",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * videos.length);

          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            changeVideoAndText(currentIndex);
          }
        },
      });

      function changeVideoAndText(index) {
        videos.forEach((video, i) => {
          gsap.to(video, { opacity: i === index ? 1 : 0, duration: 0.5 });
          i === index ? video.play() : video.pause();
        });

        textGroups.forEach((text, i) => {
          gsap.to(text, { opacity: i === index ? 1 : 0, duration: 0.5 });
        });
      }

      changeVideoAndText(currentIndex);

      resolve("How it works animation is ready");
    } catch (err) {
      console.error("Error in 'How it works' animation:", err);
      reject(err);
    }
  });
};
