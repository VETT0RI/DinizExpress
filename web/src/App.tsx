import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
 return (
  <Router>
    <ul className='text-xl text-white font-bold flex'>
      <li className='cursor-pointer pl-10 pt-4'><Link to="/">Home</Link></li>
      <li className='cursor-pointer pl-10 pt-4'><Link to="/company">Empresa</Link></li>
      <li className='cursor-pointer pl-10 pt-4'><Link to="/services">Serviços</Link></li>
      <li className='cursor-pointer pl-10 pt-4'><Link to="/contact">Contato</Link></li>
    </ul>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  </Router>
 )
}

export default App
