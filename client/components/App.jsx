import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import connect from 'react-redux'



import Header from './Header'
import Plants from './Plants'
import PlantDetail from './PlantDetail'
import AddPlant from './AddPlant'
import Listings from './Listings'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
    <>
      
      <Heaader />
      <Switch>
          <Route exact path='/' component={Listings}/>
        </Switch>

      {/* MAKE A FOOTER WITH ALL OUR INFO */}
      <Footer />

      {/*  PLANT DETAILS */}
      {/* <Header />
      <PlantDetail/>
      <Footer /> */}

    </>
    </Router>
  )
}

// function mapState2Props (globalstate) {
//   return {
//     page: globalstate.page
//   }
// }


// export default connect(mapState2Props)(App)

export default App
