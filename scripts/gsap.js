gsap.registerPlugin(ScrollTrigger);

function starLoader() {
  let counterElement = document.querySelector('.counter');
  let htmlElement = document.querySelector('html');
  let bodyElement = document.querySelector('body');
  let overlay = document.querySelector('.overlay');
  let currentValue = 0;

  function disableScroll() {
    htmlElement.style.overflow = 'hidden';
    bodyElement.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventScroll, {passive: false});
    overlay.style.visibility = 'visible';
  }

  function enableScroll() {
    htmlElement.style.overflow = '';
    bodyElement.style.overflow = '';
    document.removeEventListener('touchmove', preventScroll);
    overlay.style.visibility = 'hidden';
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  disableScroll();

  function updateCounter() {
    if (currentValue === 100) {
      enableScroll();
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";

    let delay = Math.floor(Math.random() * 300) + 50;

    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

starLoader()

gsap.to('.counter', 0.25, {
  delay: 3.5,
  opacity: 0,
  visibility: 'hidden'
})

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  opacity: 0,
  backgroundColor: "white",
  stagger: {
    amount: 0.5
  },
  ease: "power4.inOut"
})

const navbar = document.querySelector('.navbar');
const HeaderText = document.querySelector('.header-text');
const HeaderSection = document.querySelector('.showcase-section');
const phoneElement = document.querySelector('.phone-image');
const imgElements = document.querySelectorAll('.img-payment');
const illustration = document.querySelector('.illustration');
const rightIllustrator = document.querySelector('.right-illustrator');
const leftIllustrator = document.querySelector('.left-illustrator');

function applyPhoneAnimation() {

  const imageProps = [
    {className: 'img-0', startLeft: '40%', endLeft: '12%', startTop: '40%', top: '10%'},
    {className: 'img-1', startLeft: '40%', endLeft: '14%', startTop: '40%', top: '36%'},
    {className: 'img-2', startLeft: '40%', endLeft: '10%', startTop: '40%', top: '65%'},
    {className: 'img-3', startRight: '40%', endRight: '15%', startTop: '40%', top: '7%'},
    {className: 'img-4', startRight: '40%', endRight: '15%', startTop: '40%', top: '30%'},
    {className: 'img-5', startRight: '40%', endRight: '13%', startTop: '40%', top: '52%'},
    {className: 'img-6', startRight: '40%', endRight: '18%', startTop: '40%', top: '75%'},
  ];

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: phoneElement,
      start: '-50% bottom',
      end: '+=1000s',
      scrub: true,
    },
  });

  timeline.fromTo(phoneElement, {left: '-100%', autoAlpha: 1, position: 'fixed'},     {
    left: "42%",
    position: "fixed",
    top: "50%",
    yPercent: -50,
    duration: 1,
    ease: "power2.out",
  }
);

  timeline.to(phoneElement, {rotate: 0, ease: 'power2.inOut', duration: 1});

  const timelineIllustration = gsap.timeline({
    scrollTrigger: {
      trigger: illustration,
      start: '350% bottom',
      end: '900% bottom',
      scrub: true,
      onEnter: () => {
        gsap.to(rightIllustrator, {opacity: 1, visibility: 'visible', left: "25%", ease: 'power2.out'});
        gsap.to(leftIllustrator, {opacity: 1, visibility: 'visible', right: "30%", ease: 'power2.out'});
      },
      onLeave: () => {
        gsap.to(rightIllustrator, {opacity: 0, visibility: 'hidden', left: "25%"});
        gsap.to(leftIllustrator, {opacity: 0, visibility: 'hidden', right: "30%"});
      },
    },
  });

  timelineIllustration.fromTo(
      rightIllustrator,
      {
        opacity: 0,
        position: 'fixed',
        left: 450,
        top: "30%",
      },
      {
        opacity: 1,
        position: 'fixed',
        left: "22%",
        ease: 'power2.out',
      },
      0
  );

  timelineIllustration.fromTo(
      leftIllustrator,
      {
        opacity: 0,
        position: 'fixed',
        visibility: 'hidden',
        right: 450,
        top: "30%",
      },
      {
        opacity: 1,
        position: 'fixed',
        right: "20%",
        ease: 'power2.out',
      },
      0
  );

  const showcaseSection = document.querySelector('.showcase-section');

  gsap.to(showcaseSection, {
    opacity: 0,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: showcaseSection,
      start: 'top top',
      end: 'bottom 50%',
      scrub: true,
      onLeave: () => {
        imgElements.forEach((img) => {
          gsap.to(img, {opacity: 0, visibility: 'visible', ease: 'power2.out'});
        });
        phoneElement.style.opacity = '1'
        phoneElement.style.visibility = 'visible'
      },
      onEnterBack: () => {
        imgElements.forEach((img) => {
          gsap.to(img, {opacity: 0, visibility: 'hidden', ease: 'power2.out'});
        });
        phoneElement.style.opacity = '0'
        phoneElement.style.visibility = 'hidden'
      },
    },
  });

  gsap.fromTo(imgElements, {
    opacity: 0,
    left: (index) => imageProps[index]?.startLeft,
    right: (index) => imageProps[index]?.startRight,
    top: (index) => imageProps[index].startTop,
  }, {
    opacity: 1,
    left: (index) => imageProps[index].endLeft,
    right: (index) => imageProps[index].endRight,
    top: (index) => imageProps[index].top,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: phoneElement,
      start: '800% bottom',
      end: '1400% top',
      scrub: true,
      onupdate: (self) => {
        const progress = self.progress;
        imgElements.forEach((img, index) => {
          const {startLeft, endLeft, endRight, startTop, top} = imageProps[index];
          gsap.to(img, {
            opacity: progress,
            left: gsap.utils.interpolate(startLeft, endLeft, progress),
            visibility: gsap.utils.interpolate('hidden', 'visible', progress),
            right: gsap.utils.interpolate(startLeft, endRight, progress),
            top: gsap.utils.interpolate(startTop, top, progress),
            ease: 'power2.out',
          });
        });
      },
      onLeave: () => {
        imgElements.forEach((img) => {
          gsap.to(img, {opacity: 0, visibility: 'hidden', ease: 'power2.out'});
        });
        phoneElement.style.opacity = '0'
        phoneElement.style.visibility = 'hidden'
      },
      onEnterBack: () => {
        imgElements.forEach((img) => {
          gsap.to(img, {opacity: 1, visibility: 'visible', ease: 'power2.out'});
        });
        phoneElement.style.opacity = '1'
        phoneElement.style.visibility = 'visible'
        navbar.classList.remove('active')
      },
    },
  });
}

