import { useState, useRef } from "react"
import { getImageUrl } from "./utils/getImageUrl"
import viewImage from "../assets/images/shared/icon-view-image.svg"
import "../assets/styles/sass/components/_slide.scss"

function Slide({infos}){
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false)
  const galleryDialogRef = useRef(null)

  const toggleDialog = () => {
    setGalleryDialogOpen(!galleryDialogOpen)
    galleryDialogOpen ? galleryDialogRef.current.close() : galleryDialogRef.current.showModal()
  }

  return(
    <div className="embla__slide slide">
      <div className="slide-block1">
        <div className="slide-view">
          <picture>
            <source media="(min-width: 35rem)" srcset={getImageUrl(infos.images.folder, infos.images.hero.large)} />
            <img  className="slide-preview"
                  src={getImageUrl(infos.images.folder, infos.images.hero.small)} alt="" />
          </picture>
          <button className="slide-view_button-open" onClick={toggleDialog} type="button">
            <img src={viewImage} alt="" />
            <span>View image</span>
          </button>
          <dialog ref={galleryDialogRef}>
            <button className="slide-view_button-close" onClick={toggleDialog} type="button">Close</button>
            <img src={getImageUrl(infos.images.folder, infos.images.gallery)} alt="" />
          </dialog>
        </div>
        <div className="slide-titles">
          <h2>{infos.name}</h2>
          <p>{infos.artist.name}</p>
        </div>
        <div className="slide-artist">
          <img src={getImageUrl(infos.images.folder, infos.artist.image)} alt="" />
        </div>
      </div>
      <div className="slide-block2">
        <time dateTime={infos.year}>{infos.year}</time>
        <p>{infos.description}</p>
        <a href={infos.source} target="_blank">Go to source</a>
      </div>
    </div>
  )
}

export default Slide