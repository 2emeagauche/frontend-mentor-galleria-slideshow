import HeroSmallImage from '../assets/images/starry-night/hero-small.jpg'
import ArtistImage from '../assets/images/starry-night/artist.jpg'
import GalleryImage from '../assets/images/starry-night/gallery.jpg'

function TitleBlock(){
  return(
    <div>
      <div>
        <img src={HeroSmallImage} alt="" />
        <button>View image</button>
        <dialog open={true}>
          <button>Close</button>
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