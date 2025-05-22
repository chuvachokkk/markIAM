import { useEffect } from 'react'
import styles from './MainContent.module.css'

export const useScrollAnimation = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
						entry.target.classList.remove(styles.hidden)
					} else {
						entry.target.classList.remove(styles.visible)
						entry.target.classList.add(styles.hidden)
					}
				})
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -100px 0px',
			}
		)

		const sections = document.querySelectorAll(`.${styles.section}`)
		sections.forEach(section => observer.observe(section))

		return () => {
			sections.forEach(section => observer.unobserve(section))
		}
	}, [])
}
