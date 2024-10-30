export const starLoader = (totalFunctions, functions) => {
  return new Promise(async (resolve, reject) => {
    try {
      const counterElement = document.querySelector(".counter");
      const overlay = document.querySelector(".overlay");
      let currentProgress = 0;
      const progressIncrement = 100 / totalFunctions;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";

      function enableScroll() {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        overlay.style.visibility = "hidden";
      }

      function updateCounter() {
        counterElement.textContent = `${Math.round(currentProgress)}%`;
      }

      const executedFunctions = new Set();

      for (const func of functions) {
        if (!executedFunctions.has(func)) {
          await func();
          executedFunctions.add(func);
          currentProgress += progressIncrement;
          updateCounter();
        }
      }

      gsap.to(".counter", { delay: 0.7, opacity: 0, visibility: "hidden" });
      gsap.to(".bar", {
        delay: 0.7,
        height: 0,
        opacity: 0,
        backgroundColor: "white",
        ease: "power4.inOut",
      });

      enableScroll();
      resolve("Loader animation complete");
    } catch (err) {
      console.log("Error in loader animation:", err);
      reject(err);
    }
  });
};
