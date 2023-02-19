import React from 'react';
import Layout from '@theme/Layout';
import { Card } from "react-bootstrap";
import latestPoliticsArticles from './_articles/politics/latestPoliticsArticles.js';
import allPoliticsArticles from './_articles/politics/allPoliticsArticles.js';

const LatestCards = () => {
  const renderCard = (card, index) => {
      return (
          <Card key={index} className="text-center outline outline-2 drop-shadow-2xl 2xl:max-h-[400px]">
              <Card.Img variant="top" src={card.image} className="bg-white" onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="/img/articles_noimg.png";}}/>
                  <Card.Body>
                      <Card.Title className="card-title text--bold p-2"><Card.Link href={card.url}>{card.title}</Card.Link></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{card.month} {card.day}, {card.year}</Card.Subtitle>
                      <Card.Text className="px-2">{card.excerpt}</Card.Text>
                  </Card.Body>
          </Card>
      );
  };
  return latestPoliticsArticles.map(renderCard);
};

const AllCards = () => {
  const renderCard = (card, index) => {
      return (
          <Card key={index} className="text-center outline outline-2 drop-shadow-2xl 2xl:max-h-[400px]">
                  <Card.Body>
                      <Card.Title className="card-title text--bold p-2"><Card.Link href={card.url}>{card.title}</Card.Link></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{card.month} {card.day}, {card.year}</Card.Subtitle>
                  </Card.Body>
          </Card>
      );
  };
  return allPoliticsArticles.map(renderCard);
};

export default function Politics() {
  return (
    <Layout title="Politics" description="The politics hub for Fly Falcons Fly News, a student run news website.">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 p-4 pt-8 gap-4 grid-cols-1 grid-rows-3">
        <h1 className="lg:pl-6 text-5xl lg:text-left text-center">Politics</h1>  
        <div className="lg:justify-self-end lg:order-2 order-3 justify-self-center">
          <a href="/articles/politics" className="relative inline-flex items-center py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 outline outline-2 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="no-underline relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View all articles</span>
          </a>
        </div>
        <p className="lg:pl-8 order-2 lg:order-3 lg:text-left text-center">The politics hub for Fly Falcons Fly News.</p>
      </div>
      <div className="p-4 float-left pl-6">
        <h2 className="lg:text-left text-center">LATEST HEADLINES</h2>
        <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6">
          <LatestCards />
        </div>
        <h2 className="lg:text-left text-center">READ MORE</h2>
        <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6">
          <AllCards />
        </div>
      </div>
    </Layout>
  );
}