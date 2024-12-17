import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

        <iframe className="iframe" src="/xtouch-pro/intro/index.html" width="100%" height="100%"></iframe>

  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
<Layout
      title={`XTouch Pro`}
      description="Discover XTouch Pro - an advanced 3D printer management interface for BambuLab and Klipper printers. Supports AMS, skip objects, and temperature profiles.">
      {/* Page Content */}
      <HomepageHeader />
      <a href="#features" id="features"></a>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
