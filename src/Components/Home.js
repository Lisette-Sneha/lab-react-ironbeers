import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/AllBeers">All Beers</Link>
    </div>
  );
}
