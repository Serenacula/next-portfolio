import fs from "fs"
import matter from "gray-matter"

import styles from "../../css/projectPage.module.scss"

function ProjectPage(props) {
    return (
        <>
            <h1 className={styles.title}>{props.frontmatter.title}</h1>
            <div className={styles.content}>
            {props.content}
            </div>
        </>
    )
}

export default ProjectPage

export async function getStaticPaths() {
    const files = fs.readdirSync("markdown/projects")
    
    const paths = files.map(filename => {
        return {
            params: {
                slug: filename.replace(".md", "")
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(props) {
    const slug = props.params.slug
    
    const fileContents = fs.readFileSync(("markdown/projects/" + slug + ".md"), "utf-8")
    
    const {data: frontmatter, content} = matter(fileContents)
    
    return {
        props: {
            slug,
            frontmatter,
            content
        }
    }
}