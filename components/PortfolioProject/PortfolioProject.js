import Link from "next/link"



import styles from "./PortfolioProject.module.scss"



function PortfolioProject(props) {
	const slug = props.project.slug
	const frontmatter = props.project.frontmatter
	const content = props.project.content

    // Make sure that an image exists, else display nothing.
    let image;
    if (frontmatter.image) {
        image = "/images/" + frontmatter.image
    } else {
        image = ""
    }
    
    // This is a list of all the featured technologies associated with a project
    const features = frontmatter.features
    
    // Loops through each feature on the list, adding its image into an array to be displayed
    function makeFeatures(features) {
        let result = []
        
        for (const feature of features) {
            const key = slug + feature
            switch (feature) {
                case "html":
                    result.push(<img className={styles.feature} src="/images/svg/html5-logo.svg" alt="HTML" title="HTML5" key={key} />)
                    break
                case "css":
                    result.push(<img className={styles.feature} src="/images/svg/css-logo.svg" alt="Plain CSS" title="CSS" key={key} />)
                    break
                case "bootstrap":
                    result.push(<img className={styles.feature} src="/images/svg/bootstrap-logo.svg" alt="Bootstrap" title="Bootstrap CSS Library" key={key} />)
                    break
                case "javascript":
                    result.push(<img className={styles.feature} src="/images/svg/javascript-logo.svg" alt="Javascript" title="Javascript" key={key} />)
                    break
                case "jquery":
                    result.push(<img className={styles.feature} src="/images/svg/jquery-logo.svg" alt="jQuery" title="jQuery Javascript Library" key={key} />)
                    break
                case "react":
                    result.push(<img className={styles.feature} src="/images/svg/react-logo.svg" alt="React" title="React Javascript Library" key={key} />)
                    break
                case "gatsby":
                    result.push(<img className={styles.feature} src="/images/svg/gatsby-logo.svg" alt="Gatsby" title="Gatsby Framework" key={key} />)
                    break
                case "next":
                    result.push(<img className={styles.feature} src="/images/svg/next-logo.svg" alt="Next.js" title="Next.js Framework" key={key} />)
                    break
                case "node":
                    result.push(<img className={styles.feature} src="/images/svg/node-logo2.svg" alt="Node.js" title="Node.js Platform" key={key} />)
                    break
                case "express":
                    result.push(<img className={styles.feature} src="/images/svg/express-logo2.png" alt="Express" title="Express Routing" key={key} />)
                    break
                case "mongodb":
                    result.push(<img className={styles.feature} src="/images/svg/mongodb-logo.svg" alt="MongoDB" title="MongoDB Database Management" key={key} />)
                    break
                case "gsap":
                    result.push(<img className={styles.feature} src="/images/svg/gsap-logo.svg" alt="GSAP" title="GSAP Animation Framework" key={key} />)
                    break
                default:
                    break
            }
        }
        return result
    }

	return (
		<>
			<div className={styles.containerDiv}>
				<div className={styles.topDiv}>
					<div className={styles.leftBox}>
						<Link href="/projects/${project}">
							<a>
								<img className={styles.image} src={image} alt={image} />
							</a>
						</Link>
					</div>
					<div className={styles.rightBox}>
						<Link className={styles.title} href={`/projects/${slug}`}>
							<a>
								<h2 className={styles.title}>{frontmatter.title}</h2>
							</a>
						</Link>
						{/* <p className={styles.date}>{frontmatter.date}</p> */}
						<p className={styles.description}>{frontmatter.description}</p>
						<div className={styles.features}>{makeFeatures(features)}</div>
					</div>
				</div>
                <div className={styles.bottomDiv}>
                    
                </div>
			</div>
		</>
	)
}

export default PortfolioProject
