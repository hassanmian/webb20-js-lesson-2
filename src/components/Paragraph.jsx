import React from 'react'

export default function Paragraph({title, children}) {
  
  return (
    <>
      {/* { props.title && <h2>{props.title}</h2> } */}
      { title ? <h2 onClick={() => alert(title)}>{title}</h2> : ""}

      {/* { props.title ? <h2>{props.title}</h2> : <h2>No title</h2>} */}
      {/* {renderTitle()} */}
      <p>
        {children}
      </p>
    </>
  )
}
