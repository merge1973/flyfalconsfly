import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Straightfoward Articles',
    Svg: require('@site/static/img/undraw_publish_articles.svg').default,
    description: (
      <>
        Enjoy reading articles with none of the filler content, none of the ads,
        none of the popups. Just read and enjoy.
      </>
    ),
  },
  {
    title: 'Free, Forever',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        Access the entire website without paying a single penny. Save your money
        on stuff you actually want to spend money on.
      </>
    ),
  },
  {
    title: 'Made by Students, for Students',
    Svg: require('@site/static/img/undraw_reading_book.svg').default,
    description: (
      <>
        Our articles are made by passionate and creative students, for passionate 
        and creative students.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
