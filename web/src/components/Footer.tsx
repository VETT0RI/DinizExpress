import React from "react";

export interface IFooterProps{}

const Footer: React.FunctionComponent<IFooterProps> = props => {
  return (
    <footer className="h-14 bg-zinc-800 shadow-lg shadow-zinc-900 mt-auto">
      <ul className="text-xl text-white font-bol flex">
        <li>Tel: (11) 4107-6090</li>
        <li>Cel: (11) 8254-6503</li>
        <li>Rua: Macurape, 41 - São Paulo - SP</li>
        <li>dinizexpress@hotmail.com</li>
      </ul>
    </footer>
  );
}

export default Footer