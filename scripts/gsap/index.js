import { PayReviewAnimation } from "./pay-review-animation.js";
import { applyGSAPAnimations } from "./apply-gsap-animation.js";
import { ScanQrAnimation } from "./scan-qr-animation.js";
import { AdvantagesAnimation } from "./advantages-animation.js";
import { PosSystemsAnimation } from "./pos-systems-animation.js";
import { PartnersAnimation } from "./partners-animation.js";
import { HeaderAnimation } from "./header-animation.js";
import { FooterAnimation } from "./footer-animation.js";
import { FaqAnimation } from "./faq-animation.js";
import { HowItWorksAnimation } from "./how-it-works-animation.js";

export const Gsap = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Initializing GSAP animations...");
      gsap.registerPlugin(ScrollTrigger);
      //progressbar
      const progressBar = document.getElementById("progress-bar");
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / documentHeight) * 100;
        gsap.to(progressBar, { width: `${progress}%`, duration: 0.2 });
      });

      await HeaderAnimation();
      await FaqAnimation();
      await FooterAnimation();
      await AdvantagesAnimation();
      await ScanQrAnimation();
      await PosSystemsAnimation();
      await HowItWorksAnimation();
      await PartnersAnimation();
      await PayReviewAnimation();
      await applyGSAPAnimations();
      resolve("GSAP animations ready");
    } catch (err) {
      console.log(err, "gsap");
      reject(err);
    }
  });
};
