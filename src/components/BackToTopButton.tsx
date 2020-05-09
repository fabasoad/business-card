import * as React from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  window.addEventListener(
    'scroll',
    () => setIsVisible(window.scrollY > 300),
    { passive: true }
  )

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a onClick={handleClick} className={(isVisible ? 'show ' : '') + 'back-to-top'}></a>
  )
}
