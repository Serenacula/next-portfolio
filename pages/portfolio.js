import fs from "fs"
import matter from "gray-matter"

import styles from "../css/portfolio.module.css"
import PortfolioProject from "../components/PortfolioProject/PortfolioProject"

export default function Portfolio( props ) {
    
    const projects = props.projects
    
    function makePosts(input) {
        let result = []
        for (const project of input) {
            result.push(<PortfolioProject project={project} key={project.slug} />)
        }
        
        return result
    }
    
    return (
        <div>
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
    
    return {
        props: {
            projects
        }
    }
}