import fs from "fs"
import matter from "gray-matter"
import { marked } from "marked"

import Image from "next/image"
import Link from "next/link"

import styles from "../../css/projectPage.module.scss"

function ProjectPage(props) {
    const slug = props.slug
    const frontmatter = props.frontmatter
    const content = marked.parse(props.content)
    
    const image = "/images/projects/webp/" + frontmatter.image + ".webp"
    
    return (
        <div className={styles.mainDiv}>
            <img className={styles.image} src={image} alt="" />
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <div className={styles.buttonContainer}>
                {frontmatter.link && frontmatter.link != "" ?
                    <Link href={frontmatter.link}>
                        <button className={styles.button}>Visit Project</button>
                    </Link>
                : null
                }
                
                {frontmatter.github && frontmatter.github != "" ?
                    <Link href={frontmatter.github}>
                        <button className={styles.button}>Github</button>
                    </Link>
                : null
                }
                
            </div>
            
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        </div>
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