import { h, render } from 'preact';
import 'preact/devtools';
import App from './App.js';


const container = document.getElementById('root') as HTMLElement;

render(<App name={"John Doe"} />, container);