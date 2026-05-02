"use client";

import { useEffect } from "react";

// Module-level state — survives re-renders and remounts
let _x = -100;
let _y = -100;
let _el: HTMLDivElement | null = null;

function getEl(): HTMLDivElement {
  // Reuse existing element if still in the DOM
  if (_el && document.body.contains(_el)) return _el;

  // Create fresh element
  if (_el) _el.remove();
  _el = document.createElement("div");
  Object.assign(_el.style, {
    position: "fixed",
    top: `${_y}px`,
    left: `${_x}px`,
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "var(--color-accent)",
    transform: "translate(-50%, -50%)",
    transition: "width 180ms ease, height 180ms ease, background-color 180ms ease",
    pointerEvents: "none",
    zIndex: "99999",
  });
  document.body.appendChild(_el);
  return _el;
}

export default function CustomCursor() {
  useEffect(() => {
    const dot = getEl();

    const onMove = (e: MouseEvent) => {
      _x = e.clientX;
      _y = e.clientY;
      dot.style.left = `${_x}px`;
      dot.style.top = `${_y}px`;
    };

    const onOver = (e: MouseEvent) => {
      const isHovered = !!(e.target as Element).closest(
        "a, button, input, textarea, select, label"
      );
      dot.style.width = isHovered ? "28px" : "16px";
      dot.style.height = isHovered ? "28px" : "16px";
      dot.style.backgroundColor = isHovered
        ? "color-mix(in srgb, var(--color-accent) 30%, transparent)"
        : "var(--color-accent)";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  // Render nothing — cursor element lives entirely outside React's control
  return null;
}
