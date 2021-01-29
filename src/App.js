import { Switch, Route} from 'react-router-dom';
import {Footer, Navbar } from './components';
import {GlobalStyle} from './globalStyles'
import Home from './pages/HomePage/Home';
import Todo from './pages/Todo/Todo';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';
import Bla from './components/Bla/Bla';



function App() {

  return (
    <>
    
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/todo' exact component={Todo}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/bla' component={Bla}/>
 
      </Switch>
      <Footer />
   
    </>
  );
}

export default App;
