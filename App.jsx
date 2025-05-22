import { Canvas } from "@react-three/fiber";
import React from "react";
// import App from './App.jsx';
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./compotents/MacContainer";

function App() {
  return (
    <div className='w-full h-screen'>
      <div className='absolute flex flex-col  items-center text-white top-16 left-1/2 -translate-x-1/2 '>
        <h3 className='text-7xl tracking-tighter font-[700]'>Macboob Pro.</h3>
        <h5>Oh so pro</h5>       
         <p className="text-center w-3/4">
          
          Voluptatem ratione unde, est dignissimos sequi aperiam fugiat voluptatum reiciendis.
        </p>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 130] }}>
        <mesh>
          {/* <OrbitControls/> */}
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />

          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
