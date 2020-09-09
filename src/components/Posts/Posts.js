import React, {useState} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props
  // console.log(posts[0].id)
  // console.log(posts)
  // console.log(props.data)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}

      {
        posts.map(item =>{
          console.log(item)
          return (
            <Post
            key = {item.id}
            post = {item}
            likePost = {likePost}
            />
          )
        })
      }

      {/* {posts.map(
        function(item){
          return <Post username={item.username} text={item.text} />
        }
      )} */}

      {/* {posts} */}

      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
