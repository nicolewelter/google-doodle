//  https://codepen.io/nicolewelter/pen/jOPMVMm

gsap.to('.lips', { 
  repeat: -1, 
  yoyo: true, 
  repeatDelay: .5,
  scale: .033,
  ease: " back. out(2)"
  });

gsap.to('.blush', { 
  repeat: -1, 
  yoyo: true, 
  repeatDelay: .5,
  opacity: 0,
  ease: "power1. out"
  });

gsap.to('.head', { 
  x: -7, 
  y: -7,
  repeat: -1,
  yoyo: true, 
  repeatDelay: .5,
  ease: "power1. out",
  });

gsap.to('.arm', { 
  rotate: -15,
  repeat: -1,
  yoyo: true, 
  repeatDelay: .5,
  ease: "power1. out",
  });

// GSAP Code for motionpath

gsap.to(".heart", {
  duration: 2,
  repeatdelay: 1,
  repeat: -1,
  yoyo: true,
  ease: "slow( 0.7, 0.7)",
  motionPath:{
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5]
  }
});