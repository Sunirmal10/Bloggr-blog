import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {

  const [dropdown, setDropdown] = useState(false)
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setDropdown(!dropdown)
  };

  const handleDropdown = () => {
      setDropdown(!dropdown)
  }

  const moreRef = useRef();
 const btnRef = useRef();

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && btnRef.current && !moreRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top">
      <div className="topLeft">
        <Link to={'/'} className="logo">B 
        <span>loggr</span></Link>
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
        {user ? (<>
          
            <img className="topImg" src={user.profilePic ? PF+user.profilePic : "/images/user.png" } alt="PP" onClick={handleDropdown}
            ref={btnRef}
            />
         
          {dropdown && <div className="more" ref={moreRef}>
              <Link to={'/settings'} style={{textDecoration: 'none'}}>
                <div  className="morelist">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <span>Profile</span>
                </div>
              </Link>

            <div onClick={handleLogout} className="morelist">
            <i class="fa fa-power-off" aria-hidden="true"></i>
              <span>Logout</span>
            </div>
            
          </div>}
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem log">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
