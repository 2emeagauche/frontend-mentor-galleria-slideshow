import { useState, useRef, useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import HeroSmallImage from '../assets/images/starry-night/hero-small.jpg'
import ArtistImage from '../assets/images/starry-night/artist.jpg'
import GalleryImage from '../assets/images/starry-night/gallery.jpg'

import data from "../assets/data/data.json"

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
        <img src={HeroSmallImage} alt="" />
        <button onClick={toggleDialog}>View image</button>
        <dialog ref={galleryDialogRef}>
          <button onClick={toggleDialog}>Close</button>
          <img src={GalleryImage} alt="" />
        </dialog>
      </div>
      <div>
        <h2>{data[infoId].name}</h2>
        <p>{data[infoId].artist.name}</p>
      </div>
      <div>
        <img src={ArtistImage} alt="" />
      </div>
    </div>
  )
}

export default TitleBlock