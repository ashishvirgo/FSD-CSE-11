import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
     <Link to="/">Home</Link> 
     <Link to="/counter">Counter App</Link> 
     <Link to="/stopwatch">StopWatch App</Link> 
     <Link to="/store">My Store</Link>
     <Link to="/login">Login</Link>
      </div>
  )
}

export default Navbar
