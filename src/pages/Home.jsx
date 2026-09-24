import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founder from '../components/Founder';
import IshaPromise from '../components/IshaPromise';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import '../components.css'; // Make sure styles are loaded

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Founder />
        <IshaPromise />
        <ProductShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Home;
