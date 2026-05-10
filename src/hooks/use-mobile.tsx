import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

/**
 * Returns a capped DPR suitable for Three.js canvases.
 * On large / high-DPR monitors the pixel count explodes; capping DPR
 * keeps the GPU budget reasonable without visible quality loss.
 */
export function useCanvasDpr(): number {
  const [dpr, setDpr] = useState(1);
  useEffect(() => {
    const raw = window.devicePixelRatio ?? 1;
    const area = window.innerWidth * window.innerHeight;
    // Large viewports (≥ ~2560×1440): cap at 1, others: cap at 1.5
    const cap = area > 2_500_000 ? 1 : 1.5;
    setDpr(Math.min(raw, cap));
  }, []);
  return dpr;
}
