import React, { memo } from 'react'
import Topnavbar from './Topnavbar';
import Navbar from './Navbar';
import './header.css'

const Header = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
    </>
  )
}

export default memo(Header)