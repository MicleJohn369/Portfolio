import React, { useEffect, useState } from 'react'
import background from './heroimg.jpg'

function Home() {
  const [wordCount, setWordCount] = useState(0);
  const [wordList] = useState([
    "a Web Developer", "a System Administrator", "an IT Specialist", "a Video Game Enthusiast"
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordCount(wordCount => {
        if(wordCount >= wordList.length - 1){
          return 0
        } else{ 
          return wordCount + 1
        }
      })
    }, 500);
    return () => clearInterval(interval);
  })

  return (
    <div className="page-component">
      <div className="hero-part">
        <img src={background} />
        
        <div className="hero-text">
          <h1>Greetings</h1>
          <p>My Name is Joseph</p>
          <p>I'm <b>{`{ ${wordList[wordCount]} }`}</b></p>
        </div>

        <div className="scroll-down">
          Scroll Down
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
