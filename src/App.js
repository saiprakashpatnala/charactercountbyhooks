import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import CharacterItem from './Components/CharacterItem'

import './App.css'

// Replace your code here
const App = () => {
  const [text, setText] = useState('')

  const [characterList, setCharacterList] = useState([])

  const changeTextElement = event => {
    setText(event.target.value)
  }

  const enterCharacters = event => {
    event.preventDefault()
    const newText = {
      id: uuidv4(),
      text,
      characterList,
    }

    setCharacterList(prevText => [...prevText, newText])
    setText('')
  }

  return (
    <div className="container">
      <div className="word-container">
        <h1 className="heading">
          Count the characters like a
          <br />
          Boss...
        </h1>
        <div className="image-container">
          {characterList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              className="image"
              alt="no user inputs"
            />
          ) : (
            <ul className="list-container">
              {characterList.map(each => (
                <CharacterItem details={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="bg-container">
        <h1 className="title">Character Counter</h1>
        <div>
          <form onSubmit={enterCharacters}>
            <div className="input-container">
              <input
                type="text"
                value={text}
                onChange={changeTextElement}
                className="text-element"
                placeholder="Type the Characters"
              />
              <button className="button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
