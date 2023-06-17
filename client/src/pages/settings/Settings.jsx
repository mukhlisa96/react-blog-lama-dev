import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import myImg from "../../images/header-bg.jpg";
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update</div>
                    <div className="settingsDeleteTitle">Delete</div>
                </div>
            
            <form className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img
                        src={myImg}
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Mukhlisa" />
                <label>Email</label>
                <input type="email" placeholder="mukhlisa@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
            </div>  
            <Sidebar />
        </div>
    )
}
