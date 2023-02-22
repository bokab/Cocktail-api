import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCoctail from './pages/SingleCoctail';
import Error from './pages/Error';
import Navbar from '../compoments/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/cocktail/:id' element={<SingleCoctail />}></Route>
        <Route exact path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
