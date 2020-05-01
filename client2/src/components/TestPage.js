import React, { useState, useEffect } from 'react'
import './testCSS.css'

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const useWindowOnScrollEvent = (callback) => {
  return useWindowEvent('scroll', callback)
}

const TestPage = () => {
  const [position, setPosition] = useState()
  useWindowOnScrollEvent((e) => {
    setPosition(window.pageYOffset * 0.6)
  })

  return (
    <>
      <div className="item item-1" style={{ backgroundPositionY: position }}>
        <h3>Div 1</h3>
      </div>
      <div className="item item-2">
        <h3>Div 2</h3>
      </div>
      <div className="item item-3">
        <h3>Div 3</h3>
      </div>
      <div className="item item-4">
        <h3>Div 4</h3>
      </div>
    </>
  )
}

export default TestPage
