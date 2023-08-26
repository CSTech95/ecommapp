/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "../node_modules/ts-jest/jest-preset.js",
	testEnvironment: "node",
	setupFilesAfterEnv: ["./src/test/setup.ts"],
};
