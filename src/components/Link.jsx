import React from 'react'

export default function Link(props) {
  return (
    <a 
      className="App-Link" 
      target="_blank" 
      rel="noopener noreferrer"
      href={props.url}
    >
      {props.text}
    </a>
  )
}
