import type { StorybookConfig } from "@storybook/nextjs";
import path from 'node:path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  // https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react#with-module-aliases
  webpackFinal: async (config) => {
    if (config.resolve) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias = {
        ...config.resolve.alias,
        // Example from documentation:
        // '@/lib/db': path.resolve(__dirname, './lib/db.mock.ts'),
        // --------------------------------------------------------
        // WORKS — we can see replacement in TestComponent story
        nanoid: path.resolve(__dirname, './mocks/nanoid.ts'),
        // WORKS — we can see replacement in TestComponent story
        '../../util/testModule': path.resolve(__dirname, './mocks/testModule.ts'),
        // DOES NOT WORK
        // — BROKEN_PATH is used intentionally: if module will be requested, storybook build should fail (but it does not)
        // — if we use correct path, replacement in TestComponent story won't work anyway
        '@/src/util/testModule$': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/src/util/testModule': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/src/util': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/util': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/util/testModule': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/util/testModule$': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/testModule': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
        '@/testModule$': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
      };
    }

    // console.log(config.resolve?.alias);

    return config;
  },
};
export default config;
