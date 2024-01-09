import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import PizzaImage from "../assets/pizza.jpeg";
import '../styles/Home.css'; 

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${PizzaImage})`}}>
      <div className='headerContainer' >
        <h1>Delice's Pizzeria </h1>
        <p>PIZZA TO FIT ANY TASTE </p>
        <Link to="/menu">
        <Button>ORDER NOW </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
