import { useState, useRef } from "react"
import HeroSmallImage from '../assets/images/starry-night/hero-small.jpg'
import ArtistImage from '../assets/images/starry-night/artist.jpg'
import GalleryImage from '../assets/images/starry-night/gallery.jpg'

function TitleBlock(){
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
        <h2>Starry Night</h2>
        <p>Vincent Van Gogh</p>
      </div>
      <div>
        <img src={ArtistImage} alt="" />
      </div>
    </div>
  )
}

export default TitleBlock