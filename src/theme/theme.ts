import { Config } from "tailwindcss";
import { boxShadow, colors, fontFamily } from "./extensions";

export const theme: Config["theme"] = {
	extend: {
		colors,
		fontFamily,
		boxShadow,
	},
};
