function GalleryFooter(){
  return(
    <div>
      <nav>
        <div>
          <h4>Starry Night</h4>
          <p>Vincent Van Gogh</p>
        </div>
        <div>
          <button>
            <span className="sr-only">Previous</span>
          </button>
          <button>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default GalleryFooter