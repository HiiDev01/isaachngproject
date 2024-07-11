import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="body_content">
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
