import { useState, useRef } from "react"
import { DialogContext } from "./components/context/DialogContext"
import Header from "./components/Header"
import Card from "./components/Card"
import SlideShow from "./components/SlideShow"

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const dialogRef = useRef(null)

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen)
    dialogOpen ? dialogRef.current.close() : dialogRef.current.showModal()
  }

  return (
    <>
      <DialogContext value={{dialogOpen: dialogOpen, handleDialog:toggleDialog, dialogRef: dialogRef}}>
        <Header />
        <div>
          <Card />
        </div>
        <SlideShow />
      </DialogContext>
    </>
  )
}

export default App
