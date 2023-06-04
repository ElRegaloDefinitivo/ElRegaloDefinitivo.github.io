/**
Submission for the GSAP weekly challenge LOOP!

A animation of a Roller Coaster car doing a loop using GSAP.

A souvenir photograph is taken at the loops peak which rider can purchase at the kiosk after the ride!
*/


gsap.registerPlugin(MotionPathPlugin);

const coasterTimeline = gsap.timeline({ repeat: -1 });

/**
 * Generates a string containing a combination of letters and numbers
 * @returns string
 */
const randomSeed = () => {
  return Math.random().toString(36).slice(2);
};

/**
 * Returns a random hex colour from a list of colours
 * @param frontRiderColour if provided, the returned colour will not be the same as the one provided
 * @returns string
 */
const randomColour = (frontRiderColour = false) => {
  const colours = [
  "#D56C0C",
  "#605DE4",
  "#238D80",
  "#333333",
  "#E9B729",
  "#9A3E91"];

  let randomColour = colours[Math.floor(Math.random() * colours.length)];

  while (randomColour === frontRiderColour) {
    randomColour = colours[Math.floor(Math.random() * colours.length)];
  }

  return randomColour;
};

/**
 * Changes the faces abd colours of both riders
 */
const changeRiders = () => {
  // Get all riders
  const riders = document.querySelectorAll("#photo-frame image");

  // Change front rider head
  riders[0].setAttribute(
  "href",
  `https://avatars.dicebear.com/api/big-smile/${randomSeed()}.svg?w=200&scale=90`);


  // Get a new colour for the front rider
  const frontRiderColour = randomColour();
  // Change front riders clothing colour
  document.
  getElementById("photo-front-body").
  setAttribute("fill", frontRiderColour);
  document.
  getElementById("photo-front-left-arm").
  setAttribute("fill", frontRiderColour);
  document.
  getElementById("photo-front-right-arm").
  setAttribute("fill", frontRiderColour);

  // Change back rider head
  riders[1].setAttribute(
  "href",
  `https://avatars.dicebear.com/api/big-smile/${randomSeed()}.svg?w=200&scale=90`);


  // Get a new colour for the back rider (not the same as the front rider)
  const backRiderColour = randomColour(frontRiderColour);
  // Change front riders clothing colour
  document.
  getElementById("photo-back-body").
  setAttribute("fill", backRiderColour);
  document.
  getElementById("photo-back-left-arm").
  setAttribute("fill", backRiderColour);
  document.
  getElementById("photo-back-right-arm").
  setAttribute("fill", backRiderColour);
};

const coasterDuration = 5;

// -------------------------
// Start of coaster timeline
// -------------------------
coasterTimeline.set("#camera", { scale: 1 });
coasterTimeline.to("#car", {
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.4],
    autoRotate: 180,
    start: 0,
    end: 1 },

  transformOrigin: "50% 50%",
  duration: coasterDuration,
  ease: "slow(0.01, 0.9, false)" });


// Timeline labels
coasterTimeline.addLabel("slowMoStart", "<35%");
coasterTimeline.addLabel("cameraFlash", "<40%");
coasterTimeline.addLabel("slowMoEnd", "<75%");

// Photo fade out
coasterTimeline.add(
gsap.to("#photo", { duration: 1, opacity: 0, onComplete: () => changeRiders() }),
"<0%");


// Camera flash
coasterTimeline.add(
gsap.fromTo(
"#camera-flash",
{ strokeWidth: 30, scale: 0, transformOrigin: "50% 50%", opacity: 1 },
{
  duration: 1,
  strokeWidth: 2,
  scale: 4,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: "power3.out" }),


"cameraFlash");


// Camera bounce
coasterTimeline.add(
gsap.fromTo(
"#camera",
{ scale: 0.5 },
{ duration: 1, scale: 1, ease: "elastic" }),

"cameraFlash");


// Photo fade in
coasterTimeline.add(
gsap.to("#photo", { duration: 0.3, opacity: 1, delay: 0.3 }),
"cameraFlash");


// Riders arm animation(s)
coasterTimeline.add(
gsap.from(["#front-arm", "#back-arm"], {
  duration: coasterDuration / 2,
  rotation: 90,
  transformOrigin: "50% 100%",
  ease: "elastic.out" }),

"slowMoStart");


coasterTimeline.add(
gsap.to(["#front-arm", "#back-arm"], {
  duration: coasterDuration / 5,
  rotation: 90,
  transformOrigin: "50% 100%",
  ease: "none" }),

"slowMoEnd");