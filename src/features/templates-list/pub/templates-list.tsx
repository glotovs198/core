import { revalidatePath } from "next/cache";
import { templatesRepository } from "../templates.repository";
import { TemplateItem } from "../ui/templates-item";

export async function TemplatesList({
	revalidatePagePath
}: {
	revalidatePagePath: string;
}) {
	const templatesList = await templatesRepository.getTemplatesList();

	const handleDeleteAction = async (templateId: string) => {
		"use server";

		await templatesRepository.deleteTemplateElement({ id: templateId });
		revalidatePath(revalidatePagePath);
	};

	return (
		<div className="flex flex-col gap-3 mt-10">
			{templatesList.map((template) => (
				<TemplateItem
					key={template.id}
					template={template}
					onDelete={handleDeleteAction.bind(null, template.id)}
				/>
			))}
		</div>
	);
}
