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
import PlaceOrder from './Components/Pages/User/PlaceOrder/PlaceOrder';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import SingleRoom from './Components/Pages/SingleRoom/SingleRoom';
import AddRoom from './Components/Pages/AddRoom/AddRoom';

const App = () =>
{
  return (
    <AuthProvider className='App'>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/add-room'>
            <AddRoom/>
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
          <Route exact path='/rooms/:id'>
            <SingleRoom/>
          </Route>
          <PrivetRoute exact path='/place-order/:id'>
            <PlaceOrder/>
          </PrivetRoute>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
};

export default App;