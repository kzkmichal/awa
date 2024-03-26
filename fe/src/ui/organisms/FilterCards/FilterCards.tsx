import React from "react";
import FilterCard from "./blocks/FilterCard";
import {
	TagWeight,
	TextComponentTag,
} from "@/ui/atoms/TextComponent";
import { AlignmentItems } from "@/lib/utils/alignment";
import { SectionText } from "@/ui/molecules/SectionText";

export type FilterCardsProps = {};

const cards = [
	{
		title: "Card 1",
		description: "Description for Card 1",
		href: "https://example.com/card1",
	},
	{
		title: "Card 2",
		description: "Description for Card 2",
		href: "https://example.com/card2",
	},
	{
		title: "Card 3",
		description: "Description for Card 3",
		href: "https://example.com/card3",
	},
];

const FilterCards = ({}: FilterCardsProps) => {
	const titleProps = {
		titleText: "Title",
		titleTag: TextComponentTag.H3,
		titleWeight: TagWeight.semibold,
		paragraphText: "paragraph",
		paragraphTag: TextComponentTag.P,
		alignment: AlignmentItems.center,
	};

	return (
		<>
			<section className="lg:row flex w-full flex-col gap-8">
				<SectionText {...titleProps} />
				<div className="flex flex-col gap-4 lg:flex-row">
					{cards.map((card, i) => (
						<FilterCard
							key={i}
							title={card.title}
							description={card.description}
							href={card.href}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default FilterCards;
