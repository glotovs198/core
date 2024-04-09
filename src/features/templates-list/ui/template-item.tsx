"use client";

import { Button } from "@/shared/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/shared/ui/card";
import { useTransition } from "react";

export function TemplateItem({
	template,
	onDelete
}: {
	template: TemplateListElement;
	onDelete: () => Promise<void>;
}) {
	const [isLoadingDelete, startDeleteTransition] = useTransition();

	const handleDelete = () => {
		startDeleteTransition(async () => {
			await onDelete();
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{template.title}</CardTitle>
				<CardDescription>{template.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button disabled={isLoadingDelete} onClick={handleDelete}>
					Удалить
				</Button>
			</CardFooter>
		</Card>
	);
}
