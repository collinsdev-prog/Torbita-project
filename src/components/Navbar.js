import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Logo  from './Assets/graphics/torbitalogo.png';

function Navbar () {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () =>setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      dropdown ? setDropdown( false) : setDropdown(true);
      // setDropdown(!true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
     <nav className='navbar' >
        <Link to='/home' className='navbar-logo'>
           <img src={Logo} alt="Logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-items'
              onClick={onMouseEnter}
              // onClick={onMouseLeave}
          >
            <Link to='/Courses' className='nav-links' onClick={closeMobileMenu}>
            {dropdown && <Dropdown />}
              Courses <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>
              FAQs
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className='nav-items'>
            <Link to='/apply-now' className='nav-links-mobile' onClick={closeMobileMenu}>
              Apply Now
            </Link>
          </li>
        </ul>
        <Button />
     </nav>
    </>
  );
};

export default Navbar;
