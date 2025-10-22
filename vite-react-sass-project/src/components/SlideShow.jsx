import { useContext } from "react"
import { DialogContext } from './context/DialogContext'
import Header from "./Header"
import TitleBlock from "./TitleBlock"
import DescriptionBlock from "./DescriptionBlock"
import SlideShowFooter from "./SlideShowFooter"

function SlideShow(){
  const {dialogRef} = useContext(DialogContext)

  return(
    <dialog ref={dialogRef}>
      <Header />
      <div>
        <TitleBlock />
        <DescriptionBlock />
      </div>
      <SlideShowFooter />
    </dialog>
  )
}

export default SlideShow