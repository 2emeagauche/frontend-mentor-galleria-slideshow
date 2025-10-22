import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import data from "../assets/data/data.json"

function SlideShowFooter(){
  const {infoId, handleSlideShowNavigation} = useContext(DialogContext)

  return(
    <div>
      <nav>
        <div>
          <h4>{data[infoId].name}</h4>
          <p>{data[infoId].artist.name}</p>
        </div>
        <div>
          <button onClick={() => handleSlideShowNavigation(infoId, "prev")}>
            <span className="sr-only">Previous</span>
          </button>
          <button onClick={() => handleSlideShowNavigation(infoId, "next")}>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SlideShowFooter