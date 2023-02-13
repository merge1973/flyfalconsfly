import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageAboutUs() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.bg}>
      <div className="lg:flex lg:flex-row justify-items-center grid grid-cols-1 grid-rows-1">
        <div className="lg:flex-1 text-left lg:w-1/2 p-8 basis-3/5 place-self-center">
            <h1 className="mb-2 font-light">We are</h1>
            <h1 className="hero__title mb-6 font-bold sm:text-5xl md:text-6xl lg:text-7xl">{siteConfig.title}</h1>
            <p className="hero__subtitle sm:text-3xl md:text-4xl lg:text-5xl">"{siteConfig.tagline}"</p>
            <p className="hero__subtitle">{siteConfig.customFields.description}</p>
            <div className="flex center gap-4 buttonGroup">
            <Link
              className="button outline button--lg button--secondary"
              to="/news">
              Access articles
            </Link>
            <Link
              className="button--lg button outline button--secondary"
              to="/docs/intro">
              Learn more &gt;
            </Link>
          </div>
        </div>
        <div className="box-border w-2/3 lg:basis-2/5 xl:w-1/3 lg:w-7/20 sm:w-2/3 p-2 lg:flex-initial place-self-center 2xl:w-auto">
            <img src="/img/undraw_floating.svg"></img>
            <img src="/img/undraw_two-lines.svg"></img>
        </div>
      </div>     
    </section>
  );
}