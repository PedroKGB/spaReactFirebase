import Header from './components/Header';
import Home from './components/Home';
import Searchpage from './components/Searchpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/search' element= {<Searchpage/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
