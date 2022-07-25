import { useState } from 'react'
import users from '../JSON/users.json'
import colors from '../utils/colors'

const QuoteRandom = () => {

    const createNumberRandom = array => {
        return Math.floor(Math.random() * array.length)
      }
    
      const getElementRandom = array => {
        const i = createNumberRandom(array)
        return array[i]
      }
      
      const [userRandom, setUserRandom] = useState(getElementRandom(users))
      const [colorRandom, setColorRandom] = useState(getElementRandom(colors))
      
        const clickButton = () => {
         setUserRandom(getElementRandom(users)) 
         setColorRandom(getElementRandom(colors))
        }
       
      const appStyle = {
        backgroundColor: colorRandom
        }
        

  return ({userRandom, colorRandom, clickButton, appStyle})
}

export default QuoteRandom