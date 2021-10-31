import React, { useEffect, useState } from 'react';
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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ManageRooms from './Components/Pages/Admin/ManageRooms/ManageRooms';
import UpdateRoom from './Components/Pages/Admin/UpdateRoom/UpdateRoom';

const App = () =>
{
  const [rooms, setRooms] = useState([]);
    useEffect(() =>
    {
        fetch('https://evening-ridge-38074.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    },[])
  return (
    <AuthProvider className='App'>
      {
        rooms.length?<Router>
        <Header />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/home'>
              <Home/>
            </Route>
            <PrivetRoute exact path='/add-room'>
              <AddRoom/>
            </PrivetRoute>
            <PrivetRoute exact path='/manage-rooms'>
              <ManageRooms/>
            </PrivetRoute>
            <PrivetRoute exact path='/update-room/:id'>
              <UpdateRoom/>
            </PrivetRoute>
            <Route exact path='/rooms'>
              <Rooms/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
            <PrivetRoute exact path='/my-order'>
              <MyOrder/>
            </PrivetRoute>
            <PrivetRoute exact path='/manage-order'>
              <ManageOrder/>
            </PrivetRoute>
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
        </Router> : <div
          className='md:left-64 left-10 m-auto relative text-center top-72 w-2/4'>
          <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
          />   
        </div> 
      }
      
    </AuthProvider>
  );
};

export default App;