import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}>

      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        As we embark on this delicious journey, we want to express our gratitude for choosing 
        Delice's Pizzeria. 
        Whether you're a longtime fan or trying us for the first time, 
        you're not just our customers; you're part of our pizza-loving family.
        Stay tuned for an exciting menu that goes beyond the ordinary. 
        Join us as we redefine the art of pizza-making, one extraordinary slice at a time. 
        Thank you for letting us be a part of your pizza story!
        </p>
      </div>
    </div>
  )
}

export default About

