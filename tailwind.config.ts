const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");


const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
   extend: {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },

  animation: {
    scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    bounceOnce: "bounceOnce 0.6s ease-out",
    pop: "pop 0.3s ease-out",
    fadeIn: "fadeIn 1s ease-out",
    zoomIn: "zoomIn 0.4s ease-out",
    blob: 'blob 7s infinite',
  },

  keyframes: {
    scroll: {
      to: { transform: "translate(calc(-50% - 0.5rem))" },
    },
    bounceOnce: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10%)" },
    },
    pop: {
      "0%": { transform: "scale(0.9)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" },
    },
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    zoomIn: {
      "0%": { transform: "scale(0.8)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" },
    },
    blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },

  },

  backgroundImage: {
    'grid-pattern': `url("${svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="gray"><path d="M0 .5H31.5V32"/></svg>`
    )}")`,
    'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
    'conic-gradient': 'conic-gradient(var(--tw-gradient-stops))',
    'dots': `url("${svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="8" cy="8" r="2" fill="gray" /></svg>`
    )}")`,
  },
}

  },
  plugins: [addVariablesForColors,    function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        "bg-grid": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


