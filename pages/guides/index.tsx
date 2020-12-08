import { FC, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs/promises';
import matter from 'gray-matter';
import Fuse from 'fuse.js';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Meta, { Audience, RawGuideFrontMatter, ParsedGuideFrontMatter, parseFrontMatter } from '../../guides/Meta';

type GuideForAudience = ParsedGuideFrontMatter & {
  id: string;
};

type GuideCollection = {
  [audience in Audience]?: GuideForAudience[];
};

type Props = {
  guides: GuideCollection;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props: Props = {
    guides: {},
  };

  // Iterate over audiences, gather corresponding guides, parse front matter, populate `props` accordingly.
  for (const audience of Meta.orderedAudiences) {
    props.guides[audience] = [];

    const guides = (await fs.readdir(`guides/${audience}`)).map((n) => n.replace(/\.md$/, ''));

    for (const guide of guides) {
      const { data: front } = matter(await fs.readFile(`guides/${audience}/${guide}.md`, { encoding: 'utf-8' }));
      props.guides[audience].push({
        id: guide,
        ...parseFrontMatter(front as RawGuideFrontMatter),
      });
    }

    // Order guides of each audience.
    props.guides[audience] = props.guides[audience].sort(
      (l, r) => Meta.orderedGuides.indexOf(l.id) - Meta.orderedGuides.indexOf(r.id)
    );
  }

  return { props };
};

const GuidesPage: FC<Props> = ({ guides: allGuides }) => {
  /**
   * Guides currently being displayed. Defaults to all guides, but may be a subset thereof, based on `query` and
   * `queryAudience`.
   */
  const [guides, setGuides] = useState(allGuides);

  const [query, setQuery] = useState('');
  const [queryAudience, setQueryAudience] = useState<Audience>('all');

  // Filter `guides` according to `query` and `queryAudience`.
  useEffect(() => {
    const copy: GuideCollection = {};

    /**
     * Performs a fuzzy search of the specified audience `aud` of `allGuides` for guides that match `query`.
     */
    const searchAudience = (aud: Audience) => {
      const fuse = new Fuse(allGuides[aud], {
        isCaseSensitive: false,
        keys: ['title', 'summary'],
        threshold: 0.5,
      });

      if (query) {
        copy[aud] = fuse.search(query).map((r) => r.item);
      } else {
        copy[aud] = allGuides[aud];
        if (!('all' in copy)) {
          copy['all'] = allGuides['all'];
        }
      }
    };

    if (queryAudience === 'all') {
      for (const a in allGuides) {
        searchAudience(a as Audience);
      }
    } else {
      searchAudience(queryAudience);
    }

    setGuides(copy);
  }, [query, queryAudience]);

  return (
    <>
      <Head>
        <title>Guides | Doubtfire</title>
      </Head>
      <div className="container">
        <Nav />
        {/* Header */}
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container columns is-align-items-flex-end">
              {/* Title & subtitle */}
              <div className="column">
                <h1 className="title">Guides</h1>
                <div className="p subtitle has-text-grey-light">Guides on how to use Doubtfire</div>
              </div>
              {/* Search options */}
              <div className="column is-two-thirds">
                <div className="columns is-align-items-flex-end">
                  {/* Query text input */}
                  <div className="column">
                    <div className="field">
                      <div className="label">
                        <label className="label">Search</label>
                      </div>
                      <div className="control">
                        <input
                          type="text"
                          className="input is-small"
                          placeholder="Type here to search"
                          onChange={(e) => setQuery(e.target.value.trim())}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Query audience selection */}
                  <div className="column is-narrow">
                    <div className="field">
                      <div className="label">
                        <label className="label">Audience</label>
                      </div>
                      <div className="control">
                        <div className="buttons has-addons">
                          {Meta.orderedAudiences
                            .filter((a) => a in allGuides)
                            .map((a) => (
                              <button
                                key={`audience-button-${a}`}
                                className={`button is-small ${queryAudience === a ? 'is-link' : ''}`}
                                onClick={() => setQueryAudience(a)}>
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
        {/* Guides */}
        {Meta.orderedAudiences
          .filter((a) => a in guides && guides[a].length > 0)
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
        <Footer />
      </div>
    </>
  );
};

export default GuidesPage;
