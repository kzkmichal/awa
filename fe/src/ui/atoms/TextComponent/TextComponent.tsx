import React from "react";
import { twMerge } from "tailwind-merge";
import {
	TagWeight,
	type TextComponentProps,
	TextComponentTagSize,
	TextComponentTag,
} from "./TextComponent.types";

export const TextComponent = ({
	tag = TextComponentTag.P,
	text,
	weight = TagWeight.normal,
}: TextComponentProps) => {
	const Tag = tag;
	const tagSize = TextComponentTagSize[tag];

	return <Tag className={twMerge(tagSize, weight)}>{text}</Tag>;
};
