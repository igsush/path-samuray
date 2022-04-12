import React from 'react'
import myPostClasses from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
  return (
    <div>
        My posts
        <div>New post</div>
        <div className='posts'>
          <Post message = 'hello!' count = '199'/>
          <Post message = 'second post' count='5'/>
          
          <div className={myPostClasses.item}>post 2</div>
        </div>
      </div>
  )
}

export default MyPost