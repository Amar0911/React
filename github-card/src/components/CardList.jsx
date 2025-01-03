import React from 'react'
import Card from './card'

const cardList = ({profiles}) => {
  return (
    <div className='card-list'>
        {profiles.map((profile) => (
            <Card key={profile.id} profile={profile}/>
        ))};
    </div>
  )
}

export default cardList