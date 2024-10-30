// Imports for sections and scripts
import { NavbarSection } from "./sections/navbar.js";
import { HeaderSection } from "./sections/header.js";
import { PayReviewSection } from "./sections/pay-review.js";
import { PayReviewMobileSection } from "./sections/pay-review-mobile.js";
import { HowItWorksSection } from "./sections/how-it-works.js";
import { ScanQrSection } from "./sections/scan-qr.js";
import { AdvantagesSection } from "./sections/advantages.js";
import { PosSystemsSection } from "./sections/pos-systems.js";
import { PartnersSection } from "./sections/partners.js";
import { PosSystemsMobileSection } from "./sections/pos-systems-mobile.js";
import { FaqSection } from "./sections/faq.js";
import { FooterSection } from "./sections/footer.js";
import { Contacts } from "./sections/contact.js";

import { InteractWithDom } from "./scripts/dom-interact.js";
import { Gsap } from "./scripts/gsap/index.js";
import { MultiLanguage } from "./scripts/multi-lang.js";
import { starLoader } from "./scripts/gsap/start-loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const functions = [
      NavbarSection,
      HeaderSection,
      PayReviewSection,
      HowItWorksSection,
      PayReviewMobileSection,
      ScanQrSection,
      AdvantagesSection,
      PosSystemsSection,
      PartnersSection,
      PosSystemsMobileSection,
      FaqSection,
      FooterSection,
      MultiLanguage,
      Contacts,
      Gsap,
      InteractWithDom,
    ];

    const totalFunctions = functions.length;
    await starLoader(totalFunctions, functions);

    console.log("All scripts loaded successfully!");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
