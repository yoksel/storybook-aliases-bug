I'm trying to mock modules using overriding [`tsconfig` aliases](https://nextjs.org/docs/app/getting-started/installation#set-up-absolute-imports-and-module-path-aliases) in [.storybook/main.ts](https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react#with-module-aliases) and it does not work for me

How to reproduce:

1. Install dependencies: `npm i`
1. Run Storybook: `npm run storybook`
1. Open Storybook and check component `TestComponent`: http://localhost:6007/?path=/story/components-testcomponent--default
1. See `Real content` was not replaced by `MOCKED content` despite of rewriting aliases in `.storybook/main.ts`.

We also can provide broken paths instead of real mocks like:

```
'@/testModule': path.resolve(__dirname, './mocks/BROKEN_PATH.ts'),
```

And if aliases work, Storybook build should fail, but it does not, so replacing aliases for Storybook does not work.

* See [`tsconfig.json`](./tsconfig.json#L17-L20) for TS aliases
* See [`.storybook/main.ts`](./.storybook/main.ts#L21-L38) for aliases used in stories

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
