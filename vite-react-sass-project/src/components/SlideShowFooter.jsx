import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import { usePrevNextButtons } from "./embla-utils/usePrevNextButtons"
import { PrevButton, NextButton } from "./embla-utils/EmblaCarouselArrowButtons"
import data from "../assets/data/data.json"

function SlideShowFooter({emblaApi, onAutoplayButtonClick}){
  const {infoId} = useContext(DialogContext)
  const dataLength = data.length
  const progressionRate = 100 * ((infoId + 1) / dataLength)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return(
    <>
    <div className="footer-top-separator" style={{backgroundImage: `linear-gradient(90deg, #000000 ${progressionRate}%, hsl(0, 0%, 90%) ${progressionRate}%)`}}></div>
    <div className="slide-footer">
      <div className="footer_container">
        <div>
          <h4 className="footer_title">{data[infoId].name}</h4>
          <p className="footer_name">{data[infoId].artist.name}</p>
        </div>
        <nav className="footer_nav">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </nav>
      </div>
    </div>
    </>
  )
}

export default SlideShowFooter