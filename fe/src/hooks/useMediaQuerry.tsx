import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
export type Screens = typeof fullConfig.theme.screens;

const useMediaQuery = (className: keyof Screens): boolean => {
	const [isMatch, setIsMatch] = useState(false);

	useEffect(() => {
		const updateMatch = () => {
			const mediaQuery = window.matchMedia(
				`(min-width: ${getPxValue(className)})`,
			);
			setIsMatch(mediaQuery.matches);
		};

		updateMatch();

		window.addEventListener("resize", updateMatch);

		return () => window.removeEventListener("resize", updateMatch);
	}, [className]);

	return isMatch;
};

const getPxValue = (
	className: keyof Screens = "lg",
): string | number => {
	return fullConfig.theme.screens[className] || className;
};
export default useMediaQuery;
