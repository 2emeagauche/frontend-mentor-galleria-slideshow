import { useContext } from "react"
import { DialogContext } from './context/DialogContext'
import Thumbnail from '../assets/images/starry-night/thumbnail.jpg'

function Card({infoId, info}){
  const {handleDialog} = useContext(DialogContext)

  return(
    <div>
      <img src={Thumbnail} alt="" />
      <h2>{info.name}</h2>
      <p>{info.artist.name}</p>
      <button onClick={()=>handleDialog(infoId)}>
        <span className="sr-only">Open information sheet</span>
      </button>
    </div>
  )
}

export default Card