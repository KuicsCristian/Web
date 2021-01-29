import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Footer, Navbar} from './components';
import {GlobalStyle} from './globalStyles'
import Home from './pages/HomePage/Home';
import Todo from './pages/Todo/Todo';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';
import TaskTracker from './components/TaskTracker/TaskTracker';
import TaskTr from './pages/TaskTr/TaskTr';



function App() {

  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      {/* <TaskTracker /> */}
      <Switch>
     
        <Route path='/' exact component={Home}/>
        <Route path='/todo' exact component={Todo}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route  exact path='/tasktr' exact component={TaskTr}/> 

      </Switch>
      <Footer />
    </>
  );
}

export default App;
