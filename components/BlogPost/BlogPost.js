import styles from "./BlogPost.module.css"

function BlogPost(props) {
    const slug = props.post.slug
    const frontmatter = props.post.frontmatter
    const content = props.post.content
    
    // const image = "/images/" + frontmatter.image
    
    return (<>
        <div className={styles.containerDiv}>
            {/* <img className={styles.image} src={image} alt={image} /> */}
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.date}>{frontmatter.date}</p>
            <p className={styles.description}>{frontmatter.description}</p>
        </div>
    </>)
}

export default BlogPost