import {
	type TagWeight,
	type TextComponentTag,
} from "../../atoms/TextComponent";
import { type AlignmentItems } from "@/lib/utils/alignment";

export type SectionTextProps = {
	titleText: string;
	titleTag: TextComponentTag;
	titleWeight?: TagWeight;
	paragraphText: string;
	paragraphTag: TextComponentTag;
	paragraphWeight?: TagWeight;
	alignment?: AlignmentItems;
	className?: string;
};
