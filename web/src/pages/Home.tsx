import React from 'react'

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return <div><p className='text-white m-8'>This is the home page.</p></div>
}

export default HomePage