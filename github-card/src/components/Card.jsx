import React from 'react'

const card = ({profile}) => {
  return (
    <div>
        <img src={profile.avatar_url} alt="profile" />
            <h2>{profile.login}</h2>
    </div>
  )
}

export default card