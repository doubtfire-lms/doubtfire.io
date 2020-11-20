import type { AppProps } from 'next/app';

// Import global styles.
// TODO: Import only components that are necessary.
import 'bulma/bulma.sass';
import 'pattern.css/pattern.scss';
import '../styles/common.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
