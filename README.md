This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3030](http://localhost:3030) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Icons

In order to import icons from Figma, follow, these steps:

(use `yarn` or `npm run` as you prefer)

1. Select all icons in Figma and export them as SVG
2. Extract all files to `src/assets/icons`
3. Run `yarn icons:list` - this will generate list of all svg files into `src/assets/icons/files.json`
4. Run `yarn icons:convert` - this will convert all SVGs from `src/assets/icons` as icons with color and size based on CSS `color` and `font-size` into `src/components/icons`. It will also list all icons into `src/components/icons/files.json`
5. You might need to run `yarn lint --fix` in order to fix lint issues in the generated files

Alternatively, you can perform steps 3 and 4 in one go by running:

```bash
yarn icons:generate
```

## Validations

For data validation purposes, this project utilizes [Zod](https://zod.dev), a TypeScript-first schema declaration and validation library. Zod enables us to efficiently define the shape and constraints of our data models, ensuring the integrity of data throughout our application. By leveraging Zod, we can catch errors early in the development process, streamline our data handling strategies, and maintain a clear and concise definition of our data structures.

To implement Zod in your workflow, refer to the [Zod documentation](https://zod.dev/docs/introduction) for guidance on defining schemas and applying them within your Next.js project.
