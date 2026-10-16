"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export type ThreeSceneMode = "neural" | "orbital" | "matrix";

interface ThreeHeroCanvasProps {
  mode: ThreeSceneMode;
  interactive?: boolean;
}

export default function ThreeHeroCanvas({
  mode,
  interactive = true,
}: ThreeHeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<ThreeSceneMode>(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070b, 0.045);

    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.2, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Master group for mouse parallax & scroll damping
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Move main core slightly right on desktop so left hero typography breathes cleanly
    const updateRootOffset = () => {
      const isWide = window.innerWidth >= 1024;
      rootGroup.position.x = isWide ? 2.15 : 0;
      rootGroup.position.y = isWide ? 0.15 : -0.4;
      const scale = isWide ? 1.0 : 0.78;
      rootGroup.scale.setScalar(scale);
    };
    updateRootOffset();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1e293b, 2.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 8, 20);
    cyanLight.position.set(4, 4, 4);
    scene.add(cyanLight);

    const indigoLight = new THREE.PointLight(0x818cf8, 7, 20);
    indigoLight.position.set(-4, -3, 3);
    scene.add(indigoLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4, 15);
    emeraldLight.position.set(0, 5, -4);
    scene.add(emeraldLight);

    // 1. Inner Solid Faceted Core (AI Compute Nucleus)
    const coreGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.65,
      metalness: 0.85,
      roughness: 0.18,
      flatShading: true,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. Outer Wireframe Geodesic Shell (RAG Vector Mesh)
    const shellGeo = new THREE.IcosahedronGeometry(1.62, 2);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    rootGroup.add(shellMesh);

    // 3. Outer Vertex Nodes on the Geodesic Shell
    const shellPositions = shellGeo.attributes.position;
    const nodeVertices: number[] = [];
    const seen = new Set<string>();
    for (let i = 0; i < shellPositions.count; i++) {
      const vx = shellPositions.getX(i);
      const vy = shellPositions.getY(i);
      const vz = shellPositions.getZ(i);
      const key = `${vx.toFixed(2)},${vy.toFixed(2)},${vz.toFixed(2)}`;
      if (!seen.has(key)) {
        seen.add(key);
        nodeVertices.push(vx, vy, vz);
      }
    }
    const shellPointsGeo = new THREE.BufferGeometry();
    shellPointsGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodeVertices, 3)
    );
    const shellPointsMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
    });
    const shellPoints = new THREE.Points(shellPointsGeo, shellPointsMat);
    shellMesh.add(shellPoints);

    // 4. Gyroscopic Distributed System Rings (3 Orbital Axes)
    const ringsGroup = new THREE.Group();
    rootGroup.add(ringsGroup);

    const createRing = (
      radius: number,
      tube: number,
      color: number,
      opacity: number,
      rx: number,
      ry: number,
      rz: number
    ) => {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 120);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(rx, ry, rz);
      ringsGroup.add(mesh);
      return mesh;
    };

    const ring1 = createRing(
      2.35,
      0.012,
      0x38bdf8,
      0.42,
      Math.PI / 2.6,
      0.2,
      0
    );
    const ring2 = createRing(
      2.85,
      0.01,
      0x818cf8,
      0.32,
      -Math.PI / 3.2,
      Math.PI / 5,
      0.4
    );
    const ring3 = createRing(
      3.35,
      0.008,
      0x34d399,
      0.22,
      Math.PI / 6,
      -Math.PI / 3,
      0.8
    );

    // Orbiting Data Satellites on the rings
    const satellitesGroup = new THREE.Group();
    rootGroup.add(satellitesGroup);
    const satGeo = new THREE.OctahedronGeometry(0.08, 0);
    const satMatCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const satMatIndigo = new THREE.MeshBasicMaterial({ color: 0x818cf8 });
    const satMatEmerald = new THREE.MeshBasicMaterial({ color: 0x34d399 });

    const satellites: {
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      angle: number;
      tiltX: number;
      tiltZ: number;
    }[] = [];

    const satConfigs = [
      { radius: 2.35, speed: 0.65, angle: 0, tiltX: 0.6, tiltZ: 0.2, mat: satMatCyan },
      { radius: 2.35, speed: 0.65, angle: Math.PI, tiltX: 0.6, tiltZ: 0.2, mat: satMatCyan },
      { radius: 2.85, speed: -0.48, angle: 1.2, tiltX: -0.5, tiltZ: 0.4, mat: satMatIndigo },
      { radius: 2.85, speed: -0.48, angle: 4.3, tiltX: -0.5, tiltZ: 0.4, mat: satMatIndigo },
      { radius: 3.35, speed: 0.35, angle: 2.4, tiltX: 0.3, tiltZ: -0.6, mat: satMatEmerald },
    ];

    satConfigs.forEach((cfg) => {
      const m = new THREE.Mesh(satGeo, cfg.mat);
      satellitesGroup.add(m);
      satellites.push({
        mesh: m,
        radius: cfg.radius,
        speed: cfg.speed,
        angle: cfg.angle,
        tiltX: cfg.tiltX,
        tiltZ: cfg.tiltZ,
      });
    });

    // 5. Ambient 3D Particle Field (Deep Space / Vector Embeddings)
    const particleCount = 520;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x38bdf8);
    const cIndigo = new THREE.Color(0x818cf8);
    const cSlate = new THREE.Color(0x64748b);

    for (let i = 0; i < particleCount; i++) {
      const r = 3.8 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi) - 2;

      const pick = Math.random();
      const chosen = pick < 0.45 ? cCyan : pick < 0.8 ? cIndigo : cSlate;
      particleColors[i * 3] = chosen.r;
      particleColors[i * 3 + 1] = chosen.g;
      particleColors[i * 3 + 2] = chosen.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particleField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleField);

    // Interaction state (cursor + scroll + drag)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = 0;
    let isDragging = false;
    let dragRotationX = 0;
    let dragRotationY = 0;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = nx;
      targetMouseY = ny;

      if (isDragging) {
        const dx = e.clientX - prevPointerX;
        const dy = e.clientY - prevPointerY;
        dragRotationY += dx * 0.007;
        dragRotationX += dy * 0.007;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      updateRootOffset();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    renderer.domElement.addEventListener("pointerdown", handlePointerDown);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const activeMode = modeRef.current;

      // Smooth lerp for cursor parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Mode-specific visual adjustments
      const targetCoreScale =
        activeMode === "neural" ? 1.0 : activeMode === "orbital" ? 0.82 : 1.18;
      const targetShellScale =
        activeMode === "neural" ? 1.0 : activeMode === "orbital" ? 1.15 : 1.32;
      const targetRingsScale =
        activeMode === "orbital" ? 1.16 : activeMode === "matrix" ? 0.88 : 1.0;

      coreMesh.scale.lerp(
        new THREE.Vector3(targetCoreScale, targetCoreScale, targetCoreScale),
        0.05
      );
      shellMesh.scale.lerp(
        new THREE.Vector3(targetShellScale, targetShellScale, targetShellScale),
        0.05
      );
      ringsGroup.scale.lerp(
        new THREE.Vector3(targetRingsScale, targetRingsScale, targetRingsScale),
        0.05
      );

      shellMat.color.lerp(
        new THREE.Color(
          activeMode === "neural"
            ? 0x38bdf8
            : activeMode === "orbital"
            ? 0x818cf8
            : 0x34d399
        ),
        0.05
      );

      if (!prefersReducedMotion) {
        const speedMult =
          activeMode === "orbital" ? 1.65 : activeMode === "matrix" ? 1.25 : 1.0;

        coreMesh.rotation.y = elapsed * 0.28 * speedMult + dragRotationY;
        coreMesh.rotation.x = elapsed * 0.18 * speedMult + dragRotationX;

        shellMesh.rotation.y = -elapsed * 0.16 * speedMult + dragRotationY * 0.8;
        shellMesh.rotation.z = elapsed * 0.1 * speedMult;

        ring1.rotation.z = elapsed * 0.32 * speedMult;
        ring1.rotation.x = Math.PI / 2.6 + Math.sin(elapsed * 0.5) * 0.15;

        ring2.rotation.z = -elapsed * 0.25 * speedMult;
        ring2.rotation.y = Math.PI / 5 + Math.cos(elapsed * 0.4) * 0.15;

        ring3.rotation.z = elapsed * 0.18 * speedMult;
        ring3.rotation.x = Math.PI / 6 + Math.sin(elapsed * 0.3) * 0.2;

        // Update orbiting satellites
        satellites.forEach((sat) => {
          const a = sat.angle + elapsed * sat.speed * speedMult;
          const x = Math.cos(a) * sat.radius;
          const y = Math.sin(a) * sat.radius * Math.cos(sat.tiltX);
          const z = Math.sin(a) * sat.radius * Math.sin(sat.tiltX);
          sat.mesh.position.set(x, y, z);
          sat.mesh.rotation.x = elapsed * 2;
          sat.mesh.rotation.y = elapsed * 2;
        });

        // Subtle breathing float
        const scrollFactor = Math.min(scrollY / 1200, 1.5);
        rootGroup.rotation.y = currentMouseX * 0.42 + scrollFactor * 0.65;
        rootGroup.rotation.x = -currentMouseY * 0.32 + scrollFactor * 0.25;
        camera.position.z = 8.8 + scrollFactor * 1.4;

        particleField.rotation.y = elapsed * 0.03 + currentMouseX * 0.12;
        particleField.rotation.x = -currentMouseY * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D AI Systems Architecture Visualization"
    />
  );
}
