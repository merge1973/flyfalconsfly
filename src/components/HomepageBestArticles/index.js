import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Card } from "react-bootstrap";
import articles from './articles.js';

// fallback image appears to not be working here
const CreatedCards = () => {
  const renderCard = (card, index) => {
      return (
          <Card key={index} className="pb-4 text-center outline outline-2 drop-shadow-2xl">
              <Card.Img variant="top" src={card.image} className="bg-white" onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="/img/articles_noimg.png";}}/>
                  <Card.Body>
                      <Card.Title className="card-title text--bold p-2"><Card.Link href={card.url}>{card.title}</Card.Link></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted pb-2">{card.author} - {card.month} {card.day}, {card.year}</Card.Subtitle>
                      <Card.Text className="pt-2">{card.excerpt}</Card.Text>
                      <Card.Footer className="pt-2 px-2 capitalize">Category: <Card.Link href={card.category}>{card.category}</Card.Link></Card.Footer>
                  </Card.Body>
          </Card>
      );
  };
  return articles.map(renderCard);
};

// add animations on scroll down
export default function HomepageBestArticles() {
  return (
    <section className={styles.bg}>
      <div className="text-center p-4 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Our best articles <i className="fa-solid fa-heart"></i></h1>
        <p className="text-base md:text-lg lg:text-xl">View some of our best work.</p>
      </div>
      <div className={clsx("", styles.focusIn)} id="card-container">
        <div id="gridArticles" className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6">
          <CreatedCards />        
        </div>
      </div>
    </section>
  );
}