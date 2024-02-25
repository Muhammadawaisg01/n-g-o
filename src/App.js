import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import News from './components/news/News';
import Lectures from './components/Lectures/Lectures'
import Main_Heading from './components/Main_Heading/Main_Heading';
import Videos from './components/Vedios/Videos';
import Donation from './components/Donation/Donation';
// import Home from './components/Home/Home';

function App() {
  return (

    <Router>
      {/* <Routes> */}
      {/* <Route exact path='/' element={<Home/>} /> */}
      <Header />
      <Main_Heading />
      <News />
      <Lectures />
      <Videos />
      <Footer />
      {/* <Route exact path='/donation' element={<Donation />} /> */}
      {/* </Routes> */}
    </Router>

  );
}

export default App;
