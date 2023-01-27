import p5 from 'p5'
import React from 'react'
import { P5CanvasInstance, ReactP5Wrapper } from 'react-p5-wrapper'

function sketch(p5: P5CanvasInstance) {
  let boxes = []
  const colors = ['#000000', '#DEF71C', '#FFFFFF', '#D8D8D8', '#C2CBCC']

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.textFont('Helvetica')
    p5.background('#B1B1B1')

    for (let i = 0; i < 5; i++) {
      boxes[i] = new Box(
        p5.createVector(
          p5.random(p5.width / 12, p5.width - p5.width / 3),
          p5.random(p5.width / 12, p5.height - p5.width / 3),
        ),
        p5.createVector(p5.random(p5.width / 3, p5.width / 5), p5.random(p5.width / 3, p5.width / 5)),
        p5.color(colors[i]),
      )
    }
  }
  p5.windowResized = () => p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  p5.draw = () => {
    p5.push()
    p5.fill(177, 177, 177, 100)
    p5.rect(0, 0, p5.width, p5.height)
    p5.pop()
    p5.textAlign(p5.CENTER)
    p5.textSize(30)
    p5.text('CLICK AND DRAG!', p5.width / 2, p5.height / 2)
    p5.textSize(20)
    p5.text('@designersejinoh', p5.width / 2, p5.height / 2 + 50)

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].display(p5.mouseX, p5.mouseY)
    }
  }

  p5.mouseReleased = (e) => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].clicked = false
    }
  }

  p5.mouseDragged = () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].update()
    }
  }

  p5.mousePressed = () => {
    let idx = -1
    for (let i = boxes.length - 1; i >= 0; i--) {
      boxes[i].checkClicked(p5.mouseX, p5.mouseY)
      if (boxes[i].clicked) {
        idx = i
        break
      }
    }

    if (idx != -1) {
      let last = boxes[idx]
      for (let i = idx + 1; i < boxes.length; i++) {
        boxes[i - 1] = boxes[i]
      }
      boxes[boxes.length - 1] = last
    }
  }

  class Box {
    loc: p5.Vector
    size: p5.Vector
    c: p5.Color
    clicked: boolean

    constructor(loc: p5.Vector, size: p5.Vector, c: p5.Color) {
      this.loc = loc
      this.size = size
      this.c = c
    }

    checkClicked(cx: number, cy: number) {
      if (cx > this.loc.x && cx < this.loc.x + this.size.x && cy > this.loc.y && cy < this.loc.y + this.size.y) {
        this.clicked = true
      } else {
        this.clicked = false
      }
    }

    // 사용자 정의한 메소드를 통해 변수들을 업데이트합니다.
    update() {
      if (this.clicked) {
        let dx = p5.mouseX - p5.pmouseX
        let dy = p5.mouseY - p5.pmouseY
        this.loc.x += dx
        this.loc.y += dy
      }
    }

    // 사용자가 정의한 메소드를 통해 객체를 그립니다.
    display(cx: number, cy: number) {
      p5.noStroke()
      p5.fill(this.c)
      p5.rect(this.loc.x, this.loc.y, this.size.x, this.size.y, 10)

      if (cx > this.loc.x && cx < this.loc.x + this.size.x && cy > this.loc.y && cy < this.loc.y + this.size.y) {
        p5.cursor(p5.MOVE)
      } else {
        p5.cursor(p5.ARROW)
      }
    }
  }
}

export default function P5Canvas() {
  return <ReactP5Wrapper sketch={sketch} />
}
