import React from 'react'
import { Link } from 'react-router-dom'

export interface IHeaderProps{}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <header className="h-14 bg-zinc-800 shadow-lg shadow-zinc-900">
      <ul className="text-xl text-white font-bold flex">
        <Link to="/">
          <li className="cursor-pointer pl-10 pt-4">Home</li>
        </Link>
        <Link to="/company">
          <li className="cursor-pointer pl-10 pt-4">Empresa</li>
        </Link>
        <Link to="/services">
          <li className="cursor-pointer pl-10 pt-4">Serviços</li>
        </Link>
        <Link to="/coverage">
          <li className='cursor-pointer pl-10 pt-4'>Cobertura</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer pl-10 pt-4">Contato</li>
        </Link>
      </ul>
    </header>
  );

}

export default Header