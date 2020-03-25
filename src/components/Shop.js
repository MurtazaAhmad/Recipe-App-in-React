import React from 'react'
import {useState, useEffect} from 'react'
function Shop(){

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch('https://api.pubg.com/shards/steam/players/Markhor75')
    const details = await data.json();
    console.log(data);
  }
  return <h1>Shop</h1>
}

export default Shop
