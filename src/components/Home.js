import React from 'react';
import Navbar from './Navbar';
import "../newsapp.css";
import Header from './Header';
import Trending from './TrendingNews';
function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Trending />
    </div>
  );
}

export default Home;