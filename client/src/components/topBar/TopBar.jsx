import "./topBar.css"
import userImg from "../../images/user.jpg"
import { Link } from "react-router-dom";


export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">Home</Link></li>
          <li className="topListItem"><Link className="link" to="/about">About</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">Contact</Link></li>
          <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img alt="blog" className="topImg" src={userImg} />

          ) : (
            <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
              <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
