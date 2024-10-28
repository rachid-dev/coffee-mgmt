import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home';
import {UserDataProvider } from './utils/Context';
import WithLoggedIn from './components/WithLoggedIn';
import ProductEdit from './pages/ProductEdit';
import ProductAdd from './pages/ProductAdd';
import ProductProfile from './pages/ProductProfile';
import { ProductServices } from './services/products.services';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <Router>
      <UserDataProvider>
        <ProductServices/>
        <Routes>
          <Route path='/login' element = {<LogIn />} />
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/' element = {<WithLoggedIn WrappedComponent={Home}/>} />
          <Route path='/product-edit/:id' element = {<WithLoggedIn WrappedComponent ={ProductEdit} />} />
          <Route path='/product-profile/:id' element = {<WithLoggedIn WrappedComponent ={ProductProfile} />} />
          <Route path='/product-add' element ={<WithLoggedIn WrappedComponent = {ProductAdd} />} />
        </Routes>
      </UserDataProvider>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
