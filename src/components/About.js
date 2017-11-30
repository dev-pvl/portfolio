import React from 'react'
import '../scss/About.scss'
import face from '../img/normal.jpg';

;(function(window) {
  function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) 	{
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
      posx = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
    return {
      x : posx,
      y : posy
    }
  }
})(window);


class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About!</h1>
        <img className="face" src={face} alt="face"></img>
      </div>
    )
  }
}

export default About
