import React, { Component } from 'react'
import LeftCard from "./LeftCard"
import MiddleCard from "./MiddleCard"
import RightCard from "./RightCard"
// import NavBar from "./NavBar"
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <LeftCard/>
        <MiddleCard/>
        <RightCard/>
      </div>
    )
  }
}
