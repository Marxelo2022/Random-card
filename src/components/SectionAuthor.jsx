import React from 'react'

const SectionAuthor = ({userRandom}) => {
  return (
    <>
     <li className='card__list'>
        <b className='card__b'>Author: </b>
        {userRandom.author}
     </li>
     <li className='card__list'>
        <b className='card__b'>Date: </b>
        {userRandom.date}
     </li>
    </>
  )
}

export default SectionAuthor    