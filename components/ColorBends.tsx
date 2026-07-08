import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./ColorBends.css";

type ColorBendsProps = {
  rotation?: number;
  autoRotate?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
  className?: string;
  style?: React.CSSProperties;
};

const hexToRgb = (hex: string) => {
  const clean = hex.replace("#", "").trim();
  const full = clean.length === 3
    ? clean.split("").map((char) => char + char).join("")
    : clean.padEnd(6, "0").slice(0, 6);
  return [
    parseInt(full.slice(0, 2), 16) / 255,
    parseInt(full.slice(2, 4), 16) / 255,
    parseInt(full.slice(4, 6), 16) / 255
  ];
};

const vertex = `#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uTime;
uniform float uSpeed;
uniform float uRotation;
uniform float uAutoRotate;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform float uIterations;
uniform float uIntensity;
uniform float uBandWidth;
uniform float uTransparent;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float softBand(float value, float center, float width) {
  float d = abs(value - center);
  return exp(-d * d * width);
}

void main() {
  vec2 uv = vUv;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= uResolution.x / max(uResolution.y, 1.0);

  float t = uTime * uSpeed;
  vec2 pointer = uPointer * vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  p += pointer * uParallax * 0.08;

  float angle = radians(uRotation + uAutoRotate * uTime);
  vec2 q = rot(angle) * p;
  q /= max(uScale, 0.001);

  float influence = 1.0 - smoothstep(0.15, 2.2, distance(q, pointer));
  q += (pointer - q) * influence * uMouseInfluence * 0.05;

  for (int i = 0; i < 5; i++) {
    if (float(i) >= uIterations) break;
    q += vec2(
      sin(q.y * uFrequency * 2.0 + t + float(i) * 1.7),
      cos(q.x * uFrequency * 1.7 - t * 0.8 + float(i))
    ) * 0.055 * uWarpStrength;
  }

  float wave = q.x + sin(q.y * uFrequency * 2.4 + t) * 0.18 * uWarpStrength;
  wave += cos(length(q) * uFrequency * 2.0 - t * 0.55) * 0.08;

  float width = max(uBandWidth, 0.1);
  float b1 = softBand(wave, -0.55, width);
  float b2 = softBand(wave, 0.0, width * 0.92);
  float b3 = softBand(wave, 0.52, width * 0.85);

  vec3 col = uColor1 * b1 + uColor2 * b2 + uColor3 * b3;
  float alpha = clamp(max(max(b1, b2), b3) * 0.56, 0.0, 0.72);

  float vignette = smoothstep(1.8, 0.1, length(p));
  col *= uIntensity * (0.55 + vignette * 0.45);

  float grain = hash(gl_FragCoord.xy + vec2(uTime * 18.0, -uTime * 9.0));
  col += (grain - 0.5) * uNoise;
  col = clamp(col, 0.0, 1.0);

  fragColor = vec4(col * alpha, uTransparent > 0.5 ? alpha : 1.0);
}
`;

export default function ColorBends({
  rotation = 90,
  autoRotate = 0,
  speed = 0.2,
  colors = ["#c8d4ff", "#5b72c8", "#16181f"],
  transparent = true,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6,
  className = "",
  style
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      uniforms: {
        uResolution: { value: new Float32Array([1, 1]) },
        uPointer: { value: new Float32Array([0, 0]) },
        uTime: { value: 0 },
        uSpeed: { value: reducedMotion ? 0 : speed },
        uRotation: { value: rotation },
        uAutoRotate: { value: reducedMotion ? 0 : autoRotate },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uMouseInfluence: { value: reducedMotion ? 0 : mouseInfluence },
        uParallax: { value: reducedMotion ? 0 : parallax },
        uNoise: { value: noise },
        uIterations: { value: iterations },
        uIntensity: { value: intensity },
        uBandWidth: { value: bandWidth },
        uTransparent: { value: transparent ? 1 : 0 },
        uColor1: { value: new Float32Array(hexToRgb(colors[0] || "#c8d4ff")) },
        uColor2: { value: new Float32Array(hexToRgb(colors[1] || "#5b72c8")) },
        uColor3: { value: new Float32Array(hexToRgb(colors[2] || "#16181f")) }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)));
      const resolution = program.uniforms.uResolution.value as Float32Array;
      resolution[0] = gl.drawingBufferWidth;
      resolution[1] = gl.drawingBufferHeight;
      renderer.render({ scene: mesh });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const pointer = program.uniforms.uPointer.value as Float32Array;
      pointer[0] = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      pointer[1] = -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    container.addEventListener("pointermove", onPointerMove, { passive: true });
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (time: number) => {
      program.uniforms.uTime.value = (time - t0) * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      canvas.remove();
    };
  }, [
    autoRotate,
    bandWidth,
    colors,
    frequency,
    intensity,
    iterations,
    mouseInfluence,
    noise,
    parallax,
    rotation,
    scale,
    speed,
    transparent,
    warpStrength
  ]);

  return <div ref={containerRef} className={`color-bends-container ${className}`.trim()} style={style} />;
}
