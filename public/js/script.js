!(function () {
  SmoothScroll({
    // Scrolling Core
    animationTime: 600, // [ms]
    stepSize: 50, // [px]

    // Acceleration
    accelerationDelta: 20, // 50
    accelerationMax: 2, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: "",
  });
})();
