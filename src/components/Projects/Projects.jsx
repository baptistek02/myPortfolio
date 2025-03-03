import "./Projects.css"
import data from "../../ProjectsData"
import React, { forwardRef } from "react"
import Thumbnail from "../Thumbnail/Thumbnail"


const Projects = forwardRef((props, ref) => {

    const [showCategory, setShowCategory] = React.useState("All")

    const handleSelection = (category) => {
        setShowCategory(category);
    }

    const entryElements = data.map((entry, index) => {
        return (
            (entry.cat === showCategory || showCategory === "All") && <Thumbnail
                key={index}
                img={entry.img}
                title={entry.title}
                shortdesc={entry.shortdesc}
                desc={entry.desc}
                cat={entry.cat}
                link={entry.link}
                className="projects-item"
                onCategoryChange={handleSelection}
            />
        )
    })
    
    
    return (
        <section ref={ref}>
            <h1 className="title-projects">My Projects</h1>
            <form className="form-cat">
                <label htmlFor="selectedCat">Select a category</label>
                <select id="selectedCat" name="selectedCat" value={showCategory} onChange={(e) => handleSelection(e.target.value)}>
                <option value="All">All</option>
                <option value="Web">Web</option>
                <option value="GLua">GLua</option>
                <option value="Game">Game</option>
                </select>
            </form>

            <main className="projects-container"> 
                {entryElements}
            </main>
        </section>
    )
})

export default Projects