import React from 'react'
import Link from './Link'

export default function Image(props) {
  let counter = 0

  function onClickHandler() {
    counter += 1
    console.log(counter)
  }

  console.log(props)

  return (
    <>
      <Link url={props.image} text={props.title} />
      <img onClick={onClickHandler} src={props.image} alt="logo" />
      {props.description ? <strong>{props.description}</strong> : "No description" }
      {counter}
    </>
  )
}

/*
    1. Returnera JSX
    2. Endast returnera ett element (men som i sin tur kan ha oändligt många child-komponenter)

    Extrapoäng:
    * Props får inte ändras (mutera)
*/