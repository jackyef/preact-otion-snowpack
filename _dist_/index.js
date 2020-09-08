import { h, render, hydrate } from '../web_modules/preact.js';
import '../web_modules/preact/devtools.js';
import { hydrate as otionHydrate, setup } from '../web_modules/otion.js';
import App from './App.js';

if (typeof window !== 'undefined') {
  setup({}); // should be the same as server/otion.config.ts

  otionHydrate();
}

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  hydrate(h(App, {
    name: 'John Doe'
  }), container);
} else {
  render(h(App, {
    name: 'John Doe'
  }), container);
}