import Link from "next/link";
import Image from "next/image";

interface NavIconProps {
	href: string;
	src: string;
	alt: string;
}

const NavIcon: React.FC<NavIconProps> = ({ href, src, alt }) => {
	return (
		<Link href={href}>
			<Image src={src} alt={alt} width={100} height={24} />
		</Link>
	);
};

export default NavIcon;
