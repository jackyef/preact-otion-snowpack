import { h, render, hydrate } from '../web_modules/preact.js';
import '../web_modules/preact/devtools.js';
import { hydrate as otionHydrate, setup } from '../web_modules/otion.js';
import App from './App.js';
import otionConfig from '../server/otion.config.js';

if (typeof window !== 'undefined') {
  setup(otionConfig);
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