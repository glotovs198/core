import { CreateTemplateForm } from "@/features/templates-list/pub/create-template-form";
import { TemplatesList } from "@/features/templates-list/pub/templates-list";

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col p-12">
			<CreateTemplateForm revalidatePagePath="/" />
			<TemplatesList revalidatePagePath="/" />
		</main>
	);
}
