import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import Logo from '../assets/images/shared/logo.svg'

function Header(){
  const {dialogOpen, handleDialog} = useContext(DialogContext)

  return(
    <div className="header">
      <h1><img className="header_logo" src={Logo} alt="galleria" width="113" /><span className="sr-only">galleria</span></h1>
      <button className="header_button" onClick={()=>handleDialog(0, !dialogOpen)}>{`${dialogOpen?'Stop':'Start'} Slideshow`}</button>
    </div>
  )
}

export default Header