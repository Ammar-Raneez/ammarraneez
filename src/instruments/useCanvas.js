import { useCallback, useEffect, useRef } from "react";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

// Sizes a canvas at device pixel ratio and draws it on mount and resize. With a `tick`, it
// animates every `interval` ms, but only while the canvas is on screen and motion is allowed.
export function useCanvas(ref, { height, draw, tick, interval = 90 }) {
  const view = useRef(null);
  const latest = useRef({ draw, tick, height });
  latest.current = { draw, tick, height };

  const redraw = useCallback(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(2, devicePixelRatio || 1);
    const { height: h0 } = latest.current;
    const h = typeof h0 === "function" ? h0() : h0;
    const w = canvas.clientWidth;
    if (!view.current || view.current.w !== w || view.current.h !== h) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;
      view.current = { w, h };
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    latest.current.draw(ctx, view.current.w, view.current.h);
  }, [ref]);

  useEffect(() => {
    const canvas = ref.current;
    redraw();
    const resize = new ResizeObserver(redraw);
    resize.observe(canvas);
    let timer = 0;
    const start = () => {
      if (timer || !latest.current.tick || reduced()) return;
      timer = setInterval(() => {
        latest.current.tick();
        redraw();
      }, interval);
    };
    const stop = () => {
      clearInterval(timer);
      timer = 0;
    };
    const seen = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    seen.observe(canvas);
    return () => {
      stop();
      seen.disconnect();
      resize.disconnect();
    };
  }, [ref, redraw, interval]);

  return redraw;
}
