import "./sidebar.css"
import myImg from "../images/my-image.jpeg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME TITLE</span>
        <img src={myImg} alt="" />
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Autem molestiae reprehenderit quidem dolorum.
        </p>
      </div>
      <div className="sitebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
        </ul>
      </div>
      <div className="sitebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocials">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
