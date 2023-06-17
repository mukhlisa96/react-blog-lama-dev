import "./post.css";
import myImg from "../../images/my-image.jpeg"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={myImg} alt=""/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem Title</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsum ut illo repudiandae laborum placeat asperiores amet 
        nobis dolorum, voluptatibus maxime fugit aperiam? 
        Qui facere officiis, maxime asperiores debitis eaque expedita!
      </p>

    </div>
  )
}
