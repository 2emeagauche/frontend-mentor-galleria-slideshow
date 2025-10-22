import { useContext } from "react"
import { DialogContext } from './context/DialogContext'
import Thumbnail from '../assets/images/starry-night/thumbnail.jpg'

function Card(){
  const {handleDialog} = useContext(DialogContext)

  return(
    <div>
      <img src={Thumbnail} alt="" />
      <h2>Starry Night</h2>
      <p>Vincent Van Gogh</p>
      <button onClick={handleDialog}>
        <span className="sr-only">Open information sheet</span>
      </button>
    </div>
  )
}

export default Card