"use client";

import { type Route } from "next";
import React, { useState } from "react";
import NavIcon from "./blocks/NavIcon";
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

const Navigation = () => {
	const [isNavVisible, setNavVisible] = useState(false);

	const toggleNavigation = () => {
		setNavVisible(!isNavVisible);
	};

	return (
		<nav className=" border-1 relative mx-auto flex max-w-[1280px] justify-between border-solid px-4 py-4 align-middle shadow-sm lg:shadow-none">
			<NavIcon alt="logo" href="/" src="/vercel.svg" />

			<div className="lg:hidden">
				<button
					onClick={() => toggleNavigation()}
					className={`navbar-burger flex transform items-center rounded-md border-2 border-primary p-3 text-primary transition-all hover:bg-primary hover:text-white ${isNavVisible && "bg-primary text-white"}`}
				>
					<svg
						className="block h-4 w-4 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<div
				className={`absolute left-0 top-full z-10 w-full transform bg-bg p-4 shadow-sm lg:static lg:w-fit lg:bg-transparent lg:p-0 lg:shadow-none ${isNavVisible ? "block" : "hidden"} lg:block`}
			>
				<ul className="flex flex-col gap-2 lg:flex-row lg:gap-4">
					{navLinks.map((link) => (
						<li key={link.label}>
							<ActiveLink
								className="block rounded-md px-4 py-2 hover:bg-primary hover:text-white"
								activeClassName="bg-primary text-white"
								exact={link.exact}
								href={link.href}
							>
								{link.label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
