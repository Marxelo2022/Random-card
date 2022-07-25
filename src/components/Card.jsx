import React from 'react'
import useQuotes from '../hooks/useQuotes'
import SectionAuthor from './SectionAuthor'
import SectionText from './SectionText'

const Card = () => {

  const { userRandom, colorRandom, clickButton, appStyle } = useQuotes()

  const styleButton = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <article className='card' style={{ color: colorRandom }}>
        <h2 className='card__title'>HAIKU</h2>
        <ul className='card__list'>
          <SectionText 
            userRandom={userRandom}
          />
          <SectionAuthor 
            userRandom={userRandom}
          />
        </ul>
        <button
          style={styleButton}
          onClick={clickButton}
          className='card__btn'> &gt;
        </button>
      </article>
    </div>
  )
}

export default Card