import { useNavigate } from 'react-router-dom'
import styles from './MainContent.module.css'
import { useScrollAnimation } from './useScrollAnimation'

const services = [
	{
		id: 'web',
		title: 'I AM WEB',
		subtitle: 'Разработка сайтов под ключ',
		desc: 'Полный цикл создания сайтов — от концепции до запуска. Современные технологии, адаптивный дизайн и мощная функциональность.',
		buttons: [
			{
				label: 'Лендинг',
				serviceId: 'web',
			},
			{
				label: 'Многостраничный сайт',
				serviceId: 'web',
			},
			{
				label: 'Интернет магазин',
				serviceId: 'web',
			},
			{
				label: 'Web-приложения',
				serviceId: 'web',
			},
		],
	},
	{
		id: 'design',
		title: 'I AM DESIGN',
		subtitle: 'Визуальная идентичность и UX/UI',
		desc: 'Уникальный дизайн, который выделяет ваш бренд. Проработанные интерфейсы, логотипы и фирменный стиль.',
		buttons: [
			{
				label: 'UI/UX дизайн',
				serviceId: 'design',
			},
			{
				label: 'Фирменный стиль',
				serviceId: 'design',
			},
			{
				label: 'Графика для соцсетей',
				serviceId: 'design',
			},
			{
				label: '3D-визуализация',
				serviceId: 'design',
			},
		],
	},
	{
		id: 'ai',
		title: 'I AM AI',
		subtitle: 'Интеллектуальные решения для бизнеса',
		desc: 'Внедрение искусственного интеллекта: чат-боты, аналитика, автоматизация процессов.',
		buttons: [
			{
				label: 'AI-чат-боты',
				serviceId: 'ai',
			},
			{
				label: 'Автоматизация аналитики',
				serviceId: 'ai',
			},
			{
				label: 'Генеративный дизайн',
				serviceId: 'ai',
			},
		],
	},
	{
		id: 'brand',
		title: 'I AM BRAND',
		subtitle: 'Создание и продвижение бренда',
		desc: 'От нейминга до упаковки. Помогаем компаниям обрести голос и уверенность на рынке.',
		buttons: [
			{
				label: 'Нейминг',
				serviceId: 'brand',
			},
			{
				label: 'Упаковка',
				serviceId: 'brand',
			},
			{
				label: 'Сторителлинг',
				serviceId: 'brand',
			},
			{
				label: 'Аудит бренда',
				serviceId: 'brand',
			},
		],
	},
	{
		id: 'tech',
		title: 'I AM TECH',
		subtitle: 'Сложные технические решения',
		desc: 'Разработка веб-приложений, API и облачных сервисов для вашего бизнеса.',
		buttons: [
			{
				label: 'Blockchain',
				serviceId: 'tech',
			},
			{
				label: 'VR/AR',
				serviceId: 'tech',
			},
			{
				label: 'AI-разработка',
				serviceId: 'tech',
			},
			{
				label: 'Сервисы для бизнеса',
				serviceId: 'tech',
			},
		],
	},
	{
		id: 'social',
		title: 'I AM SOCIAL',
		subtitle: 'Продвижение в соцсетях',
		desc: 'SMM, таргетированная реклама и создание контента для вовлечения аудитории.',
		buttons: [
			{
				label: 'Таргетированная реклама',
				serviceId: 'social',
			},
			{
				label: 'SMM-стратегия',
				serviceId: 'social',
			},
			{
				label: 'Influencer-маркетинг',
				serviceId: 'social',
			},
			{
				label: 'Разбор конкурентов',
				serviceId: 'social',
			},
		],
	},
]

export default function MainContent() {
	const navigate = useNavigate()
	useScrollAnimation()

	const handleServiceClick = serviceId => {
		navigate(`/services#${serviceId}`)
	}

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
						<div className={styles.buttonGroup}>
							{service.buttons.map((button, index) => (
								<button
									key={index}
									className={styles.serviceButton}
									onClick={() => handleServiceClick(button.serviceId)}
								>
									{button.label}
								</button>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	)
}
