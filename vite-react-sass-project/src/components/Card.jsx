import Thumbnail from '../assets/images/starry-night/thumbnail.jpg'

function Card(){
  return(
    <div>
      <img src={Thumbnail} alt="" />
      <h2>Starry Night</h2>
      <p>Vincent Van Gogh</p>
      <button>
        <span class="sr-only">Open information sheet</span>
      </button>
    </div>
  )
}

export default Card