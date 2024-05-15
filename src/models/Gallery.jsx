/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import galleryScene from '../assets/3d/newport.glb'

export function Gallery({
    isRotating,
    setIsRotating, 
    setCurrentStage, 
    ...props}) 
{
  const galleryRef = useRef();

  const { gl, viewport, camera } = useThree();
  const { nodes, materials } = useGLTF(galleryScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const cameraPosition = useRef([0, 0, 0]); // Initial camera position
  const cameraSpeed = 0.2; // Adjust the movement speed as needed


  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      galleryRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      // Calculate rotation based on camera's current rotation
      const rotation = camera.rotation.y;
      rotationSpeed.current = 0.01 * Math.PI * Math.cos(rotation);
    } else if (event.key === "ArrowLeft") {
      // Calculate rotation based on camera's current rotation
      const rotation = camera.rotation.y;
      rotationSpeed.current = -0.01 * Math.PI * Math.cos(rotation);
    } else if (event.key === "ArrowUp") {
      // Move camera backward
      cameraPosition.current[2] -= cameraSpeed;
    } else if (event.key === "ArrowDown") {
      // Move camera forward
      cameraPosition.current[2] += cameraSpeed;
    }
    // Move the camera based on the stored position
    camera.position.set(...cameraPosition.current);
  };
  
  const handleKeyUp = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      // Stop camera rotation
      rotationSpeed.current = 0;
    } else if (event.key === "ArrowUp") {
      // Move camera backward
      cameraPosition.current[2] -= cameraSpeed;
    } else if (event.key === "ArrowDown") {
      // Move camera forward
      cameraPosition.current[2] += cameraSpeed;
    }
    // Move the camera based on the stored position
    camera.position.set(...cameraPosition.current);
  };
  

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    camera.position.set(...cameraPosition.current);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp); 
    };
  }, [gl, camera, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      galleryRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = galleryRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 4.1 && normalizedRotation <= 4.43:
          setCurrentStage(6);
          break;
        case normalizedRotation >= 5 && normalizedRotation <= 5.3:
          setCurrentStage(5);
          break;
        case normalizedRotation >= 5.9 && normalizedRotation <= 7:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0 && normalizedRotation <= 0.33:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.95 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 1.85 && normalizedRotation <= 2.2:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 2.8 && normalizedRotation <= 3.5:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={galleryRef} {...props}>
<group scale={0.01}>
        <group rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[430, 430, 1290]}>
          <group position={[-1.73, 0, 0]} rotation={[0, 1.571, 0]} scale={[0.062, 0.186, 0.186]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Benches_Benches_0.geometry}
              material={materials.Benches}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Benches_Chrome_0.geometry}
              material={materials.Chrome}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gallery_Backwall_0.geometry}
            material={materials.Backwall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gallery_Structure_0.geometry}
            material={materials.Structure}
          />
          <group position={[-0.978, 0, 0]} rotation={[0, 1.571, 0]} scale={[0.233, 0.233, 0.419]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Portraits_PaintingFrame_0.geometry}
              material={materials.PaintingFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Portraits_Portraits_0.geometry}
              material={materials.Portraits}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Podiums_Podiums_0.geometry}
            material={materials.Podiums}
            position={[-1.803, 0, 0]}
            rotation={[0, 1.571, 0]}
            scale={[0.078, 0.233, 0.233]}
          />
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload("/newport.glb");

export default Gallery;