import { useContext, useCallback, useEffect } from "react"
import { DialogContext } from './context/DialogContext'
import Header from "./Header"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from "./embla-utils/useAutoplay"
import Slide from "./Slide"
import SlideShowFooter from "./SlideShowFooter"
import data from "../assets/data/data.json"

function SlideShow() {
  const { dialogRef, infoId, setInfoId, startSlideshow } = useContext(DialogContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: false })])
  const { toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi)

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

  const playOnStart = useCallback((emblaApi) => {
    toggleAutoplay()
    emblaApi.off('slidesInView', playOnStart)
  },
    [toggleAutoplay])

  useEffect(() => {
    if (emblaApi && startSlideshow) emblaApi.on('slidesInView', playOnStart)
  },
    [emblaApi, playOnStart, startSlideshow]
  )


  return (
    <dialog className="dialog-slideshow" ref={dialogRef}>
      <Header />
      <div className="embla slideshow">
        <div className="embla__viewport" ref={emblaRef}>
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
    </dialog>
  )
}

export default SlideShow