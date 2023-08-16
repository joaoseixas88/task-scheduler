/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	collectCoverage: true,
	coverageDirectory: "coverage",
	collectCoverageFrom: [
		"<rootDir>/src/**/*.ts",
	],
	// transformIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest"
	},
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1'
	}
};

export default config;
