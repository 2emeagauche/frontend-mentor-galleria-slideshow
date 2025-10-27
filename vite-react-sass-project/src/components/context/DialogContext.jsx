import { createContext } from "react";

export const DialogContext = createContext({slideshowOpen:false, handleSlideshow: null, slideshowRef:null, infoId:0, setInfoId:null, startSlideshow: false})