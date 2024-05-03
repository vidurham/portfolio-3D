import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Gallery from '../models/Gallery'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustGalleryForScreenSize = () => {
        let screenScale, screenPosition;
    
        if (window.innerWidth < 768) {
          screenScale = [0.9, 0.9, 0.9];
          screenPosition = [0, 3, -0.4];
        } else {
          screenScale = [1, 1, 1];
          screenPosition = [0, 3, -0.2];
        }
    
        return [screenScale, screenPosition];
    };

    const [galleryScale, galleryPosition] = adjustGalleryForScreenSize();
  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>

        <Canvas 
            className={`w-full h-screen bg-transparent ${
                isRotating ? "cursor-grabbing" : "cursor-grab"
            }`}
            camera = {{ near: 0.1, far: 100 }}>
            <Suspense fallback={<Loader />}>
                <directionalLight />
                <ambientLight />
                <hemisphereLight />

                <Gallery 
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    position={galleryPosition}
                    rotation={[0.1, 4.7077, 0]}
                    scale={galleryScale}
                />

            </Suspense>

        </Canvas>
    </section>
  )
}

export default Home