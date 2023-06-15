gsap.set("#stick-figure-svg", { autoAlpha: 1 });
gsap.set("#stick-figure", { x: -135 });
gsap.set("#eyes-mouth", {transformOrigin: "50% 50%"})
gsap.set("#L-foot", { attr: { x1: 46, x2: 58 } });
gsap.set("#highlights", {autoAlpha: 0})
gsap.set(["#R-foot", "#L-foot", "#R-thigh", "#R-calf", "#L-thigh", "#L-calf"], {autoAlpha: 0})
gsap.set(".cover", {xPercent: -50, yPercent: -50})

let readyForDrag = gsap.timeline({defaults: {ease: "power1.in", duration: 0.2}});
readyForDrag
  .to(
    "#eyes-mouth",
    { x: "+=20" },
    "<"
  )
  .to(["#R-calf"], { attr: { x2: 95, y2: 198 } })
  .to(["#R-foot"], { attr: { x2: 95, x1: 107 } }, "<")
  .to(["#R-foot"], { attr: { y2: 198, y1: 190  } })
  .to(["#L-calf"], { attr: { x2: 71, y2: 198 } })
  .to(["#L-foot"], { attr: { x1: 74, x2: 86 } }, "<")
  .to(["#L-foot"], { attr: { y2: 190 } })

let highlight_tl = gsap.timeline({paused: true, defaults: {ease: "power4.in", duration: 0.2}})
highlight_tl
.to("#highlights", {autoAlpha: 1, duration: 0.1})
.to("#hl-1", { drawSVG: "0% 100%" })
 .to(["#hl-2", "#hl-3", "#hl-4"], { drawSVG: "100% 0%" }, "<")
 .to("#hl-1", { drawSVG: "50% 100%", autoAlpha: 0 }, "<")
 .to(["#hl-2", "#hl-3", "#hl-4"], { drawSVG: "50% 0%", autoAlpha: 0 }, "<")

let wakeup_tl = gsap.timeline({ paused: true, defaults: {ease: "power1.in", duration: 0.4} });

wakeup_tl
  .to(["#R-foot", "#L-foot", "#R-thigh", "#R-calf", "#L-thigh", "#L-calf"], {autoAlpha: 1, duration: 0.1})
  .to("#face", { attr: { cy: 90 }, duration: 0.2 })
  .fromTo(
    ["#R-thigh", "#R-calf"],
    { attr: { x1: 85, y1: 198 } },
    { attr: { x1: 85, y1: 173 }, duration: 0.2 },
    "<"
  )
  .fromTo(
    ["#L-thigh", "#L-calf"],
    { attr: { x1: 61, y1: 198 } },
    { attr: { x1: 61, y1: 173 }, duration: 0.2 },
    "<"
  )

  .from(
    "#eyes-mouth",
    { x: 25, y: 40, autoAlpha: 0 },
    "<"
  )
  .from(["#L-eye", "#R-eye"], {
    transformOrigin: "50% 50%",
    scaleY: 0,
  })
  .fromTo(["#L-eye", "#R-eye"],{scaleY:0}, {scaleY: 1, duration: 0.1, transformOrigin: "50% 50%"})
  .add(readyForDrag.play())
  .to("#stick-figure", { x: 142.5, duration: 0.8 })
  .to(["#R-foot", "#L-foot"], { attr: { y1: 198, y2: 198 }, duration: 0.1 })
  .to(["#L-foot"], { attr: { x1: 71, x2: 59 }, duration: 0.2 }, "<")
  .to(["#L-calf", "#L-thigh"], { attr: { x1: 71, x2: 71 }, duration: 0.1 }, "<")
  .to(["#R-calf", "#R-thigh"], { attr: { x1: 95, x2: 95 }, duration: 0.1 }, "<")
  .to("#face", { attr: { cx: 83, cy: 75 }, ease: "back" }, "<")
  .to("#eyes-mouth", { x: "-=9", y: "-=5" }, "<")
  .addLabel("goingtosleep")
  .to(["#L-calf", "#L-thigh"], { attr: { x1: 61, x2: 71 } })
  .to(["#R-calf", "#R-thigh"], { attr: { x1: 105, x2: 95 } }, "<")
  .to("#eyes-mouth", { y: "+=60", transformOrigin: "50% 50%", autoAlpha: 0 })
  .to("#face", { attr: { cx: 83, cy: 132 } }, "-=0.2");
wakeup_tl.timeScale(1.5)
let playButton = document.querySelector(".theme-toggle-button");
let themeDark = false
let cover = document.querySelector(".cover");
function completeHandler() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  gsap.to(".cover", {width: "100vw", height: "100vh", duration: 1}).then(() => document.body.style.backgroundColor = "#232323")
  
}
function completeReverseHandler() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  gsap.to(".cover", {width: "100vw", height: "100vh", duration: 1}).then(() => document.body.style.backgroundColor = "#CCCCCC")
  
}
playButton.addEventListener("click", () => {
   gsap.set(".cover", {width: "75px", height: "75px"})
  themeDark = !themeDark
  if(themeDark) {
    wakeup_tl.play().eventCallback("onComplete", completeHandler)
    highlight_tl.play()
  } else {
    wakeup_tl.reverse().then(completeReverseHandler)
    highlight_tl.restart()
  }
});

// GSDevTools.create();