import React from 'react'

const Card = ({userRandom, colorRandom, clickButton}) => {

  const styleButton = {
    backgroundColor: colorRandom
  }

    return (
    <article className= 'card' style={{color:colorRandom}}>
        <h2 className='card__title'>HAIKU</h2>
        <ul className='card__list'>
          <li className='card__list'>
            <b>{userRandom.txt_japanese}</b>
          </li>
          <br />
          <li className='card__list'>
            <b className='card__b'></b>
            {userRandom.txt}
          </li>
          <li className='card__list'>
            <b className='card__b'>Author: </b>
            {userRandom.author}
          </li>
          <li className='card__list'>
            <b className='card__b'>Date: </b>
            {userRandom.date}
          </li>
        </ul>
        <button 
        style={styleButton} 
        onClick={clickButton}
        className='card__btn'> &gt;
        </button>
    </article>
    )
}

export default Card