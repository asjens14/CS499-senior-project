import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to='/'>Spending Go Up</Link></h1>
        <Link to="/about">About</Link>
      <div className='dropdown'>        
        <Link to='state-compare'>State Compare</Link>
        <Link to='year-compare'>Year Compare</Link>
        <a>More</a>

      </div>
    </nav>
  );
}
 
export default Navbar;