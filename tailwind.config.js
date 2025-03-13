module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				nearlyWhite: "#fafcff",
				lightestBlue: "#F1F6FE",
				lightBlue: "#A8CEFF",
				regularBlue: "#0F22FD",
				oceanBlue: "#0C8CFD",
				lightViolet: "#9DACE1",
				black: "#2D2A3C",
				lighterRegularBlue: "#2553D7",
				lighterOceanBlue: "#64A4F3",
			},
			fontFamily: {
				dmSans: "DM Sans, sans-serif",
			},
			fontSize: {
				large: "26px",
			},
			boxShadow: {
				regular: "0px 8px 24px rgba(149, 157, 165, 0.8)",
				lighter: "0px 8px 24px rgba(241, 246, 254, 1)",
				light: "0px 0px 24px rgba(168, 206, 255, 0.4)",
			},
		},
	},
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
};
