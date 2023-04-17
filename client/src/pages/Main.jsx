import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <Header setOpenDrawer={setOpenDrawer}/>
      <Sidebar openDrawer={openDrawer}/>
      
    </>
  )
}

export default Main