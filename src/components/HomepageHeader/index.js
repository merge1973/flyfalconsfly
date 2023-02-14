import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('hero hero--primary text-white bg-gradient-to-br from-cyan-600', styles.heroBanner, styles.gradientXY)}>
      <div className="lg:flex lg:flex-row justify-items-center grid grid-cols-1 grid-rows-1">
        <div className={clsx("lg:flex-1 text-left lg:w-1/2 p-8 basis-3/5 place-self-center", styles.focusIn)}>
            <h1 className="mb-2 font-light">Welcome to</h1>
            <h1 className="hero__title mb-6 font-bold text-5xl md:text-6xl lg:text-7xl">{siteConfig.title}</h1>
            <p className="hero__subtitle text-3xl md:text-4xl lg:text-5xl">"{siteConfig.tagline}"</p>
            <p className="hero__subtitle indent-5 text-gray-200 opacity-90 text-xl md:text-2x1 lg:text-3xl">{siteConfig.customFields.shortDescription}</p>
            <div className="lg:flex center gap-4 px-4 grid grid-cols-1 grid-rows-1">
            <Link
              className="button outline button--lg button--secondary bg-transparent border-transparent transform hover:-translate-y-0.5 transition-transform"
              to="/news">
              Access articles
            </Link>
            <Link
              className="button--lg button outline button--secondary bg-transparent border-transparent hover:-translate-y-0.5 transition-transform"
              to="#features">
              ↓ Learn more ↓ 
            </Link>
          </div>
        </div>
        <div className="box-border w-2/3 lg:basis-2/5 xl:w-1/3 lg:w-7/20 sm:w-2/3 p-2 lg:flex-initial place-self-center 2xl:w-auto">
            <img src="/img/undraw_floating.svg" className={clsx(styles.shakeVertical)}></img>
            <img src="/img/undraw_two-lines.svg" className={clsx(styles.shakeVertical)}></img>
        </div>
      </div>     
    </section>
  );
}