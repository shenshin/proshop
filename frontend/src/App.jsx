import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => (
  <Router>
    <Header />
    {/* padding on top and bottom */}
    <main className="py-3">
      <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        {/* ? means that id is optional */}
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>

    <Footer />
  </Router>
);

export default App;
