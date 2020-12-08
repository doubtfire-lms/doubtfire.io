import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Navigation bar with links to the homepage, guides, and GitHub.
 */
const Nav: FC = () => {
  const router = useRouter();

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <nav className="navbar is-spaced">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="/images/logo/logo.svg" alt="Doubtfire Logo" />
            &nbsp; Doubtfire
          </a>
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isMobileNavVisible ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsMobileNavVisible((v) => !v)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isMobileNavVisible ? 'is-active' : ''}`}>
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
