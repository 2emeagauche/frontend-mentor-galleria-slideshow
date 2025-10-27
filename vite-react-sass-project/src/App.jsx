import { useState, useRef } from "react"
import { DialogContext } from "./components/context/DialogContext"
import "./assets/styles/sass/main.scss"
import Header from "./components/Header"
import Card from "./components/Card"
import SlideShow from "./components/SlideShow"
import data from "./assets/data/data.json"



function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [infoId, setInfoId] = useState(0)
  const [start, setStart] = useState(false)
  const dialogRef = useRef(null)

  function toggleDialog(infoId, startSlideshow) {
    setDialogOpen(!dialogOpen)
    setStart(startSlideshow)
    if(dialogOpen) {
      dialogRef.current.close()
    } else {
      dialogRef.current.showModal()
      setInfoId(infoId)
    }
  }

  return (
    <div className="global-wrapper">
      <DialogContext value={{ dialogOpen: dialogOpen,
                              handleDialog: toggleDialog,
                              dialogRef: dialogRef,
                              infoId: infoId,
                              setInfoId: setInfoId,
                              startSlideshow: start
                            }}>
        <Header />
        <div className="cards-layout">
          {
            data.map((info, i) => <Card key={i} infoId={i} info={info} />)
          }
        </div>
        <SlideShow />
      </DialogContext>
    </div>
  )
}

export default App
