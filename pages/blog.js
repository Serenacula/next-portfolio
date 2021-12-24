import path from "path"
import fs from "fs"
import matter from "gray-matter"

import styles from "../css/portfolio.module.css"
import BlogPost from "../components/BlogPost/BlogPost"

export default function Portfolio( props ) {
    
    const posts = props.posts
    
    function makePosts(input) {
        let result = []
        for (const post of input) {
            result.push(<BlogPost post={post} key={post.slug} />)
        }
        
        return result
    }
    
    return (
        <div>
            {makePosts(posts)}
        </div>
    )
}

export async function getStaticProps() {
    // Grab the filenames
    const files = fs.readdirSync("markdown/posts")
    
    // Loop through the filenames, to grab each one in turn.
    const posts = files.map(file => {
        // Get the name of the slug
        const slug = file.replace(".md", "")
        
        // Get all the markdown, and grab the frontmatter and html-converted content from it using graymatter
        const { data: frontmatter, content } = matter(fs.readFileSync("markdown/posts/" + file, "utf-8"))
        
        return {
            slug,
            frontmatter,
            content
        }
    })
    
    return {
        props: {
            posts
        }
    }
}