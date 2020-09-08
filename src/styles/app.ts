import { css, keyframes } from 'otion';

export const App = css({
  textAlign: 'center',
});

export const AppHeader = css({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

export const AppLink = css({
  color: '#61dafb',
});

const appLogoSpin = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(1.06)',
  },
});

export const LogoContainer = css({
  display: 'flex',
  flexDirection: 'column',
});

export const AppLogo = css({
  objectFit: 'contain',
  height: '20vmin',
  maxHeight: '24vmin',
  pointerEvents: 'none',
  marginBottom: '1rem',
  animation: `${appLogoSpin} infinite 1.6s ease-in-out alternate`,
});

export const Content = css({
  width: '80%',
});

export const Pre = css({
  background: '#333333',
  borderRadius: '2rem',
  border: '1px solid #282c34',
  padding: '2rem',
  display: 'block',
  width: '30vw',
  margin: '2rem auto',
  textAlign: 'left',
  '@media': {
    '(max-width: 600px)': {
      padding: '1.25rem',
      width: 'auto',
    },
  },
});
