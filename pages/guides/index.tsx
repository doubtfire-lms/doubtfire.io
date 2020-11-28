import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs/promises';
import matter from 'gray-matter';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Meta, { Audience, RawGuideFrontMatter, ParsedGuideFrontMatter, parseFrontMatter } from '../../guides/Meta';

type Props = {
  guides: {
    [audience in Audience]?: (ParsedGuideFrontMatter & {
      id: string;
    })[];
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props: Props = {
    guides: {},
  };

  for (const audience of Meta.orderedAudiences) {
    props.guides[audience] = [];

    const guides = (await fs.readdir(`guides/${audience}`)).map((n) => n.replace(/\.md$/, ''));

    for (const guide of guides) {
      const { data: front } = matter(await fs.readFile(`guides/${audience}/${guide}.md`, { encoding: 'utf-8' }));

      props.guides[audience].push({
        id: guide,
        ...parseFrontMatter(front as RawGuideFrontMatter),
      });

      props.guides[audience] = props.guides[audience].sort(
        (l, r) => Meta.orderedGuides.indexOf(l.id) - Meta.orderedGuides.indexOf(r.id)
      );
    }
  }

  return { props };
};

const GuidesPage: FC<Props> = ({ guides }) => {
  return (
    <>
      <Head>
        <title>Guides | Doubtfire</title>
      </Head>
      <div className="container">
        <Nav />
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container columns is-align-items-flex-end">
              <div className="column">
                <h1 className="title">Guides</h1>
                <div className="p subtitle has-text-grey-light">Guides on how to use Doubtfire</div>
              </div>
              <div className="column is-two-thirds">
                <div className="columns is-align-items-flex-end">
                  <div className="column">
                    <div className="field">
                      <div className="label">
                        <label className="label">Search</label>
                      </div>
                      <div className="control">
                        <input type="text" className="input" placeholder="Type here to search" />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <div className="label">
                        <label className="label">Audience</label>
                      </div>
                      <div className="control">
                        <div className="buttons has-addons">
                          {Meta.orderedAudiences
                            .filter((a) => a in guides)
                            .map((a) => (
                              <button key={`audience-button-${a}`} className="button">
                                {Meta.audienceLabels[a].singular}
                              </button>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          {/* TODO: Only 1 column here so .column might not be necessary */}
          <div className="column">
            {Meta.orderedAudiences
              .filter((a) => a in guides)
              .map((a, i) => (
                <div
                  id={a}
                  key={`audience-${a}`}
                  className={`block pt-6 pb-5 px-5 ${i % 2 !== 0 ? 'pattern-dots-lg' : ''}`}
                  style={{ color: '#DDD' }}>
                  {a !== 'all' && (
                    <>
                      <h2 className={`title ${Meta.audienceLabels[a].summary ? 'mb-2' : ''}`}>
                        <span className="has-background-white">
                          For {Meta.audienceLabels[a].plural}
                          &nbsp;<a href={`#${a}`}>&sect;</a>
                        </span>
                      </h2>
                      {Meta.audienceLabels[a].summary && (
                        <p className="has-text-grey mb-4">
                          <span className="has-background-white">{Meta.audienceLabels[a].summary}</span>
                        </p>
                      )}
                    </>
                  )}
                  <div className="columns is-multiline">
                    {guides[a].map((g) => (
                      <div key={`audience-${a}-guide-${g.id}`} className="column is-one-quarter">
                        <Link href={`/guides/${g.id}`}>
                          <a className="box p-3">
                            <h3 className="subtitle is-5 mb-2">{g.title}</h3>
                            <p className="has-text-grey">{g.summary}</p>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GuidesPage;
