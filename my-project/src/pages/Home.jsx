import { Fragment } from "react"
import Landing from "../components/Landing"
import Features from "../components/Features"
import StayProductive from "../components/StayProductive"
import Testimonials from "../components/Testimonials"
import GetStarted from "../components/GetStarted"


function Home() {
  return (
    // i used fragment 34an hrg3 aktr mn 3onsoor
    <Fragment>
      <Landing/>
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted/>
    </Fragment>
  )
}

export default Home