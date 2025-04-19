
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default Index;
