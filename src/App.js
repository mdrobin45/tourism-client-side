import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import MyOrder from './Components/Pages/User/MyOrder/MyOrder';
import Rooms from './Components/Pages/Rooms/Rooms';
import ManageOrder from './Components/Pages/User/ManageOrder/ManageOrder';
import Login from './Components/Pages/User/Login/Login';
import Register from './Components/Pages/User/Register/Register';
import About from './Components/Pages/About/About';
import PlaceOrder from './Components/Pages/User/PlaceOrder/PlaceOrder';

const App = () =>
{
  return (
    <div className='App'>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/rooms'>
            <Rooms/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/my-order'>
            <MyOrder/>
          </Route>
          <Route exact path='/manage-order'>
            <ManageOrder/>
          </Route>
          <Route exact path='/place-order'>
            <PlaceOrder/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;