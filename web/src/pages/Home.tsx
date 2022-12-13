import React from 'react'

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return (
    <div>
      <h1 className="text-white m-8">Pagina Home</h1>
      <p className="text-white m-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe unde laboriosam maxime, officiis corporis, omnis cupiditate quis minima inventore consequuntur provident aliquid error
        dolor eius sit explicabo veritatis totam.
      </p>
      <img src="https://s3.static.brasilescola.uol.com.br/be/2020/12/girassol.jpg" alt="" className='m-8'/>
    </div>
  );
}

export default HomePage