import fs from "fs"

function ProjectPage() {
    return (
        <>
            <h1>boo</h1>
        </>
    )
}

export default ProjectPage

export async function getStaticPaths() {
    const files = fs.readdirSync("projects")
    
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
    const paths = props.params.paths
    console.log(paths);
    
    return {
        props: {
            
        }
    }
}