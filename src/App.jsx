import React, { useRef } from "react";
import Header from "/src/components/Header/Header.jsx"
import Main from "/src/components/Main/Main"
import Projects from "/src/components/Projects/Projects.jsx"
import Footer from "/src/components/Footer/Footer.jsx"

export default function App() {

  const projectsRef = useRef(null);
  const mainRef = useRef(null);


  return (
    <>
      <Header projectsRef={projectsRef} mainRef={mainRef}/>
      <Main ref={mainRef}/>
      <Projects ref={projectsRef}/>
      <Footer className="main-footer"/>
    </>
  )
}