import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Card } from "react-bootstrap";

const CreatedCards = () => {
  const articles = [
          {
              "title": "Hong Kong has a housing crisis. The solution: coffin homes (DEMO)", 
              "author": "Ethan Chey",            
              "excerpt": "Hong Kong has had a housing crisis for years. What is the solution?", 
              "day": "1", 
              "month": "January", 
              "year": "2023", 
              "image": "https://cdn.i-scmp.com/sites/default/files/styles/700x400/public/d8/video/thumbnail/2022/11/23/Youth%20Clean.jpg?itok=HEM_aUeZ", 
              "url": "https://www.scmp.com/video/scmp-originals/3200968/living-15-sq-ft-inside-hong-kongs-coffin-homes",
              "tags": ["international", "analysis", "hong kong", "housing"]
          },
          {
              "title": "blog article 2", 
              "author": "Johnathan",             
              "excerpt": "This is a test 2.", 
              "day": "11", 
              "month": "June", 
              "year": "1979", 
              "image": "", 
              "url": "Lorem ipsum",
              "tags": ["n/a"]
          },
          {
              "title": "blog article 2", 
              "author": "Johnathan",             
              "excerpt": "This is a test 2.", 
              "day": "11", 
              "month": "June", 
              "year": "1979", 
              "image": "", 
              "url": "Lorem ipsum",
              "tags": []
          },
          {
              "title": "blog article 2", 
              "author": "Johnathan",             
              "excerpt": "This is a test 2.", 
              "day": "11", 
              "month": "June", 
              "year": "1979", 
              "image": "", 
              "url": "Lorem ipsum",
              "tags": []
          }
      ]
  const renderCard = (card, index) => {
    var parsedTags = (card.tags).join(", ");
      return (
          <Card key={index} className="pb-4 text-center outline outline-2 drop-shadow-2xl">
              <Card.Img variant="top" onerror="this.onError=null; this.remove();" src={card.image} />
                  <Card.Body>
                      <Card.Title className="card-title text--bold p-2"><Card.Link href={card.url}>{card.title}</Card.Link></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted pb-2">{card.author} - {card.month} {card.day}, {card.year}</Card.Subtitle>
                      <Card.Text className="pt-2">{card.excerpt}</Card.Text>
                      <Card.Footer className="pt-2 px-2">tags: {parsedTags}</Card.Footer>
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
      <div className="text-center p-4">
        <h1>Our best articles</h1>
        <p>This is a display of our best articles.</p>
      </div>
      <div className={clsx("", styles.focusIn)} id="card-container">
        <div id="gridArticles" className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6">
          <CreatedCards />        
        </div>
      </div>
    </section>
  );
}