import React from "react";
import { twMerge } from "tailwind-merge";

export type FilterCardProps = {
	title: string;
	description: string;
	href: string;
	bgColor?: string;
};

const FilterCard = ({
	title,
	description,
	href,
	bgColor = "from-primary",
}: FilterCardProps) => {
	return (
		<div className=" group relative flex-1 overflow-hidden rounded-xl border border-slate-300 bg-bg bg-opacity-50 p-8 dark:border-gray-800 dark:bg-gray-900">
			<div
				aria-hidden="true"
				className={twMerge(
					`absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b ${bgColor} to-white opacity-40 blur-2xl duration-300 group-hover:-translate-y-1 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10`,
				)}
			></div>
			<div className="relative">
				<div className="relative flex size-12 rounded-lg border border-blue-500/10 *:relative *:m-auto *:size-6 before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-white before:bg-gradient-to-b before:from-blue-100 before:shadow dark:border-white/15 dark:bg-gray-900 dark:before:border-white/20 dark:before:from-white/10 dark:before:to-transparent dark:before:shadow-gray-950">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="mb-4 h-12 w-12 text-gray-900"
					>
						<path
							fillRule="evenodd"
							d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
							clipRule="evenodd"
						/>
						<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
					</svg>
				</div>

				<div className="mt-6 pb-6">
					<p className="text-lg">{title}</p>
					<p className="text-gray-700 dark:text-gray-300">
						{description}
					</p>
				</div>

				<div className="-mb-8 flex gap-3 border-t border-slate-300 py-4 dark:border-gray-800">
					<a
						href={href || "/"}
						className="group flex h-8 items-center justify-center gap-1.5 rounded-xl bg-gray-100 px-3.5 text-sm text-gray-950 *:select-none hover:bg-gray-200/75 active:bg-gray-100 disabled:border disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950 *:disabled:opacity-20 dark:bg-gray-500/10 dark:text-white dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white [&>*:not(.sr-only)]:relative"
					>
						<span>visit</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FilterCard;
