import { test, expect } from "@playwright/test";

test("create and delete templates list", async ({ page }) => {
	await page.locator("body").click();
	await page.goto("http://localhost:3000");
	await page.locator("div").filter({ hasText: "Заголовок" }).click();
	await page.getByPlaceholder("Название").click();
	await page.getByPlaceholder("Название").fill("test template");
	await page.getByPlaceholder("Описание шаблона").click();
	await page.getByPlaceholder("Описание шаблона").fill("test description");
	await page.getByRole("button", { name: "Создать" }).click();
	await expect(page.getByText("test templatetest description")).toBeVisible();
	await page
		.locator("div")
		.filter({ hasText: /^test templatetest descriptionУдалить$/ })
		.getByRole("button")
		.click();
	await expect(
		page.getByText("test templatetest description")
	).not.toBeVisible();
});
