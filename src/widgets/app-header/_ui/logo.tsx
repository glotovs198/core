import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export function Logo() {
	return (
		<Link className="flex items-center space-x-2" href="/">
			<LogoIcon />
		</Link>
	);
}
