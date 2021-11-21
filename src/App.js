import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.css';
import Header from './components/header/header.component';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {

  unsubscribedFromAuth = null
 
  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribedFromAuth  = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id, 
              ...snapShot.data()
            })
          }) 
        }
        
        setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth()    
  }

 
  
render() {

    

    return (
      <div>
        <Header />
        <Routes>
          
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {
            this.currentUser ?
            <Navigate to="/" /> :
            <Route path="/signin" element={<SignInAndSignUp />} />
          }

          

        </Routes>
      </div>
    )
  }
}

// REDUX
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// REDUX
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);