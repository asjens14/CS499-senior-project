import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spending Go Up</h1>
      <div>        
        <Link to='state-compare'>State Compare</Link>
        <Link to='year-compare'>Year Compare</Link>
        <a href="">More</a>
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}
 
export default Navbar;