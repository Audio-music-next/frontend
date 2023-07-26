module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        header: "url('../assents/image/bg-header.jpg')",
        presentation: "url('../assents/image/bg-presentation.jpg')",
      },
      transitionProperty: {
        height: "height",
      },
      borderRadius: {
        "radius-1": "0.25rem",
        "radius-2": "0.75rem",
        "radius-3": "1rem",
      },
      colors: {
        "gray-1": "#212529",
        "gray-2": "#495057",
        "gray-3": "#CED3D7",
        "gray-4": "#F1F3F5",
        "gray-5": "#F8F9FA",
        "random-1": "#70D6FF",
        "random-2": "#FF70A6",
        "random-3": "#FF9770",
        "random-4": "#E9FF70",
      },
      fontSize: {
        "heading-1": "44px",
        "heading-2": "32px",
        "heading-3": "28px",
        "heading-4": "24px",
        "heading-5": "20px",
        "body-1": "16px",
        "body-2": "14px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  plugins: [],
};
