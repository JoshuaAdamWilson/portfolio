import React, { Suspense } from 'react'
// import Particles from 'react-particles-js'
import AboutMe from '../AboutMe/AboutMe'
// import Contacts from '../Contacts/Contacts'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import Services from '../Services/Services'
import styled from "styled-components"
import { Canvas } from '@react-three/fiber'
import Brain from '../Header/brain/Brain'

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <div className='home-container'>
      {/* <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: {
                  value: [
                    "#7D8DF4",
                    "#B069FF",
                    "#9739FF",
                    "#35c43e",
                    "#27996f",
                  ],
                },
              },
            },
          },
        }}
      /> */}
      <CanvasContainer className="canvas-container">
        <Canvas>
          <Suspense fallback={null}>
            <Brain /> 
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      {/* <Testimonials /> */}
      {/* <Contacts /> */}
      
    </div>
  )
}

export default Home
