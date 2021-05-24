import { FC } from 'react';

/**
 * Includes a `<footer>` that acknowledges frontend & backend contributors, and mentions the project license.
 */
const Footer: FC = () => {
  return (
    <footer className="footer has-text-centered has-background-white">
      <p className="is-size-7">
        Doubtfire is an open source project maintained by the{' '}
        <a href="https://github.com/orgs/doubtfire-lms/people">core team</a> with the help of all our{' '}
        <a href="https://github.com/doubtfire-lms/doubtfire-web/graphs/contributors">frontend</a> and{' '}
        <a href="https://github.com/doubtfire-lms/doubtfire-api/graphs/contributors">backend</a> contributors.
        <br />
        Except as otherwise noted, Doubtfire is licensed under{' '}
        <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License (AGPL) v3</a>.
      </p>
    </footer>
  );
};

export default Footer;
