import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
