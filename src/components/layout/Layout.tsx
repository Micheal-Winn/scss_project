import React from 'react'
import Navbar from '../header/Navbar';


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout