# Snowpack + Preact + Otion + SSR + TypeScript starter (WIP)

Modern web development starter. Use snowpack during development for fast development, bundle using webpack for production.
- 📦 18.6 KB (gzipped) JS bundle size, core-js included

## Includes
- **Snowpack**, for blazing fast dev environment
- **Preact**, smaller runtime while still having access to most of React ecosystem if you choose to
- **TypeScript**, never hurt anyone
- **Otion**, [atomic css-in-js solution](https://github.com/kripod/otion)
- **Jest**, for running your tests
- **Webpack**, for bundling production builds
- **ESLint**, for linting your codes

## Getting started
1. Install dependencies
    ```sh
    yarn install
    ```

2. Start developing (no SSR)
    ```sh
    yarn start
    ```

3. Generate production client bundle using webpack
    ```sh
    yarn build
    ```

4. To test SSR (uses production build)
    ```sh
    yarn build # build the client bundle first, if it's not built yet
    yarn build:server
    node server/dist/main.js
    ```
