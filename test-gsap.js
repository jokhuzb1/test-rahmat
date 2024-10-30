 // Register GSAP plugins
 gsap.registerPlugin(ScrollTrigger);

 // Get all video elements
 let videos = gsap.utils.toArray(".video-wrapper");

 // Loop through each video element and create a ScrollTrigger
 videos.forEach((videoWrapper, i) => {
   let video = videoWrapper.querySelector("video");
   video.pause(); // Pause all videos initially
   
   gsap.set(videoWrapper, { opacity: 0 }); // Start all videos hidden
   
   ScrollTrigger.create({
     trigger: videoWrapper,
     start: "top center",
     end: "bottom center",
     onEnter: () => {
       gsap.to(videoWrapper, { opacity: 1, duration: 0.5 });
       video.currentTime = 0; // Restart video
       video.play();
     },
     onLeave: () => {
       gsap.to(videoWrapper, { opacity: 0, duration: 0.5 });
       video.pause();
     },
     onEnterBack: () => {
       gsap.to(videoWrapper, { opacity: 1, duration: 0.5 });
       video.currentTime = 0; // Restart video
       video.play();
     },
     onLeaveBack: () => {
       gsap.to(videoWrapper, { opacity: 0, duration: 0.5 });
       video.pause();
     }
   });
 });