import React from 'react'
import './NavBar.css';


export interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    return (  
        <div className="nav">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Logo"
        />
      </div>
    );
}
 
export default NavBar;