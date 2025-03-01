import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';
import DetailedBlog from '../Blogs/detailedBlog';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/blog/:id" element={<DetailedBlog />} />
    </Routes> 
  );
};

export default AppRoutes;