import styles from "./PortfolioProject.module.css"

function PortfolioProject(props) {
    const slug = props.project.slug
    const frontmatter = props.project.frontmatter
    const content = props.project.content
    
    const image = "/images/" + frontmatter.image
    
    return (<>
        <div className={styles.containerDiv}>
            <img className={styles.image} src={image} alt={image} />
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.date}>{frontmatter.date}</p>
            <p className={styles.description}>{frontmatter.description}</p>
        </div>
    </>)
}

export default PortfolioProject