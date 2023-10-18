import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spending Go Up</h1>
      <div>
        <a>State</a>
        <Link to='state-compare'>State Compare</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}
 
export default Navbar;