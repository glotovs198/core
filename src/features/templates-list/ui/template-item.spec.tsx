import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TemplateItem } from "./template-item";

describe("template item", () => {
	it("should call delete callback", async () => {
		const onDelete = jest.fn();
		render(
			<TemplateItem
				template={{
					id: "123sdklfjsjkldhklsd",
					title: "title",
					description: "description"
				}}
				onDelete={onDelete}
			/>
		);

		await userEvent.click(screen.getByText("Удалить"));
		expect(onDelete).toHaveBeenCalled();
	});
});
