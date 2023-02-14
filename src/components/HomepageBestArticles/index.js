import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import $ from 'jquery';

// fucking kill me
function getArticles(a) {
  $.getJSON(a, function( data ) {
    for(var key in data.articles) {
      var parsedImage = decodeURIComponent(data.articles[key].image)
      console.log(parsedImage)
      var out='<div class="card">';
            out+='<img class="card-img-top src="'+parsedImage+'">';
            out+='<div class="card-body">';                 
            out+='<h5 class="card-title">'+data.articles[key].title+'</h5>';
            out+='<p class="card-subtitle">'+data.articles[key].author+' - '+data.articles[key].month+' '+data.articles[key].day+', '+data.articles[key].year+'</p>';
            out+='<p class="card-text">'+data.articles[key].excerpt+'</p>';
            out+='<a href="'+data.articles[key].url+'" class="btn btn-primary .underline">Read article</a>';
            out+='</div>';
          $('#test').append(out);
    }
  });
}
export default function HomepageBestArticles() {
  const {siteConfig} = useDocusaurusContext();
  getArticles('best.json');
  return (
    <section className={clsx('text-black', styles.bg)}>
      <div className="lg:flex lg:flex-row justify-items-center grid grid-cols-1 grid-rows-1">
        <div className={clsx("lg:flex-1 text-left lg:w-1/2 p-8 place-self-center", styles.focusIn)}>
          <div className="grid" id="test"></div>
        </div>
        <div className="box-border w-2/3 lg:basis-2/5 xl:w-1/3 lg:w-7/20 sm:w-2/3 p-2 lg:flex-initial place-self-center 2xl:w-auto">

        </div>
      </div>     
    </section>
  );
}