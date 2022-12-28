import React from "react"
import { HeadBar } from "./components/Headbar"
import { Cv } from "./components/cv"

export class App extends React.Component {
  render() {
    return (
      <div>
        <HeadBar/>
        <Cv/>
      </div>
    )
  }
}
