import { Link } from "react-router-dom"
import Image from '../images/main_header.png'






const MainHeader = () => {
  return (
    <div>
      <header className="main__header">
<div className="container main__header-container">
<div className="main__header-left">
  <h4>
    #100DaysofWorkout
  </h4>
  <h1>Join the Legends of the Fitness World</h1>
  <p>loreum lipsum sit amet, conscetor eelit .alique exceptutri simlique elus optio.</p>
<Link to='/plans' className="btn lg">Get Started</Link>
</div>
<div className="main__header-right">
  <div className="main__header-circle"></div>
  <div className="main__header-image">
    <img src={Image} alt ='mainheaderimage'/> 
  </div>
</div>
</div>
      </header>
    </div>
  )
}

export default MainHeader
