const NORTH_AMERICAN_MARKETS = [
  {
    name: 'Atlanta',
    id: 23,
    coords: {
      latitude: 33.748995,
      longitude: -84.387982,
    },
  },
  {
    name: 'Austin',
    id: 60,
    coords: {
      latitude: 30.267153,
      longitude: -97.743061,
    },
  },
  {
    name: 'Baltimore',
    id: 46,
    coords: {
      latitude: 39.290385,
      longitude: -76.612189,
    },
  },
  {
    name: 'Boise',
    id: 102,
    coords: {
      latitude: 43.61871,
      longitude: -116.214607,
    },
  },
  {
    name: 'Boston',
    id: 10,
    coords: {
      latitude: 42.360082,
      longitude: -71.05888,
    },
  },
  {
    name: 'Charlotte',
    id: 61,
    coords: {
      latitude: 35.227087,
      longitude: -80.843127,
    },
  },
  {
    name: 'Chicago',
    id: 14,
    coords: {
      latitude: 41.878114,
      longitude: -87.629798,
    },
  },
  {
    name: 'Connecticut',
    id: 34,
    coords: {
      latitude: 41.763711,
      longitude: -72.685093,
    },
  },
  {
    name: 'Dallas',
    id: 22,
    coords: {
      latitude: 32.776664,
      longitude: -96.796988,
    },
  },
  {
    name: 'Denver',
    id: 27,
    coords: {
      latitude: 39.739236,
      longitude: -104.990251,
    },
  },
  {
    name: 'Detroit',
    id: 24,
    coords: {
      latitude: 42.331427,
      longitude: -83.045754,
    },
  },
  {
    name: 'Houston',
    id: 826,
    coords: {
      latitude: 29.760427,
      longitude: -95.369803,
    },
  },
  {
    name: 'Indianapolis',
    id: 58,
    coords: {
      latitude: 39.768403,
      longitude: -86.158068,
    },
  },
  {
    name: 'Los Angeles',
    id: 13,
    coords: {
      latitude: 34.052234,
      longitude: -118.243685,
    },
  },
  {
    name: 'Miami',
    id: 33,
    coords: {
      latitude: 25.76168,
      longitude: -80.19179,
    },
  },
  {
    name: 'Minneapolis',
    id: 20,
    coords: {
      latitude: 44.977753,
      longitude: -93.265011,
    },
  },
  {
    name: 'Moline',
    id: 807,
    coords: {
      latitude: 41.5067,
      longitude: -90.515134,
    },
  },
  {
    name: 'New Jersey',
    id: 30,
    coords: {
      latitude: 40.660118,
      longitude: -74.128876,
    },
  },
  {
    name: 'New York City',
    id: 11,
    coords: {
      latitude: 40.712784,
      longitude: -74.005941,
    },
  },
  {
    name: 'Northern Virginia',
    id: 51,
    coords: {
      latitude: 38.804836,
      longitude: -77.046921,
    },
  },
  {
    name: 'Ohio',
    id: 32,
    coords: {
      latitude: 40.417287,
      longitude: -82.907123,
    },
  },
  {
    name: 'Orange County',
    id: 19,
    coords: {
      latitude: 33.717471,
      longitude: -117.831143,
    },
  },
  {
    name: 'Orlando',
    id: 72,
    coords: {
      latitude: 28.538335,
      longitude: -81.379236,
    },
  },
  {
    name: 'Philadelphia',
    id: 18,
    coords: {
      latitude: 39.952584,
      longitude: -75.165222,
    },
  },
  {
    name: 'Phoenix',
    id: 31,
    coords: {
      latitude: 33.448377,
      longitude: -112.074037,
    },
  },
  {
    name: 'Portland, OR',
    id: 41,
    coords: {
      latitude: 45.523062,
      longitude: -122.676482,
    },
  },
  {
    name: 'Raleigh/Durham',
    id: 803,
    coords: {
      latitude: 35.77959,
      longitude: -78.638179,
    },
  },
  {
    name: 'Rhode Island',
    id: 73,
    coords: {
      latitude: 41.823989,
      longitude: -71.412834,
    },
  },
  {
    name: 'Richmond',
    id: 78,
    coords: {
      latitude: 37.540725,
      longitude: -77.436048,
    },
  },
  {
    name: 'San Diego',
    id: 16,
    coords: {
      latitude: 32.715738,
      longitude: -117.161084,
    },
  },
  {
    name: 'San Francisco',
    id: 12,
    coords: {
      latitude: 37.774929,
      longitude: -122.419416,
    },
  },
  {
    name: 'Seattle',
    id: 17,
    coords: {
      latitude: 47.606209,
      longitude: -122.332071,
    },
  },
  {
    name: 'Silicon Valley',
    id: 15,
    coords: {
      latitude: 37.441883,
      longitude: -122.143019,
    },
  },
  {
    name: 'St. Louis',
    id: 37,
    coords: {
      latitude: 38.627003,
      longitude: -90.199404,
    },
  },
  {
    name: 'Tampa',
    id: 68,
    coords: {
      latitude: 27.950575,
      longitude: -82.457178,
    },
  },
  {
    name: 'Washington, DC',
    id: 25,
    coords: {
      latitude: 38.907192,
      longitude: -77.036871,
    },
  },
  {
    name: 'Wisconsin',
    id: 881,
    coords: {
      latitude: 43.78444,
      longitude: -88.787868,
    },
  },
  {
    name: 'Toronto',
    id: 40,
    coords: {
      latitude: 43.653226,
      longitude: -79.383184,
    },
  },
  {
    name: 'Vancouver',
    id: 47,
    coords: {
      latitude: 49.282729,
      longitude: -123.120738,
    },
  },
];

