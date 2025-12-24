import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import { PrivacyPolicy, TermsConditions } from './pages/Legal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="technologies" element={<Technologies />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog/:slug" element={<BlogPost />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<TermsConditions />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
