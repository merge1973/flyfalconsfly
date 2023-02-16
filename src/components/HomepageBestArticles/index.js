import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Card } from "react-bootstrap";
import articles from './articles.js';

const CreatedCards = () => {
  const renderCard = (card, index) => {
    var parsedTags = (card.tags).join(", ");
      return (
          <Card key={index} className="pb-4 text-center outline outline-2 drop-shadow-2xl">
              <Card.Img variant="top" src={card.image} className="bg-white" onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="/img/articles_noimg.png";}}/>
                  <Card.Body>
                      <Card.Title className="card-title text--bold p-2"><Card.Link href={card.url}>{card.title}</Card.Link></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted pb-2">{card.author} - {card.month} {card.day}, {card.year}</Card.Subtitle>
                      <Card.Text className="pt-2">{card.excerpt}</Card.Text>
                      <Card.Footer className="pt-2 px-2 capitalize">Tags: {parsedTags} </Card.Footer>
                  </Card.Body>
          </Card>
      );
  };
  return articles.map(renderCard);
};



// add animations on scroll down
export default function HomepageBestArticles() {
  return (
    <section className={clsx("bg-gradient-to-r from-purple-500 to-blue-500", styles.gradientXY)}>
      <div className="text-center p-4 text-white">
        <h1>Our best articles <i class="fa-solid fa-heart"></i></h1>
        <p>Some of our best work</p>
      </div>
      <div className={clsx("", styles.focusIn)} id="card-container">
        <div id="gridArticles" className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6">
          <CreatedCards />        
        </div>
      </div>
    </section>
  );
}