import type { AppProps } from 'next/app';

// Import global styles.
import './_app.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
