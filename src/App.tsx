import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layout/main/MainLayout';
import './assets/scss/global.scss';

const App = () => 
  <div className='App'>
    <MainLayout />
  </div>;

export default App;
