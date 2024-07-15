import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import About from './components/About';
import EmployeePage from './components/EmployeePage';

const App = () => {


  return (
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/adminPage' element={<AdminPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/employee' element={<EmployeePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
