import styles from './MainContent.module.css'
import { useScrollAnimation } from './useScrollAnimation'

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
	useScrollAnimation()

	return (
		<div className={styles.container}>
			<div className={styles.sections}>
				{services.map((service, i) => (
					<section key={i} className={styles.section}>
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
