import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom'
import Company from './pages/Company';
import Service from './pages/Service';

export interface IApplicationProps{}

const App: React.FunctionComponent<IApplicationProps> = (props) =>{
 return (
  <BrowserRouter>
      <Router>
      <Route path='/' element={<Company/>}/>
      <Route path='Service' element={<Service/>}/>
    </Router>
  </BrowserRouter>
 )
}

export default App
