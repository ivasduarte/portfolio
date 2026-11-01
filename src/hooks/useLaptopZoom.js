import { useEffect, useState } from "react";

const NAV = 60; // a camada do fundo começa 60px abaixo do topo
// Onde o ecrã do portátil deve ficar depois do zoom (fração da janela)
const TARGET = { cx: 0.5145, cy: 0.585, h: 0.66 };

function compute(vw, vh) {
  const isMobile = vw < 768;
  const RATIO = isMobile ? 1 : 2172 / 710;
  const SCREEN = isMobile
    ? { x0: 0.25, x1: 0.75, y0: 0.35, y1: 0.55 }
    : { x0: 0.2523, x1: 0.3517, y0: 0.4718, y1: 0.6521 };

  // background-size: cover + center, numa caixa vw x vh
  let w, h;
  if (vw / vh > RATIO) {
    w = vw;
    h = vw / RATIO;
  } else {
    h = vh;
    w = vh * RATIO;
  }
  const ix = (vw - w) / 2;
  const iy = (vh - h) / 2;

  // ecrã do portátil em coordenadas da caixa
  const sx0 = ix + SCREEN.x0 * w;
  const sx1 = ix + SCREEN.x1 * w;
  const sy0 = iy + SCREEN.y0 * h;
  const sy1 = iy + SCREEN.y1 * h;
  const sw = sx1 - sx0;
  const sh = sy1 - sy0;
  const scx = (sx0 + sx1) / 2;
  const scy = (sy0 + sy1) / 2;

  const k = (TARGET.h * vh) / sh; // escala do zoom
  const tcx = TARGET.cx * vw;
  const tcy = TARGET.cy * vh - NAV;
  const ox = (tcx - k * scx) / (1 - k); // origem para o centro do ecrã cair em (tcx, tcy)
  const oy = (tcy - k * scy) / (1 - k);

  return {
    k,
    origin: `${ox}px ${oy}px`,
    screen: {
      left: tcx - (k * sw) / 2,
      top: TARGET.cy * vh - (k * sh) / 2,
      width: k * sw,
      height: k * sh,
    },
  };
}

export default function useLaptopZoom() {
  const [zoom, setZoom] = useState(() =>
    compute(window.innerWidth, window.innerHeight),
  );

  useEffect(() => {
    const onResize = () =>
      setZoom(compute(window.innerWidth, window.innerHeight));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return zoom;
}