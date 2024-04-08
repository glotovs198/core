"use server";

import { revalidatePath } from "next/cache";
import { templatesRepository } from "./templates.repository";

export const createTemplateAction = async (
	command: CreateTemplateListElementCommand,
	revalidatePagePath: string
) => {
	await templatesRepository.createTemplateElement(command);
	revalidatePath(revalidatePagePath);
};
