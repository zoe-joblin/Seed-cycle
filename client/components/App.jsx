import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import connect from 'react-redux'


import Heaader from './Header'
import ListingItem from './ListingItem'
// import Listings from '/Listings'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
    <>
      
      <Heaader />
      <Switch>
          <Route exact path='/' component={ListingItem}/>
        </Switch>

      {/* MAKE A FOOTER WITH ALL OUR INFO */}
      <Footer />
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
