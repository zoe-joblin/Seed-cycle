import React from 'react'

import Header from './Header'
import Plants from './Plants'
import PlantDetail from './PlantDetail'
import AddPlant from './AddPlant'
import Footer from './Footer'

const App = () => {
  return (
    <>

      {/*   HOMEPAGE  */}
      {/* <Header />
      <Plants />
      <Footer /> */}

      {/* ADD PLANT */}
      <Header />
      <AddPlant />
      <Footer />

      {/*  PLANT DETAILS */}
      {/* <Header />
      <PlantDetail/>
      <Footer /> */}

    </>
  )
}

export default App
