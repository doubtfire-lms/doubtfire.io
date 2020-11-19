import type { AppProps } from 'next/app';

// Import global styles.
import 'bulma/bulma.sass';
import '../styles/common.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
