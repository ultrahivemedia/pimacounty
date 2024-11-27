import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import HighlightsSection from '../components/HighlightsSection';
import PopularCities from '../components/PopularCities';
import TravelInspiration from '../components/TravelInspiration';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <HighlightsSection />
      <PopularCities />
      <TravelInspiration />
    </main>
  );
}