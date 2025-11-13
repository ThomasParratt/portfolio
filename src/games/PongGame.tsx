import { useEffect, useRef } from "react";

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let x = 50;
    let y = 50;
    let dx = 2;
    let dy = 2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#3B82F6";
      ctx.fill();
      ctx.closePath();

      if (x + dx > canvas.width || x + dx < 0) dx = -dx;
      if (y + dy > canvas.height || y + dy < 0) dy = -dy;

      x += dx;
      y += dy;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <canvas ref={canvasRef} width={400} height={300} className="border rounded shadow-md" />
    </div>
  );
}
