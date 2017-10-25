import React from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/Header.scss';
import MdHome from 'react-icons/lib/md/home';
import MdPerson from 'react-icons/lib/md/person';
import TiCode from 'react-icons/lib/ti/code';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';

const activeClassName = 'is-active';

const Header = () => (
  <header className="nav">
    <nav className="nav__list-wrap">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
                  to='/'exact
                  activeClassName={activeClassName}
                  data-name="Home">
                  <MdHome />
          </NavLink >
        </li>
        <li className="nav__item">
          <NavLink
                  to='/about'
                  activeClassName={activeClassName}
                  data-name="About">
                  <MdPerson />
          </NavLink >
        </li>
        <li className="nav__item">
          <NavLink
                  to='/skills'
                  activeClassName={activeClassName}
                  data-name="Skills">
                  <TiCode/>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
                  to='/work'
                  activeClassName={activeClassName}
                  data-name="Work">
                  <TiLightbulb/>
          </NavLink>
        </li>
      </ul>
    </nav>
    <ul className="social">
      <li className="social__item"><a href="https://www.facebook.com/syrotyna.pavel" target="_blank" rel="noopener noreferrer"><TiSocialFacebook/></a></li>
      <li className="social__item"><a href="https://www.linkedin.com/in/pavel-syrotyna-26a592101/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin/></a></li>
      <li className="social__item"><a href="https://plus.google.com/108188473574951932299" target="_blank" rel="noopener noreferrer"><TiSocialGooglePlus/></a></li>
    </ul>
  </header>
)

export default Header
