import React from "react"
import { HeadBar } from "./components/Headbar"
import CvForm from "./components/form"
import CvInfo from "./components/info"

export class App extends React.Component {
  render() {
    return (
      <div>
        <HeadBar/>
        <div className="cvSection">
          <CvForm/>
          <CvInfo/>
        </div>
      </div>
    )
  }
}
