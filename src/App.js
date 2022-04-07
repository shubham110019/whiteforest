import './App.css';
import './css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './component/Narbar';
import Footer from './component/Footer';
import Newletter from './component/Newletter';
import User from './pages/User';
import Userform from './pages/Userform';
import Search from './pages/Search';
import {Switch, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App(props) {

  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/user/:id" component={User} exact />
        <Route path="/userfrom" component={Userform} exact />
        <Route path="/search" component={Search} exact />
        {/* <Route path="/user/:id" render={(props) => <User {...props} /> } /> */}

        {/* https://dsathemes.com/html/mobicom/files/demo-10.html#1#pricing-1 */}
      </Switch>

      <Newletter/>

      <Footer/>
    </>
  );
}

export default App;
