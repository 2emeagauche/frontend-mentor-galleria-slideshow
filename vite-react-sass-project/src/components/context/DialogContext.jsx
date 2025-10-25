import { createContext } from "react";

export const DialogContext = createContext({dialogOpen:false, handleDialog: null, dialogRef:null, infoId:0, setInfoId:null, startSlideshow: false})