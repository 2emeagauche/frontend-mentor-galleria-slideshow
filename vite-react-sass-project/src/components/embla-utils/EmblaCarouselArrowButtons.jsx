
import ImagePrev from "../../assets/images/shared/icon-back-button.svg"
import ImageNext from "../../assets/images/shared/icon-next-button.svg"

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="footer_button footer_button--prev"
      type="button"
      {...restProps}
    >
      <img src={ImagePrev} alt="" width="17" />
      <span className="sr-only">Previous slide</span>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="footer_button footer_button--next"
      type="button"
      {...restProps}
    >
      <img src={ImageNext} alt="" width="17" />
      <span className="sr-only">Next slide</span>
      {children}
    </button>
  )
}
