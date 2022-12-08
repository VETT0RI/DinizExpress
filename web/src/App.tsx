import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
 return (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/company">Empresa</Link></li>
      <li><Link to="/services">Serviços</Link></li>
      <li><Link to="/contact">Contato</Link></li>
    </ul>
  </Router>
 )
}

export default App
