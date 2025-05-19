import { useEffect, useRef } from 'react'
import styles from './MainContent.module.css'

// Массив с данными об услугах
const services = [
	{
		title: 'I AM WEB',
		subtitle: 'Разработка сайтов под ключ',
		desc: 'Полный цикл создания сайтов — от концепции до запуска. Современные технологии, адаптивный дизайн и мощная функциональность.',
	},
	{
		title: 'I AM DESIGN',
		subtitle: 'Визуальная идентичность и UX/UI',
		desc: 'Уникальный дизайн, который выделяет ваш бренд. Проработанные интерфейсы, логотипы и фирменный стиль.',
	},
	{
		title: 'I AM AI',
		subtitle: 'Интеллектуальные решения для бизнеса',
		desc: 'Внедрение искусственного интеллекта: чат-боты, аналитика, автоматизация процессов.',
	},
	{
		title: 'I AM BRAND',
		subtitle: 'Создание и продвижение бренда',
		desc: 'От нейминга до упаковки. Помогаем компаниям обрести голос и уверенность на рынке.',
	},
	{
		title: 'I AM TECH',
		subtitle: 'Сложные технические решения',
		desc: 'Разработка веб-приложений, API и облачных сервисов для вашего бизнеса.',
	},
	{
		title: 'I AM SOCIAL',
		subtitle: 'Продвижение в соцсетях',
		desc: 'SMM, таргетированная реклама и создание контента для вовлечения аудитории.',
	},
]

export default function MainContent() {
	const sectionsRef = useRef([]) // Ссылки на секции услуг
	const heroRef = useRef(null) // Ссылка на hero-текст

	useEffect(() => {
		// Наблюдатель для секций услуг
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// Секция видна — плавно появляется
						entry.target.style.opacity = '1'
						entry.target.style.transform = 'translateY(0)'
					} else {
						// Секция не видна — плавно исчезает
						entry.target.style.opacity = '0'
						entry.target.style.transform = 'translateY(50px)'
					}
				})
			},
			{ threshold: 0.2 } // Срабатывает, когда 20% секции видно
		)

		// Привязываем наблюдатель к каждой секции
		sectionsRef.current.forEach(ref => ref && observer.observe(ref))

		// Управление видимостью hero при скролле
		const handleScroll = () => {
			if (heroRef.current) {
				const scrollY = window.scrollY
				const opacity = Math.max(0, 1 - scrollY / 300)
				heroRef.current.style.opacity = opacity
			}
		}

		window.addEventListener('scroll', handleScroll)

		// Очистка при размонтировании
		return () => {
			observer.disconnect()
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={styles.container}>
			{/* Hero-текст (слоган) */}
			<div className={styles.hero} ref={heroRef}>
				<h1 className={styles.heroTitle}>DIGITAL</h1>
				<p className={styles.heroSubtitle}>агентство полного цикла</p>
			</div>

			{/* Секции с услугами */}
			<div className={styles.sections}>
				{services.map((service, i) => (
					<section
						key={i}
						ref={el => (sectionsRef.current[i] = el)}
						className={styles.section}
					>
						<div className={styles.titleWrapper}>
							<h2 className={styles.title}>{service.title}</h2>
						</div>
						<h3>{service.subtitle}</h3>
						<p className={styles.desc}>{service.desc}</p>
					</section>
				))}
			</div>
		</div>
	)
}
