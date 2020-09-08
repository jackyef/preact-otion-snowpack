import { h } from '../web_modules/preact.js';
import preactLogo from './logo.png.proxy.js';
import otionLogo from './otion.svg.proxy.js';
import * as classes from './styles/app.js';

const App = ({
  name = ''
}) => {
  console.log('Welcome,', name);
  return h("div", {
    className: classes.App
  }, h("header", {
    className: classes.AppHeader
  }, h("div", {
    className: classes.LogoContainer
  }, h("img", {
    src: preactLogo,
    className: classes.AppLogo,
    alt: "preact-logo"
  }), h("img", {
    src: otionLogo,
    className: classes.AppLogo,
    alt: "otion-logo"
  })), h("p", null, "Edit ", h("code", null, "src/App.jsx"), " and save to reload."), h("p", null, "Welcome to Snowpack + Preact + Otion + TypeScript starter!"), h("div", {
    className: classes.Content
  }, h("pre", {
    className: classes.Pre
  }, h("code", null, "$ yarn install"), h("br", null), h("code", null, "$ yarn start")))));
};

export default App;