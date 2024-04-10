import { Button } from "@/shared/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";

export function Layout({
	logo,
	nav,
	profile,
	actions
}: {
	logo: React.ReactNode;
	nav: React.ReactNode;
	profile: React.ReactNode;
	actions: React.ReactNode;
}) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]">
			<div className="container flex h-14 items-center">
				<div className="md:hidden mr-2">
					<Sheet>
						<SheetTrigger>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="bottom">
							<SheetHeader className="border-b pb-5 mb-5">{logo}</SheetHeader>
							{nav}
						</SheetContent>
					</Sheet>
				</div>

				<div className="mr-4 hidden md:flex mr-4">{logo}</div>
				<div className="items-center flex-1 flex">
					<div className="hidden md:flex">{nav}</div>
					<div className="flex flex-1 items-center justify-end space-x-3">
						{actions}
						{profile}
					</div>
				</div>
			</div>
		</header>
	);
}
