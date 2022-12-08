import React from 'react'

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = props => {
  return (
    <div>
      <p className='text-white m-8'>Contact Page</p>
    </div>
  )
}

export default ContactPage