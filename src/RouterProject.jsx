import React, { Component } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

export default class RouterProject extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}
