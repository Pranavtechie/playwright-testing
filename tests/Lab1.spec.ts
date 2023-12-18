import { expect, test } from "@playwright/test";
import { link } from "fs";

test.beforeEach(async ({ page }, testInfo) => {
	console.log(`Running ${testInfo.title}`);
	await page.goto("/");
});

test("Stylesheet is linked", async ({ page }) => {
	const linkElement = page.locator('link[rel="stylesheet"]');
	await expect(linkElement);
	await expect(linkElement.href).toEqual(
		expect.stringContaining("style.css")
	);
});
