import "./Header.css"
import React, { useState, useEffect } from "react"

export default function Header(props) {

    const [isSticky, setIsSticky] = React.useState(false)

    const handleScroll = () => {
        if (window.scrollY > 10) { 
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const scrollToProjects = () => {
        props.projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToMain = () => {
        props.mainRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <section className="header-title">
                <h1>BAPTISTE KLEMPKA</h1>
                <h2>PORTFOLIO</h2>
            </section>
            <section className="header-tabs">
                <button onClick={scrollToMain}>ABOUT ME</button>
                <button>RESUME</button>
                <button onClick={scrollToProjects}>PROJECTS</button>
            </section>          
        </header>
    )
}