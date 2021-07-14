# Sandwich Share (Demo)

This site is a [Next.js](https://nextjs.org/) demo to to support content modeling best practices.

You can find the live demo at [https://sandwichshare.vercel.app/](https://sandwichshare.vercel.app/).

Below you will find information about the theory behind the demo and how to run it locally. If you have questions or comments, feel free to bug me [on Twitter](https://twitter.com/seancdavis29) or [via email](mailto:sean@stackbit.com).

## About the Demo

This project is built to demonstrate flexible page model and to show how templates can be built on top of a flexible page.

Markdown files in the `content` directory are the source files. Each file has a `template` property that must match a key from the `templateList` object found in `templates/index.tsx`. This is how content files are mapped to templates.

The templates, each of which inherits from the base template (`templates/base-layout.tsx`), renders components using a mapper (`components/index.tsx`). This mapper determines whether or not the data can (and should) be transformed to ensure (very loosely) that the data looks right before rendering a component.

## Running Locally

As part of the monorepo, I'm using [PNPM](https://pnpm.js.org/) to manage dependencies. That's why this directory doesn't have a `package-lock.json` file. However, you can still run `npm install` to install dependencies:

    $ npm install

Then you can run the development server:

    $ npm run dev
