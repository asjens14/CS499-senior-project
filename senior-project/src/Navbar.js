import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spending Go Up</h1>
      <div>
        <a>State</a>
        <a>All States</a>
        <a href="/about">About</a>

      </div>
    </nav>
  );
}
 
export default Navbar;