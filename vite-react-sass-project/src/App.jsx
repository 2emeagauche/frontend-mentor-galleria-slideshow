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
  const dialogRef = useRef(null)

  function toggleDialog(infoId) {
    setDialogOpen(!dialogOpen)
    if(dialogOpen) {
      dialogRef.current.close()
    } else {
      dialogRef.current.showModal()
      setInfoId(infoId)
    }
  }

  return (
    <>
      <DialogContext value={{ dialogOpen: dialogOpen,
                              handleDialog: toggleDialog,
                              dialogRef: dialogRef,
                              infoId: infoId,
                              setInfoId: setInfoId
                            }}>
        <Header />
        <div className="cards-layout">
          {
            data.map((info, i) => <Card key={i} infoId={i} info={info} />)
          }
        </div>
        <SlideShow />
      </DialogContext>
    </>
  )
}

export default App
