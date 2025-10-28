import { useContext, useCallback, useEffect } from "react"
import { DialogContext } from './context/DialogContext'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from "./embla-utils/useAutoplay"
import Slide from "./Slide"
import SlideShowFooter from "./SlideShowFooter"
import data from "../assets/data/data.json"
import "../assets/styles/sass/components/_slideshow.scss"

function SlideShow() {
  const { infoId, setInfoId, startSlideshow } = useContext(DialogContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: startSlideshow })])
  const { onAutoplayButtonClick } = useAutoplay(emblaApi)

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(infoId)
  },
    [emblaApi, infoId]
  )

  const updateGlobalIndex = useCallback((emblaApi) => {
    const infoId = emblaApi.selectedScrollSnap()
    setInfoId(infoId)
  },
    [setInfoId]
  )

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', updateGlobalIndex)
  },
    [emblaApi, updateGlobalIndex]
  )

  return (
    <div className="embla slideshow">
      <div className="embla__viewport slideshow__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            data.map((infos, i) => {
              return (
                <Slide key={i} infos={infos} />
              )
            })
          }
        </div>
      </div>
      <SlideShowFooter emblaApi={emblaApi} onAutoplayButtonClick={onAutoplayButtonClick} />
    </div>
  )
}

export default SlideShow