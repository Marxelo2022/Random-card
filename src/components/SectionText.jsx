import React from 'react'

const SectionText = ({userRandom}) => {

  return (
    <>
     <li className='card__list'>
        <b>{userRandom.txt_japanese}</b>
     </li>
        <br/>
     <li className='card__list'>
        <b className='card__b'></b>
        {userRandom.txt}
     </li>
    </>
  )
}

export default SectionText