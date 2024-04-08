type TemplateListElement = {
	id: string;
	title: string;
	description: string;
};

type CreateTemplateListElementCommand = {
	title: string;
	description: string;
};

type DeleteTemplateListElementCommand = {
	id: string;
};
