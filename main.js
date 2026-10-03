// Override the Geolocation API before the page requests it
const mockCoords = {
  latitude: 40.7128,
  longitude: -74.0060,
  accuracy: 10,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  speed: null
};

// Inject this into the page context via a content script or devtools snippet
Object.defineProperty(navigator, 'geolocation', {
  value: {
    getCurrentPosition: (success, error, options) => {
      success({
        coords: mockCoords,
        timestamp: Date.now()
      });
    },
    watchPosition: (success, error, options) => {
      success({
        coords: mockCoords,
        timestamp: Date.now()
      });
      return 1;
    },
    clearWatch: (id) => {}
  },
  writable: false,
  configurable: false
});

console.log("Geolocation spoofed — that's what the hell is going on.");
