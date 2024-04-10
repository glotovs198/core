"use client";

import { Button } from "@/shared/ui/button";
import {
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenu,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function Profile() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="p-px rounded-full self-center h-8 w-8"
					>
						<Avatar>
							<AvatarFallback>AC</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56 mr-2">
					<DropdownMenuLabel>
						<p>Мой аккаунт</p>
						<p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
							Sergey
						</p>
					</DropdownMenuLabel>
					<DropdownMenuGroup></DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Link href="/profile/1">
								<User className="mr-2 h-4 w-4" />
								<span>Профиль</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Выйти</span>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
