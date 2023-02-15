import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <header className='navbar'>
      <Link
        to='hero'
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
        className='nav-logo'
      >
        adelin.
      </Link>

      <nav className='main-nav'>
        <ul className={nav ? "main-nav-list active" : "main-nav-list"}>
          <li>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className='main-nav-link'
              onClick={handleNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className='main-nav-link'
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className='main-nav-link'
              onClick={handleNav}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className='main-nav-link'
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button className='hamburger' onClick={handleNav}>
        {nav ? (
          <FontAwesomeIcon icon={faX} className='hamburger-icon' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='hamburger-icon' />
        )}
      </button>
    </header>
  );
}
