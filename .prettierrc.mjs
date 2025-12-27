/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	jsxSingleQuote: true,
	printWidth: 120,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
