import React, { useEffect, useRef } from "react";

const CanvasShapes = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.rect(50, 50, 50, 50);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(150, 75, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(200, 100); 
    ctx.lineTo(300, 200); 
    ctx.lineTo(200, 200); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={400} height={300}/>
}

export default CanvasShapes;