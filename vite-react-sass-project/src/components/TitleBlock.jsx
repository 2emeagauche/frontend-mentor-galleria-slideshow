import { useState, useRef, useContext } from "react"
import { DialogContext } from "./context/DialogContext"

import data from "../assets/data/data.json"

import { getImageUrl } from "./utils/getImageUrl"

function TitleBlock(){
  const {infoId} = useContext(DialogContext)
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false)
  const galleryDialogRef = useRef(null)

  const toggleDialog = () => {
    setGalleryDialogOpen(!galleryDialogOpen)
    galleryDialogOpen ? galleryDialogRef.current.close() : galleryDialogRef.current.showModal()
  }

  return(
    <div>
      <div>
        <img src={getImageUrl(data[infoId].images.folder, data[infoId].images.hero.small)} alt="" />
        <button onClick={toggleDialog}>View image</button>
        <dialog ref={galleryDialogRef}>
          <button onClick={toggleDialog}>Close</button>
          <img src={getImageUrl(data[infoId].images.folder, data[infoId].images.gallery)} alt="" />
        </dialog>
      </div>
      <div>
        <h2>{data[infoId].name}</h2>
        <p>{data[infoId].artist.name}</p>
      </div>
      <div>
        <img src={getImageUrl(data[infoId].images.folder, data[infoId].artist.image)} alt="" />
      </div>
    </div>
  )
}

export default TitleBlock