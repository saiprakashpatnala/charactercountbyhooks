import './index.css'

const CharacterItem = props => {
  const {details} = props
  const {text} = details
  return (
    <li className="list-item">
      <p className="para">
        {text}: {text.length}
      </p>
    </li>
  )
}

export default CharacterItem
