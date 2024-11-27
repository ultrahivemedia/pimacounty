import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import CityGuide from './pages/CityGuide';
import StateGuide from './pages/StateGuide';
import EatDrink from './pages/EatDrink';
import SeeDo from './pages/SeeDo';
import Stay from './pages/Stay';
import Festival from './pages/Festival';
import Shopping from './pages/Shopping';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="listings" element={<Listings />} />
        <Route path="listings/:id" element={<ListingDetail />} />
        <Route path="cities/:cityName" element={<CityGuide />} />
        <Route path="states/:stateName" element={<StateGuide />} />
        <Route path="eat-drink" element={<EatDrink />} />
        <Route path="see-do" element={<SeeDo />} />
        <Route path="stay" element={<Stay />} />
        <Route path="festival" element={<Festival />} />
        <Route path="shopping" element={<Shopping />} />
      </Route>
    </Routes>
  );
}

export default App;