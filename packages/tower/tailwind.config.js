const plugin = require("tailwindcss/plugin");

const paddingMargin = {
  auto: "auto",
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.875rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "-px": "-1px",
  "-1": "-0.25rem",
  "-2": "-0.5rem",
  "-3": "-0.75rem",
  "-4": "-1rem",
  "-5": "-1.25rem",
  "-6": "-1.5rem",
  "-8": "-2rem",
  "-10": "-2.5rem",
  "-12": "-3rem",
  "-16": "-4rem",
  "-20": "-5rem",
  "-24": "-6rem",
  "-32": "-8rem",
};
const sizings = {
  "0": "0",
  "1": "1",
  full: "100%",
  "1/2": "50%",
  "2/2": "100%",

  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "4/4": "100%",

  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.33333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  "12/12": "100%",
  "4px": "4px",
  "8px": "8px",
  "12px": "12px",
  "14px": "14px",
  "16px": "16px",
  "18px": "18px",
  "20px": "20px",
  "24px": "24px",
  "26px": "26px",
  "30px": "30px",
  "36px": "36px",
  "46px": "46px",
  "52px": "52px",
  "56px": "56px",
  "64px": "64px",
  "72px": "72px",
  "100px": "100px",
  "116px": "116px",
  "200px": "200px",
  "220px": "220px",
  "300px": "300px",
  "400px": "400px",
  "500px": "500px",
  "600px": "600px",
  "700px": "700px",
  "800px": "800px",
  "900px": "900px",
  "1000px": "1000px",
};

const width = sizings;
const minWidth = sizings;
const maxWidth = sizings;
const height = sizings;
const minHeight = sizings;
const maxHeight = sizings;
const inset = sizings;

const backgroundColor = (theme) => ({
  ...theme("colors"),
});

const flex = {
  "1": "1 1 0%",
  auto: "1 1 auto",
  inherit: "inherit",
  "2": "2 2 0%",
  "1/12": "0 0 8.333333%",
  "2/12": "0 0 16.666667%",
  "3/12": "0 0 25%",
  "4/12": "0 0 33.33333%",
  "5/12": "0 0 41.666667%",
  "6/12": "0 0 50%",
  "7/12": "0 0 58.333333%",
  "8/12": "0 0 66.666667%",
  "9/12": "0 0 75%",
  "10/12": "0 0 83.333333%",
  "11/12": "0 0 91.666667%",
  "12/12": "0 0 100%",
  full: "0 0 100%",
};
const padding = paddingMargin;
const margin = paddingMargin;

module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        ...theme("colors"),
      }),
      inset,
      padding,
      margin,
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
    },
    flex,
    backgroundColor,
  },
  variants: {
    alignItems: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderRadius: ["responsive", "hover", "focus"],
    display: ["responsive", "hover", "focus"],
    flex: ["responsive", "hover", "focus"],
    flexGrow: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    inset: ["responsive"],
    justifyContent: ["responsive", "hover", "focus"],
    lineHeight: ["responsive", "hover", "focus"],
    minHeight: ["responsive", "hover", "focus"],
    minWidth: ["responsive", "hover", "focus"],
    padding: ["responsive", "hover", "focus"],
    position: ["responsive", "hover", "focus"],
    visibility: ["responsive", "hover", "focus"],
    width: ["responsive", "hover", "focus"],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        "flex-basis": {
          "flex-basis": "0",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
