import { useState, useRef } from "react"
import { DialogContext } from "./components/context/DialogContext"
import Header from "./components/Header"
import Card from "./components/Card"
import SlideShow from "./components/SlideShow"
import data from "./assets/data/data.json"

const dataSize = data.length

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

  return (
    <>
      <DialogContext value={{
                            dialogOpen: dialogOpen,
                            handleDialog: toggleDialog,
                            dialogRef: dialogRef,
                            infoId: infoId,
                            handleSlideShowNavigation: handleSlideShowNavigation
      }}>
        <Header />
        <div>
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
