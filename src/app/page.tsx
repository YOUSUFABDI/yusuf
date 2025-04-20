"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%239cb0b7&color2=%233f6331&color3=%239999a4&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex justify-end gap-2 flex-wrap">
          <a href="https://github.com/YOUSUFABDI" target="_blank">
            Github
          </a>
          <a href="https://instagram.com/yusuf_cabd" target="_blank">
            IG
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf-abdi-743194279/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
        <h1>Yusuf Abdi</h1>

        <div className="flex flex-col items-end gap-2">
          {/* <a href="mailto:collab@jacobbinnie.com">collab@jacobbinnie.com</a> */}
          <div className="flex gap-2">
            <h2>Senior Software Engineer</h2>
            <h2>·</h2>
            <h2>Mogadishu, Somalia</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
