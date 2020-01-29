import React, { Component } from 'react'
import LeftCard from "./LeftCard"
import MiddleCard from "./MiddleCard"
import RightCard from "./RightCard"
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <LeftCard/>
        <MiddleCard/>
        <RightCard/>
      </div>
    )
  }
}

