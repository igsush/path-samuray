import React from 'react'
import ProfileInfoClass from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img width='500px' src="https://picsum.photos/1000/600?image=970"></img>
      </div>
      <div className={ProfileInfoClass.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo