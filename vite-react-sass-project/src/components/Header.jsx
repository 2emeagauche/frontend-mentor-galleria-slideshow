import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import Logo from '../assets/images/shared/logo.svg'

function Header(){
  const {dialogOpen, handleDialog, infoId} = useContext(DialogContext)

  return(
    <div className="header">
      <h1><img src={Logo} alt="galleria" width="113" /><span className="sr-only">galleria</span></h1>
      <button className="header_button" onClick={()=>handleDialog(infoId)}>{`${dialogOpen?'Stop':'Start'} Slideshow`}</button>
    </div>
  )
}

export default Header