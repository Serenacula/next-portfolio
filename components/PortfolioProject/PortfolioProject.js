import Link from "next/link"

import styles from "./PortfolioProject.module.scss"

function PortfolioProject(props) {
    const slug = props.project.slug
    const frontmatter = props.project.frontmatter

    // Getting the date in a nice format
    const date = new Date(frontmatter.date)
        .toUTCString()
        .replace(" 00:00:00 GMT", "")

    // Make sure that an image exists, else display nothing.
    let image
    if (frontmatter.image) {
        image = "/images/projects/webp/" + frontmatter.image + ".webp"
    } else {
        image = "/images/projects/webp/" + frontmatter.image + ".webp"
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
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/html5-logo.svg"
                            alt="HTML"
                            title="HTML5"
                            key={key}
                        />
                    )
                    break
                case "css":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/css-logo.svg"
                            alt="Plain CSS"
                            title="CSS"
                            key={key}
                        />
                    )
                    break
                case "bootstrap":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/bootstrap-logo.svg"
                            alt="Bootstrap"
                            title="Bootstrap CSS Library"
                            key={key}
                        />
                    )
                    break
                case "sass":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/sass-logo.svg"
                            alt="Sass"
                            title="Sass CSS Framework"
                            key={key}
                        />
                    )
                    break
                case "javascript":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/javascript-logo.svg"
                            alt="Javascript"
                            title="Javascript"
                            key={key}
                        />
                    )
                    break
                case "typescript":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/typescript-logo.svg"
                            alt="Typescript"
                            title="Typescript Programming Language"
                            key={key}
                        />
                    )
                    break
                case "jquery":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/jquery-logo.svg"
                            alt="jQuery"
                            title="jQuery Javascript Library"
                            key={key}
                        />
                    )
                    break
                case "react":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/react-logo.svg"
                            alt="React"
                            title="React Javascript Library"
                            key={key}
                        />
                    )
                    break
                case "gatsby":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/gatsby-logo.svg"
                            alt="Gatsby"
                            title="Gatsby Framework"
                            key={key}
                        />
                    )
                    break
                case "next":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/next-logo.svg"
                            alt="Next.js"
                            title="Next.js Framework"
                            key={key}
                        />
                    )
                    break
                case "node":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/node-logo2.svg"
                            alt="Node.js"
                            title="Node.js Platform"
                            key={key}
                        />
                    )
                    break
                case "express":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/express-logo2.png"
                            alt="Express"
                            title="Express Routing"
                            key={key}
                        />
                    )
                    break
                case "mongodb":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/mongodb-logo.svg"
                            alt="MongoDB"
                            title="MongoDB Database"
                            key={key}
                        />
                    )
                    break
                case "neo4j":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/neo4j-logo.svg"
                            alt="Neo4J"
                            title="Neo4J Database"
                            key={key}
                        />
                    )
                    break
                case "gsap":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/gsap-logo.svg"
                            alt="GSAP"
                            title="GSAP Animation Framework"
                            key={key}
                        />
                    )
                    break
                case "docker":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/docker-logo.svg"
                            alt="Docker"
                            title="Docker Development Platform"
                            key={key}
                        />
                    )
                    break
                case "bullmq":
                    result.push(
                        <img
                            className={styles.feature}
                            src="/images/svg/bullmq-logo.png"
                            alt="BullMQ"
                            title="BullMQ Worker Library"
                            key={key}
                        />
                    )
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
                        <Link href={`/projects/${slug}`}>
                            <a>
                                <img
                                    className={styles.image}
                                    src={image}
                                    alt={image}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.rightBox}>
                        <Link
                            className={styles.title}
                            href={`/projects/${slug}`}
                        >
                            <a>
                                <h2 className={styles.title}>
                                    {frontmatter.title + " »"}
                                </h2>
                            </a>
                        </Link>
                        {/* <p className={styles.date}>{frontmatter.date}</p> */}
                        <p className={styles.description}>
                            {frontmatter.description}
                        </p>
                        <div>
                            <h3 className={styles.featuresTitle}>
                                Technologies:{" "}
                            </h3>
                            <div className={styles.features}>
                                {makeFeatures(features)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomDiv}>
                    {/* <p className={styles.date}>{date}</p> */}
                </div>
            </div>
        </>
    )
}

export default PortfolioProject
