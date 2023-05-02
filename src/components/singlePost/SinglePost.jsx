import "./singlePost.css"
import headerImg from "../images/header-bg.jpg";


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={headerImg} alt="" className="singlePostImg"/>
        <h1 className="singlePostTitle">
            Lorema title
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singkePostAuthor">Author: <b>Mukhlisa</b></span>
            <span className="singkePostDate">1 hour ago</span>
        </div>
      </div>
    </div>
  )
}
