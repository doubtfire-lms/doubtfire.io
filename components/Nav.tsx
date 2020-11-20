import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

/**
 * Navigation bar with links to the homepage, guides, and GitHub.
 * TODO: Make responsive.
 */
const Nav: FC = () => {
  const router = useRouter();

  return (
    <nav className="navbar is-spaced">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="/images/logo/logo.svg" alt="Doubtfire Logo" />
            &nbsp; Doubtfire
          </a>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/guides">
            <a className={`navbar-item ${router.pathname === '/guides' ? 'is-active' : ''}`}>Guides</a>
          </Link>
          <a href="https://github.com/orgs/doubtfire-lms/" target="_blank" className="navbar-item">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
