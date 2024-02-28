import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Donation from './components/Donation/Donation';
import Home from './components/Home/Home';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/donation' element={<Donation />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
