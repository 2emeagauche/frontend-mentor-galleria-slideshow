import { useState } from "react"
import { DialogContext } from "./components/context/DialogContext"
import "./assets/styles/sass/main.scss"
import Header from "./components/Header"
import Card from "./components/Card"
import SlideShow from "./components/SlideShow"
import data from "./assets/data/data.json"



function App() {
  const [slideshowOpen, setSlideshowOpen] = useState(false)
  const [infoId, setInfoId] = useState(0)
  const [start, setStart] = useState(false)

  function toggleSlideshow(infoId, startSlideshow) {
    setSlideshowOpen(!slideshowOpen)
    setStart(startSlideshow)
    if(!slideshowOpen) {
      setInfoId(infoId)
    }
  }

  return (
    <div className="global-wrapper">
      <DialogContext value={{ slideshowOpen: slideshowOpen,
                              handleSlideshow: toggleSlideshow,
                              infoId: infoId,
                              setInfoId: setInfoId,
                              startSlideshow: start
                            }}>
        <Header />
        {
          slideshowOpen ?
          <SlideShow />
          :
          <div className="cards-layout">
            {
              data.map((info, i) => <Card key={i} infoId={i} info={info} />)
            }
          </div>
        } 
      </DialogContext>
    </div>
  )
}

export default App
