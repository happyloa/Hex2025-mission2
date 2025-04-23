import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        bgc: {
          DEFAULT: "#FBFBFB",
          dark: "#F1F1F1",
        },
        content: "#4B4B4B",
        blue: "#0027D5",
      },
      fontSize: {
        "fs-3": [
          "1.75rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
          },
        ],
        "fs-6": [
          "1rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
      },
    },
  },
  plugins: [],
};
