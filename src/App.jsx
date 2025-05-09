import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Categories from './components/main/Categories';
import Info from './components/main/Info';
import Main from './components/main/Main';
import Orders from './components/main/Orders';
import Tool from './components/main/Tool';


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
              <Route path="/tool" element={<Tool />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;