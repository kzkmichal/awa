import React from "react";
import FooterLinks from "./blocks/FooterLinks";

export type FooterProps = {};

const Footer = ({}: FooterProps) => {
	return (
		<footer className=" border-1 relative mx-auto flex max-w-[1280px] justify-between border-solid px-4 py-4 align-middle shadow-sm lg:shadow-none">
			<FooterLinks />
		</footer>
	);
};

export default Footer;
