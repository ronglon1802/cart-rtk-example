import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
