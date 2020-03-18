import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import FirstPage from "./pages/FirstPage"
import About from "./pages/About"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"
import ComingSoon from "./pages/ComingSoon"
import Testimonials from "./pages/Testimonials"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import "./Brand.css"

class App extends Component{

  render(){
  return (
    <div className="App">

      <Navigation/>
      <Switch>
        <Route exact path='/' component={FirstPage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/locations' component={Locations}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/testimonials' component={Testimonials} />
        <Route exact path='/shop' component={Shop}/>
      
      </Switch>
      <Footer />
  </div>
  )
}}

export default App;