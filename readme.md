# Astro Starter Kit

```sh
pnpm create astro@latest -- --template tornarus1/astro-template
```

Basic Astro 5 project template with TS, Prettier, and Oxlint/ESlint set up OOTB.

## 🚀 Project Structure

The project structure is similar to that of a default minimal Astro project, but
with the extra `prettier` and `oxlint`/`eslint` config files.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                        |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Installs dependencies                         |
| `pnpm dev`         | Starts local dev server at `localhost:4321`   |
| `pnpm build`       | Builds your production site to `./dist/`      |
| `pnpm preview`     | Previews your build locally                   |
| `pnpm astro <cmd>` | Runs commands like `astro add`, `astro check` |
| `pnpm fmt`         | Runs `prettier --check`                       |
| `pnpm tsc`         | Runs `tsc` to do typechecking                 |
| `pnpm lint`        | Runs `oxlint --type-aware && eslint`          |

## 👀 Learn more

Feel free to check [Astro's docs](https://docs.astro.build) to learn more.

## Licence

The template code is licensed under the terms of the [Apache License Version 2.0](./LICENSE).
Remember to adjust the licence of your own project.
