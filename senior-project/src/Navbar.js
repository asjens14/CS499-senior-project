import {Link} from 'react-router-dom';
import Media from 'react-media'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
// max-width:420
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleClass = () =>{
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div>
      <Media queries={{ small: "(max-width:470px)" }}>
        {matches =>
        matches.small ? (
          <nav className='topnav'>
            <Link to='/'><h1>Spending Go Up</h1></Link>
            <div className="myLinks">{/*myLinks*/}
              <div className={isCollapsed ? 'mobile-dropdown-content collapsed':'mobile-dropdown-content displayed'}>        
                <Link to="/about">About</Link>
                <Link to='state-compare'>State Compare</Link>
                <Link to='year-compare'>Spending over time</Link>
                <Link to='debt'>Debt</Link>
                {/* <Link to='year-compare'>download</Link> */}
                <Link to="agency-spending">Agencies</Link>
                {/* <a href="">Disaster</a> */}
              </div>
              <a onClick={toggleClass} className='icon'><FontAwesomeIcon icon={faBars} /></a>{/*icon*/}
            </div>            
          </nav>
        ) : (
          <nav className="navbar">
            <Link to='/'><h1>Spending Go Up</h1></Link>
              <Link to="/about">About</Link>
              <div className="dropdown">
                <button className='dropbtn'>More</button>
                <div className='dropdown-content'>        
                  <Link to='state-compare'>State Compare</Link>
                  <Link to='states-by-year'>States by year</Link>
                  <Link to='year-compare'>Spending over time</Link>
                  <Link to='debt'>Debt</Link>
                  {/* <Link to='year-compare'>download</Link> */}
                  <Link to="agency-spending">Agencies</Link>
                  {/* <a href="disaster-spending">Disaster</a> */}
                </div>
              </div>
          </nav>
        )}

      </Media>
    </div>
  );
}
 
export default Navbar;