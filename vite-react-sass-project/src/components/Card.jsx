import { useContext } from "react"
import { DialogContext } from './context/DialogContext'
import { getImageUrl } from "./utils/getImageUrl"

function Card({infoId, info}){
  const {handleDialog} = useContext(DialogContext)

  return(
    <div className="card">
      <img className="card_visual" src={getImageUrl(info.images.folder, info.images.thumbnail)} alt="" />
      <div className="card_infos">
        <h2 className="card_title">{info.name}</h2>
        <p className="card_artist">{info.artist.name}</p>
      </div>
      <button className="card_button" onClick={()=>handleDialog(infoId)}>
        <span className="sr-only">Open information sheet</span>
      </button>
    </div>
  )
}

export default Card