"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createTemplateAction } from "../actions";
import { Button } from "@/shared/ui/button";

const createTemplateFormSchema = z.object({
	title: z.string(),
	description: z.string()
});

export function CreateTemplateForm({
	revalidatePagePath
}: {
	revalidatePagePath: string;
}) {
	const [isCreateTransition, startCreateTransition] = useTransition();

	const form = useForm({
		resolver: zodResolver(createTemplateFormSchema),
		defaultValues: {
			title: "",
			description: ""
		}
	});

	const onSubmit = (data: any) => {
		startCreateTransition(async () => {
			createTemplateAction(data, revalidatePagePath);
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Заголовок</FormLabel>
							<FormControl>
								<Input placeholder="Название" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Описание</FormLabel>
							<FormControl>
								<Textarea placeholder="Описание шаблона" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isCreateTransition}>
					Создать
				</Button>
			</form>
		</Form>
	);
}
