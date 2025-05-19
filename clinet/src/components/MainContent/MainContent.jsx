// components/MainContent.jsx
import { useEffect, useRef, useState } from 'react'
import styles from './MainContent.module.css'
import RotatingSquare from '../RotatingSquare/RotatingSquare'

const services = [
	{
		title: 'iAm Web',
		desc: 'Разработка современных веб-решений под ключ',
		price: 'от 80 000₽',
	},
	{
		title: 'iAm Design',
		desc: 'Инновационный дизайн с 3D-элементами',
		price: 'от 40 000₽',
	},
	{
		title: 'iAm Marketing',
		desc: 'Продвижение в digital-пространстве',
		price: 'от 30 000₽/мес',
	},
	{
		title: 'iAm AI',
		desc: 'AI-решения для автоматизации бизнеса',
		price: 'индивидуально',
	},
	{
		title: 'iAm App',
		desc: 'Мобильные приложения на iOS/Android',
		price: 'от 200 000₽',
	},
]

export default function MainContent() {
	const [showHero, setShowHero] = useState(true)
	const sectionsRef = useRef([])

	useEffect(() => {
		// Скрываем hero-текст через 3 сек
		const timer = setTimeout(() => {
			setShowHero(false)
		}, 10000)

		// Анимация секций при скролле
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
					}
				})
			},
			{ threshold: 0.2 }
		)

		sectionsRef.current.forEach(ref => observer.observe(ref))

		return () => {
			clearTimeout(timer)
			observer.disconnect()
		}
	}, [])

	return (
		<div className={styles.container}>
			{/* Анимированный квадрат с лого */}
			<RotatingSquare />

			{/* Временный текст */}
			{showHero && (
				<div className={styles.hero}>
					<h1 className={styles.heroTitle}>DIGITAL</h1>
					<p className={styles.heroSubtitle}>агентство полного цикла</p>
				</div>
			)}

			{/* Блоки услуг */}
			<div className={styles.sections}>
				{services.map((service, i) => (
					<section
						key={i}
						ref={el => (sectionsRef.current[i] = el)}
						className={styles.section}
					>
						<div className={styles.titleWrapper}>
							<h2 className={styles.title}>{service.title}</h2>
							<span className={styles.price}>{service.price}</span>
						</div>
						<p className={styles.desc}>{service.desc}</p>
					</section>
				))}
			</div>
		</div>
	)
}
