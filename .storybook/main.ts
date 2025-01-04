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
        // — we can NOT see replacement in TestComponent story
        // — if we provide broken path instead of real mock file, Storybook build won't fail because all these aliases replacements actually ignored
        '@/util': path.resolve(__dirname, './mocks/testModule.ts'),
        '@/util/testModule': path.resolve(__dirname, './mocks/testModule.ts'),
        '@/util/testModule$': path.resolve(__dirname, './mocks/testModule.ts'),
        '@/testModule': path.resolve(__dirname, './mocks/testModule.ts'),
        '@/testModule$': path.resolve(__dirname, './mocks/testModule.ts'),
      };
    }

    // console.log(config.resolve?.alias);

    return config;
  },
};
export default config;
