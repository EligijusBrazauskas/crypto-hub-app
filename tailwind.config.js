import { boxShadow, colors, fontFamily } from "./src/theme";

const config = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors,
			fontFamily,
			boxShadow,
		},
	},
};

export default config;
