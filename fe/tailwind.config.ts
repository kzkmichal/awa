import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			// screens: {
			// 	xl: "1380px",
			// },
			fontFamily: {
				sans: ["var(--font-opensans)"],
			},
			colors: {
				primary: "#ffa500",
				secondary: "#c46406",
				"custom-text-color": "#140f0d",
				bg: "#EFEFEF",
			},
		},
	},
	plugins: [],
};
export default config;
