const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html'
  ],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["lydian", "sans-serif"],
      body: ["Lora", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      "rose":"#DA086D",
      "lightblue":"#018FFE",
      "darkblue":"#413AE4",
      "grape":"#7A3FB7",
      "fandango":"#BA3589",
      transparent: "transparent",
      primary: "#264653",
      secondary: "#2a9d8f",
      white: "#ffffff",
      black: "#000000",
      yellow: "#dec13a",
      lila: "#f4a261",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "rose-from": "rgba(218,8,109, 0.95)",
      "darkblue-to": "rgba(65,58,228, 0.93)",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        '10000': '10000ms',
      },
      backgroundImage: {
        'hero-bg': "url('/assets/img/backgrounds/background.png.webp')",
        'footer-banner': "url('/assets/img/backgrounds/banner_bg.png')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
