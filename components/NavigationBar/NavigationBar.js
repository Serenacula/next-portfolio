import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { gsap } from "gsap"
import { useIsMount } from "../../resources/scripts/UseIsMount"
import { combineClasses as combine } from "../../resources/scripts/utilities"

import styles from "./NavigationBar.module.css"

/*
 *  Okay, the things left to do are:
 *      1. Make the buttons look nice, including changing colour on hover, and indicating the current page
 *      2. Adding an expanded menu bar for desktop
 *      3. Add cool animations!
 */

function NavigationBar(props) {
	const links = props.links
	const suppressLogo = props.suppressLogo

	// Used to manage the opening and animation of the navbar menu
	const [clicked, setClicked] = useState(false)
	const navObject = useRef(null)
	const isMount = useIsMount()
	const router = useRouter()

	const buttonEasing = "circ.out"
	const buttonDuration = 0.4
	const menuHeight = 44 * links.menuItems.length

	function menuClickHandler() {
		setClicked(!clicked)
	}

	function animateOpen(menuList, topSpan, middleSpan, bottomSpan) {
		gsap.to(menuList, {
			height: menuHeight,
			duration: 0.4,
		})

		gsap.to(topSpan, { rotate: "45deg", y: "0", duration: buttonDuration, ease: buttonEasing })
		gsap.to(middleSpan, { opacity: 0, x: "16", duration: buttonDuration, ease: buttonEasing })
		gsap.to(bottomSpan, { rotate: "-45deg", y: "0", duration: buttonDuration, ease: buttonEasing })
	}

	function animateClose(menuList, topSpan, middleSpan, bottomSpan) {
		gsap.to(menuList, {
			height: 0,
			duration: 0.4,
		})

		gsap.to(topSpan, { rotate: "0deg", y: "-8", duration: buttonDuration, ease: buttonEasing })
		gsap.to(middleSpan, { opacity: 1, x: "0", duration: buttonDuration, ease: buttonEasing })
		gsap.to(bottomSpan, { rotate: "0deg", y: "8", duration: buttonDuration, ease: buttonEasing })
	}

	function animateFirstRender(menuList, topSpan, middleSpan, bottomSpan) {
		gsap.to(menuList, { height: 0, duration: 0 })

		gsap.to(topSpan, { rotate: "0deg", y: "-8", duration: 0 })
		gsap.to(middleSpan, { opacity: 1, x: "0", duration: 0 })
		gsap.to(bottomSpan, { rotate: "0deg", y: "8", duration: 0 })
	}

	useEffect(() => {
		// These are in here to ensure the navbar actually exists when we try to call it
		const menuList = navObject.current.querySelector(".menuList")
		const topSpan = navObject.current.querySelector(".topSpan")
		const middleSpan = navObject.current.querySelector(".middleSpan")
		const bottomSpan = navObject.current.querySelector(".bottomSpan")
		gsap.set([topSpan, middleSpan, bottomSpan], { transformOrigin: "50% 50%" })

		// This prevents it from running when the page first loads.
		if (isMount) {
			animateFirstRender(menuList, topSpan, middleSpan, bottomSpan)
		} else {
			// Tells it what to run when the 'clicked' state changes
			clicked
				? animateOpen(menuList, topSpan, middleSpan, bottomSpan)
				: animateClose(menuList, topSpan, middleSpan, bottomSpan)
		}
	})

	// This function is the loops to create the links. It is called in the return elements

	function makeLinks(list, styles) {
		let result = list.map((item, index) => {
			return (
				<li key={item.name + index}>
					<Link href={item.url}>
						<a className={styles.textStyle}>{item.name}</a>
					</Link>
				</li>
			)
		})

		return result
	}

	return (
		<nav ref={navObject} className={styles.navBar}>
			{/* The Logo Button */}
			{!suppressLogo && router.pathname != "/" ? (
				<Link href="/">
					<a className={styles.logo}>Faylee</a>
				</Link>
			) : (
				<div className={styles.hiddenLogo} />
			)}

			<button className={styles.menuHamburger} onClick={menuClickHandler}>
				<span className="topSpan" />
				<span className="middleSpan" />
				<span className="bottomSpan" />
			</button>

			{/* This is a loop that makes the classes */}
			<ul className={combine(styles.menuList, "menuList")}>{makeLinks(links.menuItems, styles)}</ul>
		</nav>
	)
}

NavigationBar.propTypes = {
	links: PropTypes.object.isRequired,
	suppressLogo: PropTypes.bool,
}

NavigationBar.defaultProps = {
	suppressLogo: false,
}

export default NavigationBar
