import { h } from 'preact';
import preactLogo from './logo.png';
import otionLogo from './otion.svg';
import * as classes from './styles/app';

const App: preact.FunctionComponent<{ name: string }> = ({ name = '' }) => {
  console.log('Welcome,', name);

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <div className={classes.LogoContainer}>
          <img src={preactLogo} className={classes.AppLogo} alt="preact-logo" />
          <img src={otionLogo} className={classes.AppLogo} alt="otion-logo" />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>Welcome to Snowpack + Preact + Otion + TypeScript starter!</p>
        <div className={classes.Content}>
          <pre className={classes.Pre}>
            <code>$ yarn install</code>
            <br />
            <code>$ yarn start</code>
          </pre>
        </div>
      </header>
    </div>
  );
};

export default App;
