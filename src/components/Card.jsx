import { useContext } from "react"
import { DialogContext } from './context/DialogContext'
import { getImageUrl } from "./utils/getImageUrl"
import "../assets/styles/sass/components/_card.scss"

function Card({infoId, info}){
  const {handleSlideshow} = useContext(DialogContext)

  return(
    <div className="card">
      <img className="card_visual" src={getImageUrl(info.images.folder, info.images.thumbnail)} alt="" />
      <div className="card_infos">
        <h2 className="card_title">{info.name}</h2>
        <p className="card_artist">{info.artist.name}</p>
      </div>
      <button className="card_button" onClick={()=>handleSlideshow(infoId, false)}>
        <span className="sr-only">Open information sheet</span>
      </button>
    </div>
  )
}

export default Card