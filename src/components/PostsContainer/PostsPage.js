//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = props => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(p => (
      <Post key={p.imageUrl} post={p}/>
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

