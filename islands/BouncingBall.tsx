import { useEffect, useRef } from "preact/hooks";

export default function BouncingBalls() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;

    const ball = {
      x: 100, // canvas.width / 3,
      y: 200,
      vx: 0,
      vy: 0,
      r: 30,
      op: 0.95,
      dragging: false,
    };

    const gravity = 1.5;
    const bounce = 0.5;
    const friction = 0.999;
    const floor_friction = 0.85;

    let lastMouse = { x: 0, y: 0 };
    let lastTime = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!ball.dragging) {
        ball.vy += gravity;
        ball.vx *= friction;
        if (ball.y + ball.r >= canvas.height) {
          ball.vx *= floor_friction;
        }
      }

      ball.x += ball.vx;
      ball.y += ball.vy;

      // Floor
      if (ball.y + ball.r > canvas.height) {
        ball.y = canvas.height - ball.r;
        ball.vy *= -bounce;
      }

      // Walls
      if (ball.x - ball.r < 0) {
        ball.x = ball.r;
        ball.vx *= -bounce;
      }

      if (ball.x + ball.r > canvas.width) {
        ball.x = canvas.width - ball.r;
        ball.vx *= -bounce;
      }

      // Draw
      // ctx.beginPath();
      // ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      // ctx.fillStyle = "#8aadf4";
      // ctx.fill();
      ctx.save();

      // ---------- Crisp Core (slightly smaller) ----------
      ctx.filter = "none";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r - 1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(138, 173, 244, ${ball.op})`;
      ctx.fill();

      // ---------- Stroke (perfectly aligned) ----------
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#181926"; // crust color
      ctx.stroke();

      ctx.restore();

      requestAnimationFrame(animate);
    }

    function getMouse(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onDown(e: MouseEvent) {
      const { x, y } = getMouse(e);
      const dx = x - ball.x;
      const dy = y - ball.y;

      if (dx * dx + dy * dy < 8 * ball.r * ball.r) {
        ball.dragging = true;
        e.preventDefault();
        ball.vx = 0;
        ball.vy = 0;
        ball.r *= 0.85;
        ball.op *= 0.8;
        lastMouse = { x, y };
        lastTime = performance.now();
      }
    }

    function onMove(e: MouseEvent) {
      if (!ball.dragging) return;

      const { x, y } = getMouse(e);
      const now = performance.now();
      const dt = (now - lastTime) / (16 / 6); // normalize to ~60fps

      ball.vx = 0.95 * (x - lastMouse.x) / dt;
      ball.vy = 0.95 * (y - lastMouse.y) / dt;

      ball.x = x;
      ball.y = y;

      lastMouse = { x, y };
      lastTime = now;
    }

    function onUp() {
      if (ball.dragging) {
        ball.r /= 0.85;
        ball.op /= 0.8;
      }
      ball.dragging = false;
    }

    globalThis.addEventListener("mousedown", onDown);
    globalThis.addEventListener("mousemove", onMove);
    globalThis.addEventListener("mouseup", onUp);

    animate();

    return () => {
      globalThis.removeEventListener("mousedown", onDown);
      globalThis.removeEventListener("mousemove", onMove);
      globalThis.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // class="sm:fixed inset-0 z-50 hidden"
      class="hidden sm:fixed sm:inset-0 sm:z-20 sm:block pointer-events-none"
    />
  );
}
