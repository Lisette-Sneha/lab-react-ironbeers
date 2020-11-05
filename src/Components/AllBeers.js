import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = () => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json()) // convert to json
      .then((json) => setAllBeers(json)) //print data to console
      .catch((err) => console.log('Request Failed', err)); // Catch errors
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      {allBeers.map((item) => {
        return <div key={item._id}>{item.name}</div>;
      })}
      {console.log(allBeers)}
      <Link to="/">Go Home</Link>
    </div>
  );
}
