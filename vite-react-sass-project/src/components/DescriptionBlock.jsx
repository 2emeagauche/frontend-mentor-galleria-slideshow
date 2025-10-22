import { useContext } from "react"
import { DialogContext } from "./context/DialogContext"
import data from "../assets/data/data.json"

function DescriptionBlock(){
  const {infoId} = useContext(DialogContext)
  return(
    <div>
      <time dateTime={data[infoId].year}>{data[infoId].year}</time>
      <p>{data[infoId].description}</p>
      <a href={data[infoId].source}>Go to source</a>
    </div>
  )
}

export default DescriptionBlock