const EUROPEAN_MARKETS = [
  {
    name: 'Amsterdam',
    id: 43,
    coords: {
      latitude: 52.370216,
      longitude: 4.895168,
    },
  },
  {
    name: 'London',
    id: 29,
    coords: {
      latitude: 51.507351,
      longitude: -0.127758,
    },
  },
  {
    name: 'Paris',
    id: 35,
    coords: {
      latitude: 48.856614,
      longitude: 2.352222,
    },
  },
];

const ASIAN_MARKETS = [
  {
    name: 'Fukuoka',
    id: 92,
    coords: {
      latitude: 33.590355,
      longitude: 130.401716,
    },
  },
  {
    name: 'Nagoya',
    id: 79,
    coords: {
      latitude: 35.181446,
      longitude: 136.906398,
    },
  },
  {
    name: 'Osaka',
    id: 64,
    coords: {
      latitude: 34.693738,
      longitude: 135.502165,
    },
  },
  {
    name: 'Tokyo',
    id: 44,
    coords: {
      latitude: 35.709026,
      longitude: 139.731992,
    },
  },
];

const AUSTRALIAN_MARKETS = [
  {
    name: 'Melbourne',
    id: 36,
    coords: {
      latitude: -37.816279,
      longitude: 144.964246,
    },
  },
  {
    name: 'Sydney',
    id: 39,
    coords: {
      latitude: -33.86882,
      longitude: 151.209296,
    },
  },
];

const ALL_MARKETS = [
  ...NORTH_AMERICAN_MARKETS,
  ...EUROPEAN_MARKETS,
  ...ASIAN_MARKETS,
  ...AUSTRALIAN_MARKETS,
];

const DEFAULT_MARKET = NORTH_AMERICAN_MARKETS[4];

module.exports = {
  MARKETS: {
    ALL_MARKETS,
    DEFAULT_MARKET,
    NORTH_AMERICAN_MARKETS,
    EUROPEAN_MARKETS,
    ASIAN_MARKETS,
    AUSTRALIAN_MARKETS,
  },
  URLS: {
    COURSES: {
      LIST: 'courses/',
      FULL_COURSES: 'full-courses/',
      GYM_SHORTS: 'gym-shorts/',
      TAKE_FIVE: 'take5/',
    },
    BLOG: {
      LIST: 'blog/',
      SINGLE_POST: 'blog/post/',
    },
  },
};
