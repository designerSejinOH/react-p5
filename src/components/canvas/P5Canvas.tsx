import React from 'react'
import { P5CanvasInstance, ReactP5Wrapper } from 'react-p5-wrapper'

function sketch(p5: P5CanvasInstance) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.background(100)
  }
  p5.windowResized = () => p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  p5.draw = () => {
    p5.push()
    p5.fill(100, 10)
    p5.rect(0, 0, p5.width, p5.height)
    p5.pop()
    p5.ellipse(p5.mouseX, p5.mouseY, 100, 100)
  }
}

export default function P5Canvas() {
  return (
    <div className='overflow-hidden'>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  )
}
