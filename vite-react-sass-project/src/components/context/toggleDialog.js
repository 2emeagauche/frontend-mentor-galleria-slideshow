export const toggleDialog = (setDialogOpen, dialogOpen, dialogRef) => {
  setDialogOpen(!dialogOpen)
  dialogOpen ? dialogRef.current.close() : dialogRef.current.showModal()
}