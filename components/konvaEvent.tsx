"use client"
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Star, Text } from 'react-konva';

export default function konvaEvent(){
    
      const [innerWid, setInnerWid] = useState(0)
      const [innerHei, setInnerHei] = useState(0)
      React.useEffect(() => {
        setInnerWid(window.innerWidth)
        setInnerHei(window.innerHeight)
      }, []);
    
      function generateShapes() {
        return [...Array(10)].map((_, i) => ({
          id: i.toString(),
          x: Math.random() * innerWid,
          y: Math.random() * innerHei,
          rotation: Math.random() * 180,
          isDragging: false,
        }));
      }
    
      const INITIAL_STATE = generateShapes();

    const [stars, setStars] = React.useState(INITIAL_STATE);

    const handleDragStart = (e: any) => {
        const id = e.target.id();
        setStars(
            stars.map((star) => {
                return {
                ...star,
                isDragging: star.id === id,
                };
            })
        );
    };
    const handleDragEnd = (e: any) => {
        setStars(
            stars.map((star) => {
                return {
                ...star,
                isDragging: false,
                };
            })
        );
    };
  return (
    <>
    <div>konvaEvent</div>
    <Stage width={innerWid} height={innerHei}>
        <Layer>
            <Text text="Try to drag a star" />
            {stars.map((star) => (
            <Star
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={star.rotation}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            />
            ))}
        </Layer>
        </Stage>
        </>
  )
}

