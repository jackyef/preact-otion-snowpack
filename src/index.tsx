import { h, render, hydrate } from 'preact';
import 'preact/devtools';
import { hydrate as otionHydrate, setup } from 'otion';
import App from './App.js';

if (typeof window !== 'undefined') {
  setup({}); // should be the same as server/otion.config.ts
  otionHydrate();
}

const container = document.getElementById('root') as HTMLElement;

if (container.hasChildNodes()) {
  hydrate(<App name={'John Doe'} />, container);
} else {
  render(<App name={'John Doe'} />, container);
}
