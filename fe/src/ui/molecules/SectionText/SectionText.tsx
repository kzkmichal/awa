import React from "react";
import { twMerge } from "tailwind-merge";
import { TextComponent } from "../../atoms/TextComponent";
import { type SectionTextProps } from "./SectionText.types";
import { AlignmentItems } from "@/lib/utils/alignment";

export const SectionText = ({
	titleText,
	paragraphText,
	titleWeight,
	titleTag,
	paragraphWeight,
	paragraphTag,
	alignment = AlignmentItems.center,
	className,
}: SectionTextProps) => {
	return (
		<div
			className={twMerge(
				"flex w-full flex-col gap-4",
				className,
				alignment,
			)}
		>
			{titleText && (
				<TextComponent
					tag={titleTag}
					weight={titleWeight}
					text={titleText}
				/>
			)}
			{paragraphText && (
				<TextComponent
					tag={paragraphTag}
					weight={paragraphWeight}
					text={paragraphText}
				/>
			)}
		</div>
	);
};
