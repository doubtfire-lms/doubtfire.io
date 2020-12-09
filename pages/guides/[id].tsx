import { FC, useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs/promises';
import matter from 'gray-matter';
import Scrollspy from 'react-scrollspy';
import { useMediaQuery } from 'react-responsive';

import Meta, { Audience, ParsedGuideFrontMatter, parseFrontMatter, RawGuideFrontMatter } from '../../guides/Meta';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// Unified, Remark, Rehype imports & plugins.
import unified from 'unified';
import rehypeRaw from 'rehype-raw';
import unistVisit from 'unist-util-visit';
import remarkSlug from 'remark-slug';
import remarkHint from 'remark-hint';
import remarkParse from 'remark-parse';
import remarkBehead from 'remark-behead';
import remark2rehype from 'remark-rehype';
import mdastToString from 'mdast-util-to-string';
import rehypeStringify from 'rehype-stringify';
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import remarkHighlightJs from 'remark-highlight.js';
import remarkExternalLinks from 'remark-external-links';
import remarkAutolinkHeadings from 'remark-autolink-headings';

// Highlight.js imports.
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
// Import the necessary languages here.
import hljsLanguageShell from 'highlight.js/lib/languages/shell';
import hljsLanguageBash from 'highlight.js/lib/languages/bash';
import hljsLanguageMarkdown from 'highlight.js/lib/languages/markdown';

type TocItem = {
  id: string;
  depth: number;
  text: string;
};

type Props = ParsedGuideFrontMatter & {
  id: string;
  audience: Audience;
  markdown: string;
  html: string;
  toc: TocItem[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Iterate the guides directory to retrieve their paths.
  const paths: string[] = [];
  for (const audience of Meta.orderedAudiences) {
    const guides = (await fs.readdir(`guides/${audience}`)).map((n) => n.replace(/\.md$/, ''));
    for (const guide of guides) {
      paths.push(`/guides/${guide}`);
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params.id as string;

  // Identify the audience of the guide identified by `id` by locating it within the guides directory.
  let audience: Audience;
  for (const _audience of Meta.orderedAudiences) {
    const guides = (await fs.readdir(`guides/${_audience}`)).map((n) => n.replace(/\.md$/, ''));
    if (guides.indexOf(id) !== -1) {
      audience = _audience;
      break;
    }
  }

  // Retrieve the markdown content and front matter of the guide.
  const { content: markdown, data: front } = matter(
    await fs.readFile(`guides/${audience}/${id}.md`, { encoding: 'utf-8' })
  );

  const toc: TocItem[] = [];

  const processor = unified()
    // Parse markdown.
    .use(remarkParse)
    // Accessible emojis.
    .use(remarkA11yEmoji)
    // Set _blank targets for external links.
    .use(remarkExternalLinks)
    // Add tip/warning/hint blocks.
    .use(remarkHint)
    // Generate IDs with slugs for headings.
    .use(remarkSlug)
    // Populate `toc` array with each heading.
    .use(() => {
      return (tree) => {
        unistVisit(tree, 'heading', (node) => {
          const item: TocItem = {
            id: node.data.id as string,
            text: mdastToString(node),
            depth: node.depth as number,
          };
          toc.push(item);
        });
      };
    })
    // Append a link with an anchor to each heading.
    .use(remarkAutolinkHeadings, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        children: [{ type: 'text', value: ' §' }],
      },
    })
    // Decrease heading levels (i.e. <h1> to <h2>, etc.).
    // This allows top-level headings of guides to be <h1>s.
    .use(remarkBehead, { depth: 1 })
    // Highlight block-level source code.
    .use(remarkHighlightJs)
    // Convert to markdown AST to HTML AST.
    .use(remark2rehype, { allowDangerousHtml: true })
    // Use literal HTML.
    .use(rehypeRaw)
    // Prefix relative image and anchor URLs with the global prefix.
    .use(() => {
      return (tree) => {
        /**
         * Matches HTTP(S) URLs and protocol-relative URLs.
         */
        const absoluteURLPattern = /^https?:\/\/|^\/\//;

        /**
         * Prefixes the specified URL with the global prefix.
         */
        const prefixUrl = (url: string): string => {
          return `${process.env['prefix']}/${url.replace(/^\/+/, '')}`;
        };

        unistVisit(tree, 'element', (node) => {
          if (node.tagName === 'img') {
            const properties = node.properties as { src: string };
            const isAbsolute = absoluteURLPattern.test(properties.src);
            if (!isAbsolute) {
              properties.src = prefixUrl(properties.src);
            }
          } else if (node.tagName == 'a') {
            const properties = node.properties as { href?: string };
            if (properties.href) {
              const isAbsolute = absoluteURLPattern.test(properties.href);
              if (!isAbsolute) {
                properties.href = prefixUrl(properties.href);
              }
            }
          }
        });
      };
    })
    // Stringify HTML.
    .use(rehypeStringify);

  const processed = await processor.process(markdown);

  return {
    props: {
      id,
      audience,
      markdown,
      ...parseFrontMatter(front as RawGuideFrontMatter),
      html: processed.toString(),
      toc,
    },
  };
};

const GuidePage: FC<Props> = (props) => {
  // Initialize highlight.js.
  useEffect(() => {
    hljs.registerLanguage('shell', hljsLanguageShell);
    hljs.registerLanguage('bash', hljsLanguageBash);
    hljs.registerLanguage('markdown', hljsLanguageMarkdown);
    hljs.initHighlighting();
  }, []);

  // https://bulma.io/documentation/overview/responsiveness/
  const isDesktop = useMediaQuery({ minWidth: 1024, screen: true });
  const [isMobileTocVisible, setIsMobileTocVisible] = useState(false);

  return (
    <>
      <Head>
        <title>{props.title} | Doubtfire</title>
      </Head>
      <div className="container">
        <Nav />
        {/* Header */}
        <div className="hero pattern-dots-lg px-2" style={{ color: '#DDD' }}>
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-four-fifths px-0">
                <nav className="breadcrumb">
                  <ul>
                    <li>
                      <Link href="/guides">
                        <a>Guides</a>
                      </Link>
                    </li>
                    {props.audience !== 'all' && (
                      <li>
                        <Link href={`/guides#${props.audience}`}>
                          <a className="has-background-white">{Meta.audienceLabels[props.audience].singular}</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
                <h1 className="title is-2 mb-4">
                  <span className="has-background-white">{props.title}</span>
                </h1>
                <p className="is-size-5 has-text-black">
                  <span className="has-background-white">
                    By{' '}
                    {props.authors.map((a, i) => (
                      <span key={`author-${a}`}>
                        {i > 0 && ' and '}
                        <a href={`https://github.com/${a}`} target="_blank">
                          {a in Meta.authorNames ? Meta.authorNames[a] : `@${a}`}
                        </a>
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Guide */}
        <div className="columns is-centered px-5">
          <div className="column is-four-fifths pt-6">
            <div className="columns is-multiline">
              {/* Table of Contents */}
              {props.toc.length > 0 && (
                <aside className="column is-full-mobile is-full-tablet is-one-quarter-desktop is-size-6">
                  <div className="guide-toc">
                    <div className="columns is-gapless is-mobile is-tablet is-align-items-center">
                      <div className="column">
                        <strong>Contents</strong>
                      </div>
                      <div className="column is-narrow is-hidden-desktop">
                        <button className="button is-small" onClick={() => setIsMobileTocVisible((v) => !v)}>
                          {isMobileTocVisible ? '🡡' : '🡣'}
                        </button>
                      </div>
                    </div>
                    {(isDesktop || isMobileTocVisible) && (
                      <Scrollspy items={props.toc.map((t) => t.id)} currentClassName="is-active" componentTag="div">
                        {props.toc.map((item) => (
                          <p
                            className="guide-toc-item"
                            key={`toc/${item.id}`}
                            style={{ marginLeft: `${(item.depth - 1) * 1}em` }}>
                            <a href={`#${item.id}`} style={{ fontSize: '0.8em' }}>
                              {item.text}
                            </a>
                          </p>
                        ))}
                      </Scrollspy>
                    )}
                  </div>
                </aside>
              )}
              {/* Guide body */}
              <div className="column">
                <main className="guide-content" dangerouslySetInnerHTML={{ __html: props.html }}></main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GuidePage;
