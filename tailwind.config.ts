import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        bgc: "#FBFBFB",
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
