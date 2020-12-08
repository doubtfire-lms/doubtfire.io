import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Next.js document that sets the favicon of each page.
 * https://nextjs.org/docs/advanced-features/custom-document
 */
export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/jpg" href="/images/logo/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