const phoneItems = document.querySelectorAll(".phone-item");

gsap.to(phoneItems, {
  xPercent: -100 * (phoneItems.length - .7),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    pin: true,
    scrub: 1,
    snap: 1 / (phoneItems.length - 1),
    end: () => "+=" + (document.querySelector(".horizontal-scroll").offsetWidth + 200)
  }
});

const PhoneSection1 = document.querySelector("#phone-1");

gsap.fromTo(
    PhoneSection1,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: PhoneSection1,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const PhoneSection2 = document.querySelector("#phone-2");

gsap.fromTo(
    PhoneSection2,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: PhoneSection2,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const PhoneSection3 = document.querySelector("#phone-3");

gsap.fromTo(
    PhoneSection3,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: PhoneSection3,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const PhoneSection4 = document.querySelector("#phone-4");

gsap.fromTo(
    PhoneSection4,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: PhoneSection4,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const Advantages1 = document.querySelector(".advantages-1");

gsap.fromTo(
    Advantages1,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: Advantages1,
        start: "top bottom",
        end: "5% top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const Advantages2 = document.querySelector(".advantages-2");

gsap.fromTo(
    Advantages2,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: Advantages2,
        start: "top bottom",
        end: "5% top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const Advantages3 = document.querySelector(".advantages-3");

gsap.fromTo(
    Advantages3,
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: Advantages3,
        start: "top bottom",
        end: "5% top",
        scrub: true,
        toggleActions: "restart none none none",
      }
    }
);

const advantagesItem = document.querySelectorAll(".advantages-item");

gsap.to(advantagesItem, {
  xPercent: -100 * (advantagesItem.length - .7),
  ease: "none",
  scrollTrigger: {
    trigger: ".advantages-scroll",
    pin: true,
    scrub: 1,
    snap: 1 / (advantagesItem.length - 1),
    end: () => "+=" + (document.querySelector(".advantages-scroll").offsetWidth + 200)
  }
});

function applyGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const headerTextWords = HeaderText.innerText.split(' ');

  HeaderText.innerHTML = headerTextWords.map(word => `<span class="header-text-word">${word}</span>`).join(' ');

  const headerTextSpan = document.querySelectorAll('.header-text-word');

  gsap.fromTo(
      headerTextSpan,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: HeaderSection,
        }
      }
  );

  gsap.set(".ad-text", {
    top: "-5px"
  })

  const animation = gsap.to('.advantages-left span', {
    top: "-158px",
    stagger: {
      each: 0.1,
    },
    ease: "none"
  })

  ScrollTrigger.create({
    trigger: ".advantages-section",
    start: "top top",
    end: "bottom bottom",
    pin: ".advantages-left",
    animation,
    scrub: 1,
    onEnter: () => {
      navbar.classList.add('active')
    }
  })

  const button = document.getElementById('scrollToNextButton');
  const sections = document.querySelectorAll('.advantages-details');
  let currentSectionIndex = 0;

  function scrollToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      currentSectionIndex = sections.length - 1;
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }

  button.addEventListener('click', scrollToNextSection);

  const posSystemText = document.querySelector('.pos-system-text');
  const posSystemSection = document.querySelector('.pos-system-section');
  const posSystemTitle = document.querySelector('.pos-system-title');
  const ellipseGif = document.querySelector('.ellipse-gif');

  const words = posSystemText.innerText.split(' ');
  posSystemText.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

  const wordSpans = document.querySelectorAll('.word');

  gsap.fromTo(
      posSystemTitle,
      {
        scale: 0.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: posSystemSection,
          start: "25% 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      }
  )

  gsap.fromTo(
      ellipseGif,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: posSystemSection,
          start: "25% 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      }
  )

  gsap.fromTo(
      wordSpans,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: posSystemSection,
          start: "25% 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      }
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: posSystemSection,
      start: "top top",
      end: "+=150%",
      scrub: 0.75,
      pin: true,
    }
  }).to(wordSpans, {
    color: "#F05039",
    stagger: 0.1,
  });

  const sectionWithEllipse = document.querySelector('.section-with-ellipse');
  const posSystemRightContent = document.querySelector('.pos-system-right-content');

  gsap.fromTo(
      ellipseGif,
      {
        left: window.innerWidth <= 1300 ? "29%" : "32%",
      },
      {
        left: "-30vw",
        top: '148%',
        scrollTrigger: {
          trigger: sectionWithEllipse,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
  )

  const PosSystemText = document.querySelector('.section-with-ellipse h2');
  const posSystemToDown = document.querySelector('.pos-system-section-to-down-button');
  //
  // posSystemToDown.addEventListener("click", () => {
  //   window.scrollBy({
  //     top: window.innerHeight * 2,
  //     behavior: 'smooth'
  //   });
  // })

  const posSystemWord = PosSystemText.innerText.split(' ');

  PosSystemText.innerHTML = posSystemWord.map(word => `<span class="pos-system-text-word">${word}</span>`).join(' ');

  const PoSystemTextSpan = document.querySelectorAll('.pos-system-text-word');

  gsap.fromTo(
      PoSystemTextSpan,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionWithEllipse,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      }
  );

  gsap.fromTo(
      posSystemRightContent,
      {
        className: "w-[50%] pos-system-right-content max-lg:!w-[100%]"
      },
      {
        className: 'w-[50%] pos-system-right-content max-lg:!w-[100%] active',
        scrollTrigger: {
          trigger: sectionWithEllipse,
          start: "60% bottom",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      }
  )

  // gsap.fromTo(
  //     posSystemToDown,
  //     {
  //       opacity: 1
  //     },
  //     {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: sectionWithEllipse,
  //         start: "60% bottom",
  //         end: "bottom top",
  //         toggleActions: "restart none none none",
  //         onLeave: () => {
  //           posSystemToDown.style.opacity = 1
  //         }
  //       }
  //     }
  // )

  const parentImageProps = [
    {
      className: 'animated-card-1',
      startLeft: '40%',
      midLeft: '-8%',
      endLeft: '20%',
      startTop: '300px',
      midTop: '200px',
      top: '250px',
    },
    {
      className: 'animated-card-2',
      startLeft: '40%',
      midLeft: '17%',
      endLeft: '17%',
      startTop: '300px',
      midTop: '50px',
      top: '50px'
    },
    {
      className: 'animated-card-3',
      startRight: '38%',
      midRight: '30%',
      endRight: '30%',
      startTop: '300px',
      midTop: '80px',
      top: '80px'
    },
    {
      className: 'animated-card-4',
      startRight: '38%',
      midRight: '-2%',
      endRight: '-2%',
      startTop: '300px',
      midTop: '120px',
      top: '120px'
    },
    {
      className: 'animated-card-5',
      startLeft: '40%',
      midLeft: '-2%',
      endLeft: '-2%',
      startTop: '300px',
      midTop: '550px',
      top: '550px'
    },
    {
      className: 'animated-card-6',
      startLeft: '40%',
      midLeft: '25%',
      endLeft: '25%',
      startTop: '300px',
      midTop: '700px',
      top: '700px'
    },
    {
      className: 'animated-card-7',
      startRight: '38%',
      midRight: '25%',
      endRight: '25%',
      startTop: '300px',
      midTop: '560px',
      top: '560px'
    },
    {
      className: 'animated-card-8',
      startRight: '38%',
      midRight: '-2%',
      endRight: '-2%',
      startTop: '300px',
      midTop: '580px',
      top: '580px'
    },
  ];

  const partnersSection = document.querySelector(".partners-section");
  const partnersImages = document.querySelectorAll(".animated-card")
  const partnersSectionTitle = document.querySelector(".partners-section-title")

  gsap.fromTo(
      partnersSectionTitle,
      {
        visibility: 'hidden',
      },
      {
        visibility: 'visible',
        scrollTrigger: {
          trigger: partnersSection,
          start: "60% bottom",
          end: "bottom top",
          toggleActions: "restart none none none",
          scrub: true
        }
      }
  )

  const PartnersTitle = document.querySelector('.partners-title');
  const ourPartnersTitle = document.querySelector('.our-partners-title');
  const ourPartnersTitle2 = document.querySelector('.our-partners-title-2');

  const partnersWord = PartnersTitle.innerText.split(' ');

  PartnersTitle.innerHTML = partnersWord.map(word => `<span class="partner-text-word">${word}</span>`).join(' ');

  const PartnersTextSpan = document.querySelectorAll('.partner-text-word');

  gsap.fromTo(
      PartnersTextSpan,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: partnersSection,
          start: "top top",
          end: "bottom 20%",
          scrub: '.5',
          toggleActions: "restart none none none",
        }
      }
  );

  gsap.fromTo(partnersImages, {
    left: (index) => parentImageProps[index]?.startLeft,
    right: (index) => parentImageProps[index]?.startRight,
    top: (index) => parentImageProps[index].startTop,
  }, {
    opacity: 1,
    left: (index) => parentImageProps[index].midLeft,
    right: (index) => parentImageProps[index].midRight,
    top: (index) => parentImageProps[index].midTop,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: partnersSection,
      start: '37% bottom',
      end: 'bottom top',
      scrub: true,
      pin: partnersSection,
      onupdate: (self) => {
        const progress = self.progress;
        partnersImages.forEach((img, index) => {
          const {startLeft, midLeft, midRight, startTop, startRight, midTop} = parentImageProps[index];
          gsap.to(img, {
            opacity: progress,
            left: gsap.utils.interpolate(startLeft, midLeft, progress),
            visibility: gsap.utils.interpolate('hidden', 'visible', progress),
            right: gsap.utils.interpolate(startRight, midRight, progress),
            top: gsap.utils.interpolate(startTop, midTop, progress),
            ease: 'power2.out',
          });
        });
      },
      onLeave: () => {
        partnersImages.forEach((img) => {
          gsap.to(img, {top: "100%", duration: "1", ease: 'power2.out', opacity: 0});
        });
        ourPartnersTitle.style.visibility = 'hidden'
        partnersSectionTitle.style.visibility = 'hidden'
        ourPartnersTitle2.style.visibility = 'visible'
        ourPartnersTitle2.style.opacity = '1'
      },
      onEnterBack: () => {
        partnersImages.forEach((img, index) => {
          const {midRight, midLeft, midTop} = parentImageProps[index];
          gsap.to(img, {left: midLeft, right: midRight, top: midTop, opacity: 1});
        });
        ourPartnersTitle.style.visibility = 'visible'
        partnersSectionTitle.style.visibility = 'visible'
        ourPartnersTitle2.style.visibility = 'hidden'
        ourPartnersTitle2.style.opacity = '0'
      },
    },
  });

  gsap.fromTo(
      ourPartnersTitle2,
      {
        visibility: 'hidden'
      },
      {
        scrollTrigger: {
          trigger: partnersSection,
          start: "97% top",
          end: "bottom bottom",
          onLeave: () => {
            ourPartnersTitle2.style.visibility = 'hidden'
            ourPartnersTitle2.style.opacity = '0'
          },
          onEnterBack: () => {
            ourPartnersTitle2.style.visibility = 'visible'
            ourPartnersTitle2.style.opacity = '1'
          }
        }
      }
  );

  const faqSection = document.querySelector(".faq-section")

  gsap.fromTo(
      faqSection,
      {
        className: 'mt-[450px] z-[5] relative max-md:mt-[100px] faq-section'
      },
      {
        className: 'mt-[450px] z-[5] relative max-md:mt-[100px] faq-section active',
        stagger: 0.5,
        duration: 3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: faqSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart none none none",
        }
      }
  );

  const becomeValuedPartner = document.querySelector('.become-valued-partner')
  const contactSection = document.querySelector('.contact-section')

  const becomeValuedPartnerWords = becomeValuedPartner.innerText.split(' ');

  becomeValuedPartner.innerHTML = becomeValuedPartnerWords.map(word => `<span class="become-valued-partner-word">${word}</span>`).join(' ');

  const becomeValuedPartnerSpan = document.querySelectorAll('.become-valued-partner-word');

  gsap.fromTo(
      becomeValuedPartnerSpan,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactSection,
        }
      }
  );

  const footerSection = document.querySelector(".footer")

  gsap.fromTo(
      footerSection,
      {
        className: 'footer'
      },
      {
        className: 'footer active',
        stagger: 0.5,
        duration: 3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart none none none",
        }
      }
  );

  const fullSections = gsap.utils.toArray(".full");

  const getScrollDistance = (section) => {
    const itemContainer = section.querySelector(".container");
    return -1 * (itemContainer.offsetHeight - section.offsetHeight);
  };

  fullSections.forEach((section) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 0%", // item position(start),distance from top(scroller-start)
        end: "350%", // starts when start is at scroller-start & ends when... +=2000
        pin: true,
        scrub: true, // scrub animation playhead with scrollbar
        markers: false,
        invalidateOnRefresh: true
      }
    });
    tl.to(section.querySelector(".container"), {
      y: () => getScrollDistance(section),
      ease: "none"
    });
  });
}

applyPhoneAnimation();
applyGSAPAnimations();