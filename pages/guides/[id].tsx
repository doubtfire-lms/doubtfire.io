// TODO: Document!

import { FC, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs/promises';
import matter from 'gray-matter';

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

import hljs from 'highlight.js/lib/core';
import hljsLanguageShell from 'highlight.js/lib/languages/shell';
import hljsLanguageBash from 'highlight.js/lib/languages/bash';
import hljsLanguageMarkdown from 'highlight.js/lib/languages/markdown';
import 'highlight.js/styles/default.css';

import Meta, { Audience, ParsedGuideFrontMatter, parseFrontMatter, RawGuideFrontMatter } from '../../guides/Meta';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Scrollspy from 'react-scrollspy';

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
  let audience: Audience;

  for (const _audience of Meta.orderedAudiences) {
    const guides = (await fs.readdir(`guides/${_audience}`)).map((n) => n.replace(/\.md$/, ''));
    if (guides.indexOf(id) !== -1) {
      audience = _audience;
      break;
    }
  }

  const { content: markdown, data: front } = matter(
    await fs.readFile(`guides/${audience}/${id}.md`, { encoding: 'utf-8' })
  );

  const toc: TocItem[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkA11yEmoji)
    .use(remarkExternalLinks)
    .use(remarkHint)
    .use(remarkSlug)
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
    .use(remarkAutolinkHeadings, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        children: [{ type: 'text', value: ' §' }],
      },
    })
    .use(remarkBehead, { depth: 1 })
    .use(remarkHighlightJs)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
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
  useEffect(() => {
    hljs.registerLanguage('shell', hljsLanguageShell);
    hljs.registerLanguage('bash', hljsLanguageBash);
    hljs.registerLanguage('markdown', hljsLanguageMarkdown);
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Doubtfire</title>
      </Head>
      <div className="container">
        <Nav />
        <div className="hero pattern-dots-lg" style={{ color: '#DDD' }}>
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
                <h1 className="title is-1 mb-4">
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
        <div className="columns is-centered">
          <div className="column is-four-fifths pt-6">
            <div className="columns">
              {props.toc.length > 0 && (
                <aside className="column is-one-quarter is-size-6">
                  <div className="guide-toc">
                    <strong>Contents</strong>
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
                  </div>
                </aside>
              )}
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
