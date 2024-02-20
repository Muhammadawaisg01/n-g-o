import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import News from './components/news/News';
import Lectures from './components/Lectures/Lectures'
import Main_Heading from './components/Main_Heading/Main_Heading';
import Videos from './components/Vedios/Videos';


function App() {
  return (

    <Router>
      <Header />
      <Main_Heading />
      <News />
      <Lectures />
      <Videos />
      <Footer />
    </Router>

  );
}

export default App;
