"use client"
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

export default function konvaTest(){
  const [innerWid, setInnerWid] = useState(0)
  const [innerHei, setInnerHei] = useState(0)
  React.useEffect(() => {
    setInnerWid(window.innerWidth)
    setInnerHei(window.innerHeight)
  }, []);
  return (
    <>
        <Stage width={innerWid} height={innerHei}>
      <Layer>
        <Text text="Some text on canvas" fontSize={15} />
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
        <Circle x={200} y={100} radius={50} fill="green" />
        <Line
          x={20}
          y={200}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />
      </Layer>
    </Stage>
    </>
  )
}
