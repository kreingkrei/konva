"use client"
import React, { useState, Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Text } from 'react-konva';
interface AppState {
    isDragging: boolean;
    x: number;
    y: number;
  }

export default function konvaDD (){

    state: AppState = {
        isDragging: false,
        x: 50,
        y: 50,
      };

    const [innerWid, setInnerWid] = useState(0)
      const [innerHei, setInnerHei] = useState(0)
      React.useEffect(() => {
        setInnerWid(window.innerWidth)
        setInnerHei(window.innerHeight)
      }, []);

      function generateState() {
        return ({
            isDragging: false,
            x: 50,
            y: 50,
        });
      }
      const INITIAL_STATE = generateState();
      const [stat, setStat] = React.useState(INITIAL_STATE);
      
      

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text="Draggable Text"
            x={stat.x}
            y={stat.y}
            draggable
            fill={stat.isDragging ? 'green' : 'black'}
            onDragStart={() => {
              this.setState({
                isDragging: true,
              });
            }}
            onDragEnd={(e) => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
          />
        </Layer>
      </Stage>
  )
}

export default konvaDD;