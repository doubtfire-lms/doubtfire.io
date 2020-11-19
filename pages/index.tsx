import { FC } from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';

const index: FC = () => {
  return (
    <>
      <Head>
        <title>Doubtfire</title>
      </Head>
      <div className="container">
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p>
                <img src="/images/logo/logo.svg" alt="Doubtfire Logo" width="148" />
              </p>
              <br />
              <h1 className="title is-1">Doubtfire</h1>
              <p className="subtitle">
                An innovative, open-source, learning management system designed to put the student first.
              </p>
              <br />
              <div className="buttons is-centered">
                <a href="#" className="button">
                  <img src="/images/book.svg" alt="Guides" width="18" />
                  &nbsp; Guides
                </a>
                <a href="https://github.com/orgs/doubtfire-lms/" className="button" target="_blank">
                  <img src="/images/github.svg" alt="GitHub" width="18" />
                  &nbsp; GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
