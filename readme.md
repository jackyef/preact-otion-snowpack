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

3. To test SSR (uses production build)
    ```sh
    yarn start # start snowpack dev server for the client assets
    yarn dev:server # start the development server for doing SSR

    # All done! Go to localhost:8001 to see your SSR'd rendered app
    ```

## Deploying to production
1. Generate production client bundle using webpack, upload these to your public path (usually a CDN)
    ```sh
    yarn build
    ```

2. Generate production server bundle using webpack
    ```sh
    yarn build:server
    ```

3. Run the server bundle on your NodeJS app instance

## Known issue
- On development, after the first HMR reload, the extracted critical CSS will always be empty.
