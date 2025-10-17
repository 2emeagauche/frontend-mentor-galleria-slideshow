import Header from "./Header"
import TitleBlock from "./TitleBlock"
import DescriptionBlock from "./DescriptionBlock"
import GalleryFooter from "./GalleryFooter"

function InfoSheet(){
  return(
    <dialog open={true}>
      <Header />
      <div>
        <TitleBlock />
        <DescriptionBlock />
      </div>
      <GalleryFooter />
    </dialog>
  )
}

export default InfoSheet