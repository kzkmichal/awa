export type TextComponentProps = {
	tag?: TextComponentTag;
	text?: string;
	weight?: TagWeight;
};

export enum TextComponentTag {
	H1 = "h1",
	H2 = "h2",
	H3 = "h3",
	H4 = "h4",
	H5 = "h5",
	H6 = "h6",
	P = "p",
}

export const TextComponentTagSize: Record<TextComponentTag, string> =
	{
		[TextComponentTag.H1]: "text-6xl",
		[TextComponentTag.H2]: "text-5xl",
		[TextComponentTag.H3]: "text-4xl",
		[TextComponentTag.H4]: "text-3xl",
		[TextComponentTag.H5]: "text-2xl",
		[TextComponentTag.H6]: "text-xl",
		[TextComponentTag.P]: "text-base",
	};

export enum TagWeight {
	"normal" = "font-normal",
	"medium" = "font-medium",
	"semibold" = "font-semibold",
	"bold" = "font-bold",
}
