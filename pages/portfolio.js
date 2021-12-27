import fs from "fs"
import matter from "gray-matter"
import { combineClasses } from "../../Gatsby Portfolio Website/portfolio/src/resources/scripts/utilities"

import PortfolioProject from "../components/PortfolioProject/PortfolioProject"

const combine = combineClasses

import styles from "../css/portfolio.module.scss"

export default function Portfolio( props ) {
    
    let projects = props.projects
    
    // Sorting the projects by date
    projects = projects.sort((b,a) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
    
    function makePosts(input) {
        let result = []
        for (const project of input) {
            if (project.frontmatter.posted === true) {
                result.push(<PortfolioProject project={project} key={project.slug} />)
            }
        }
        
        return result
    }
    
    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.title}>Portfolio</h1>
        
            {makePosts(projects)}
        </div>
    )
}

export async function getStaticProps() {
    // Grab the filenames
    const files = fs.readdirSync("markdown/projects")
    
    // Loop through the filenames, to grab each one in turn.
    const projects = files.map(file => {
        // Get the name of the slug
        const slug = file.replace(".md", "")
        
        // Get all the markdown, and grab the frontmatter and html-converted content from it using graymatter
        const { data: frontmatter, content } = matter(fs.readFileSync("markdown/projects/" + file, "utf-8"))
        
        return {
            slug,
            frontmatter,
            content
        }
    })
    // This is the required format for passing props into the page function.
    return {
        props: {
            projects
        }
    }
}