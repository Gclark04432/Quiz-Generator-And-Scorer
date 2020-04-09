import  React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './HomePage.css';

function HomePage() {
  return (
    <article className="homepage">
      <h1>Choose from thousands of questions on many categories!!!</h1>
      <h4>Catgories range from Childrens cartoons to 18th Century Politics and include the below, plus many more...</h4>
      <br/><br/><br/>
      <span className="category-example">General Knowledge</span>
      <span className="category-example">Cartoons & Animation</span>
      <span className="category-example">Sports</span>
      <span className="category-example">Music</span>
      <span className="category-example">Film</span>

      <br/><br/><br/>

      <button className="new-game-button"><Link to="/new-game">Start New Game</Link></button>

    </article>
  )
}

export default HomePage;
