import React,{memo} from 'react'
import Topnavbar from './Topnavbar';
import Navbar from './Navbar';


const Header = () => {
  return (
    <>
    <Topnavbar />
    <Navbar />
    </>
  )
}

export default memo(Header)