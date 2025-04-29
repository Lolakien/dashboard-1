import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/main/Main';
import Info from './components/main/Info';
import Categories from './components/main/Categories';
import Orders from './components/main/Orders';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/info" element={<Info />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;