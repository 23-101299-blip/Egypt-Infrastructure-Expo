import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Exhibitors from './pages/Exhibitors.jsx';
import Agenda from './pages/Agenda.jsx';
import Register from './pages/Register.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exhibitors" element={<Exhibitors />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/register" element={<Register />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
