import { type Route } from "next";
import React from "react";
import ActiveLink from "@/ui/atoms/ActiveLink";

export type NavLinkType = {
	href: Route<string>;
	label: string;
	exact?: boolean;
};

const navLinks: NavLinkType[] = [
	{
		href: "/",
		label: "Home",
		exact: true,
	},
	{
		href: "/mainCategories",
		label: "All",
		exact: true,
	},
	{
		href: "/collections/new-in" as Route,
		label: "New In",
		exact: true,
	},
	{
		href: "/categories/t-shirts" as Route,
		label: "t-shirts",
		exact: false,
	},
];

export type FooterLinksProps = {};

const FooterLinks = ({}: FooterLinksProps) => {
	return (
		<ul className="mx-auto flex flex-row flex-wrap justify-between gap-4 gap-y-2">
			{navLinks.map((link) => (
				<li key={link.label}>
					<ActiveLink
						className="hover:underline "
						activeClassName="font-bold"
						exact={link.exact}
						href={link.href}
					>
						{link.label}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};

export default FooterLinks;
