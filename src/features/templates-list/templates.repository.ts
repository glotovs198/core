import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class TemplatesRepository {
	getTemplatesList = cache(
		(): Promise<TemplateListElement[]> => dbClient.template.findMany()
	);

	createTemplateElement = (
		command: CreateTemplateListElementCommand
	): Promise<TemplateListElement> => {
		return dbClient.template.create({ data: command });
	};

	deleteTemplateElement = (command: DeleteTemplateListElementCommand) => {
		return dbClient.template.delete({ where: { id: command.id } });
	};
}

export const templatesRepository = new TemplatesRepository();
