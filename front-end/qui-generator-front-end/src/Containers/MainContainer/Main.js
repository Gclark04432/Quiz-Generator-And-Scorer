import React, {useState, useEffect} from 'react';
import ScoreBox from '../ScoreContainer/ScoreBox.js'
import './Main.css'

function Main() {
  return (
    <main>
      <div>
        <p className="title-text">Hi, I'm the main container</p>
        <ScoreBox/>
      </div>
    </main>
  )
}

export default Main
