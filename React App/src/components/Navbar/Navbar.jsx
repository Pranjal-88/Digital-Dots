import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/navlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import userimg from '../../assets/profile.webp';
const Navbar = ({ setshowLogin, user }) => {
  // const user=true
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      const getNavItm = () => {
        
        if(user == 'student') {
          return (
            <>
            <Link to='/test' onClick={() => setMenu("test")} className={menu === "test" ? "active" : ""}>Assessment</Link>
            <Link to='/feedi' onClick={() => setMenu("feedback")} className={menu === "feedback" ? "active" : ""}>Feedback Form</Link>
            <Link to='/grevence' onClick={() => setMenu("grevence")} className={menu === "grevence" ? "active" : ""}>Grievance Form</Link>
            <Link to='/profile'  onClick={() => setMenu("log")} className={menu === "log" ? "active" : ""}><img className="userimg" src={userimg}/></Link>

            </>
          )
        } 
        else if(user == 'admin') {
          return (
            <>
            <Link to='/colleges' onClick={() => setMenu("colleges")} className={menu === "colleges" ? "active" : ""}>Colleges</Link>
            <Link to='/students' onClick={() => setMenu("students")} className={menu === "students" ? "active" : ""}>Students</Link>
            <Link to='/aluminis' onClick={() => setMenu("aluminis")} className={menu === "aluminis" ? "active" : ""}>Aluminis</Link>
            <Link to='/feedback' onClick={() => setMenu("FeedbackAN")} className={menu === "FeedbackAN" ? "active" : ""}>Feedback Analysis</Link>
            <Link to='/'  onClick={() => setMenu("log")} className={menu === "log" ? "active" : ""}><img className="userimg" src={userimg}/></Link>
            </>
          )
        }
        else {
          return (
            <>
            <Link to='/#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</Link>
            <Link to='/contact' onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Contact</Link>
            <Link to='/program' onClick={() => setMenu("ngo")} className={menu === "ngo" ? "active" : ""}>Our Programs</Link>
            <Link to='/donate' onClick={() => setMenu("Donate")} className={menu === "Donate" ? "active" : ""}>Donate</Link>
       
            </>
          )
        }
      }

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="Logo" className='logo' />
      </Link>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>{getNavItm()}</div>
    
         <div className="nav-bar-right">
         {user ? (
                <div className="user">
                </div>
            ) : (
              <button onClick={() => setshowLogin(true)}>Login</button>
            )}
         
     </div>

   
           
      <button className='hamburger' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;