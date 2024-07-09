import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
