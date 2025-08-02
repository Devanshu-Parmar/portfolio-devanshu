
import { useEffect, useRef } from "react";

const CursorFluidCanvas = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let mouse = { x: width / 2, y: height / 2 };

    const updateMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", updateMouse);

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);

      points.current.push({ x: mouse.x, y: mouse.y });
      if (points.current.length > 30) points.current.shift();

      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i];
        const p2 = points.current[i + 1];

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const alpha = i / points.current.length;

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none mix-blend-screen"
    />
  );
};

export default CursorFluidCanvas;
