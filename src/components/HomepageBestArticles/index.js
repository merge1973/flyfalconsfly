import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import $ from 'jquery';

// fucking kill me
function getArticles(a) {
  $.getJSON(a, function( data ) {
    for(var key in data.articles) {
      var parsedImage = decodeURIComponent(data.articles[key].image)
      var parsedTags = data.articles[key].tags.join(", ")
        var out = '<div class="card pb-4 text-center drop-shadow-2xl">';
          out += '<img class="card-img-top" onerror="this.onerror=null; this.remove();" src="'+parsedImage+'">';
          out += '<div class="card-body">';
          out += '<div class="card-title text--bold p-2 h5"><a href="'+data.articles[key].url+'">'+data.articles[key].title+'</a></div>';
          out += '<p class="card-subtitle mb-2 text-muted pb-2">'+data.articles[key].author+' - '+data.articles[key].month+' '+data.articles[key].day+', '+data.articles[key].year+'</p>';
          out += '<p class="card-text pt-2">'+data.articles[key].excerpt+'</p>';
          out += '<div class="card-footer p-2">tags: '+parsedTags+'</div>';
          $('#gridArticles').append(out);
    }
  });
}

// add animations on scroll down
export default function HomepageBestArticles() {
  getArticles('best.json');
  return (
    <section className={clsx("bg-gradient-to-r from-cyan-500 to-blue-500", styles.gradientXY)}>
      <div className="text-center p-4">
        <h1>Our best articles</h1>
        <p>This is a display of our best articles.</p>
      </div>
      <div className={clsx("", styles.focusIn)}>
        <div id="gridArticles" className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1150px] 2xl:grid-cols-4 2xl:max-w-[1536px] p-8 gap-6"></div>
      </div>     
    </section>
  );
}