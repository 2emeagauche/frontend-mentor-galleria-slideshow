import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import data from "../assets/data/data.json"

const dataSize = data.length

function SlideShowFooter(){
  const {infoId, setInfoId} = useContext(DialogContext)

  function handleSlideShowNavigation(infoId, direction){
    let newId = 0
    if(direction === "next") {
      if (infoId >= 0 && infoId < dataSize - 1) {
        newId = infoId + 1
      } else {
        newId = 0
      }
    } else {
      if (infoId > 0 && infoId < dataSize) {
        newId = infoId - 1
      } else {
        newId = dataSize - 1
      }
    }
    setInfoId(newId)
  }

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