import Koa from 'koa';
import serve from 'koa-static';
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { setup } from 'otion';
import { getStyleTag, VirtualInjector, filterOutUnusedRules } from 'otion/server';
import otionConfig from './otion.config';

/**
 * Injected by webpack.DefinePlugin
 */
declare const ASSETS_MANIFEST_PATH: string;
declare const STATIC_ASSETS_PATH: string;

const app = new Koa();
const webpackManifest = require(ASSETS_MANIFEST_PATH);
const isDev = process.env.NODE_ENV !== 'production';

const mainJs = isDev ? '' : [
  webpackManifest['webpack-runtime'].js,
  webpackManifest.commons.js,
  webpackManifest.index.js,
].reduce((acc, v) => {
  return `${acc}<script defer src="${v}"></script>`;
}, '');

app.use(
  serve(STATIC_ASSETS_PATH, {
    index: 'NO_INDEX_FILE_ALLOWED.html',
  }),
); // serve the static assets generated by snowpack build

/**
 * otion instance need to be set up before any css() and keyframes() calls
 * This doesn't seem to work well with HMR though.
 * The injector will be reset every time HMR happens, making it empty.
 */
const injector = VirtualInjector();
setup({ ...otionConfig, injector });

// we use `require()` so that the css() and keyframes() calls happen after setup is done
const App = require('../src/App').default;

app.use(async (ctx) => {
  const markup = renderToString(<App name="SSR" />);

  // we only include styles used in the rendered markup
  const style = getStyleTag(filterOutUnusedRules(injector, markup));

  ctx.body = `
    <html>
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Web site created using create-snowpack-app" />
      <title>SSR - Snowpack preact</title>
      <style>
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      </style>
      ${style}
    </head>
    <body>
      <div id="root">${markup}</div>
      ${isDev ? `
        <script type="module" src="http://localhost:8080/_dist_/index.js"></script>
        <script>window.HMR_WEBSOCKET_URL = "ws://localhost:8080"</script>
      ` : mainJs}
    </body>
    </html>
  `;
});

if (process.env.NODE_ENV === 'production') {
  app.listen(8001, () => {
    console.log('Koa server listening on port 8001');
  });
}

export default app;
