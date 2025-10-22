import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"

function Header(){
  const {dialogOpen, handleDialog} = useContext(DialogContext)

  return(
    <div>
      <h1>Galleria</h1>
      <button onClick={handleDialog}>{`${dialogOpen?'Close':'Open'} Slideshow`}</button>
    </div>
  )
}

export default Header