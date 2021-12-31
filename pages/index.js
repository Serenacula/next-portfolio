// Utility Scripts
import {combineClasses as combine} from "../resources/scripts/utilities"

// NEXT Components
import Head from "next/head"
import Image from "next/image"

// CSS
import styles from "../css/index.module.scss"

import headerImage from "../public/images/amsterdam.png"


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next Portfolio</title>
				
			</Head>


			<main>
                <div>
                    <div className={combine(styles.mainColumn, styles.firstSection)}>
                        
                        <h1 className={styles.mainTitle}>
                            <span style={{display: "inline-block"}}>Faylee</span>
                            {' '}
                            <span style={{display: "inline-block"}}>Murray Browne</span>
                        </h1>
                        
                        <h3 className={styles.mainSubtitle}>I am a <span style={{color: "#a134ff"}}>queer</span>, self-taught junior web developer</h3>
                        
                        <div className={styles.headerImage}>
                            <Image
                                src={headerImage} 
                                alt="Cartoon Houses"
                                layout="intrinsic"
                            />
                        </div>
                    </div>
                </div>
                
                {/* This section's been removed because it looked unprofessional, and didn't add much to the page */}
                {/* <div className="secondColourBackground">
                    
                    <div className={combine("mainColumn", styles.secondSection)}>
                    
                        <h2 className={combine(styles.sectionTitle, "secondColourText")}>About Me</h2>
                        
                        <div className={combine("firstColourBackground", styles.secondSectionCard)}>
                            <p>{"Hi. I'm a newbie web dev, living in the UK."}</p>
                            
                            <p>Last summer I decided to learn how to make websites in my spare time. This site is to show a little of what I've learnt.</p>
                        </div>
                        
                    </div>
                </div> */}
			
                <div className={styles.thirdSection}>
                
                    <h2 className={styles.skillsTitle}>Skills</h2>
                    
                    <div className={styles.thirdSectionMain}>
                        
                        <h2 className={styles.sectionTitle}>Starting with the fundamentals</h2>
                        
                        <div className={styles.card}>
                            
                            <h3>HTML</h3>
                            <p>As the basis of everything, I've made sure I have a solid understanding of HTML.</p>
                            
                            <h3>CSS</h3>
                            <p>CSS is what makes websites beautiful, so it has been essential to learn. I've worked with both plain CSS, as well as the Bootstrap framework.</p>
                            
                            <h3>Javascript</h3>
                            <p>I have dedicated time to make sure I know vanilla javascript reasonably well, before moving to modern frameworks. I've also spent some time with jQuery, though I no longer use it.</p>
                        </div>
                        
                        
                        
                    </div>
                </div>
			
                <div className={styles.fourthSection}>
                        
                    <h2 className={styles.sectionTitle}>Learning the backend</h2>
                    
                    <div className={styles.card}>
                        
                        <h3>Express</h3>
                        <p>I can build a basic backend using express on the Node.js platform.</p>
                        
                        <h3>Git</h3>
                        <p>I use Git for my source-control. It is also essential for deploying to platforms like Heroku.</p>
                        
                        <h3>MongoDB</h3>
                        <p>Though not my biggest strength, learning a database system is an important skill, and one I have spent time on. It is an area I wish to expand on as I grow.</p>
                        
                        
                    </div>
                </div>
			
                <div className={styles.fifthSection}>
                        
                        <h2 className={styles.sectionTitle}>Building with modern frameworks</h2>
                        
                        <div className={styles.card}>
                            
                            <h3>React</h3>
                            <p>My framework of choice, as well as an industry standard, I have spent the last two months getting comfortable with React. I find it both intuitive and well thought-out, and it is a skillset I wish to truly master.</p>
                            
                            <h3>Next.js</h3>
                            <p>The framework that made this site! Next.js builds on top of React to create a complete design framework. It takes care of all the backend and under-the-hood bits, making it ideal for frontend developers.</p>
                            
                            <h3>GSAP</h3>
                            <p>A modern animation framework that works well with React, GSAP is my current choice for making beautiful and easy animations.</p>
                        </div>
                    </div>
            </main>
		</div>
	)
}
