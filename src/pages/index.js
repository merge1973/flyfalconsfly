import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageBestArticles from '@site/src/components/HomepageBestArticles';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Main Page'}
      description="The official news website for Fly Falcons Fly News.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <HomepageBestArticles />
    </Layout>
  );
}
