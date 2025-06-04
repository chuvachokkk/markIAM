import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Services.module.css'

const servicesData = [
	{
		id: 'web',
		title: 'I AM WEB',
		subtitle: 'Разработка сайтов',
		services: [
			{
				name: 'Лендинг',
				price: 'от 30 000',
				description:
					'Одностраничник с высокой конверсией для рекламных кампаний.',
				includes:
					'Адаптивный дизайн, 1 форма заявки, базовая SEO-оптимизация, хостинг на 1 месяц',
			},
			{
				name: 'Многостраничный сайт',
				price: 'от 55 000',
				description: 'Корпоративный сайт с блогом, услугами и портфолио.',
				includes:
					'До 10 страниц, самописная CMS, мобильная версия, контент-менеджер',
			},
			{
				name: 'Интернет-магазин',
				price: 'от 90 000',
				description: 'Полноценный e-commerce с оплатой, доставкой и CRM.',
				includes:
					'Каталог до 50 товаров, корзина, оплата (ЮKassa, СБП), интеграция с 1С',
			},
			{
				name: 'Web-приложения',
				price: 'от 200 000',
				description: 'Интерактивные сервисы (калькуляторы, личные кабинеты).',
				includes: 'Личный кабинет, API-интеграции, админ-панель',
			},
		],
		summary:
			'Разработка сайтов любой сложности: от визиток до сложных платформ. Адаптивный дизайн, SEO-оптимизация и интеграция с внешними сервисами.',
		advantage:
			'Бесплатный прототип перед стартом. 3 месяца технической поддержки в подарок.',
	},
	{
		id: 'design',
		title: 'I AM DESIGN',
		subtitle: 'Дизайн',
		services: [
			{
				name: 'UI/UX дизайн',
				price: 'от 40 000',
				description: 'Удобные интерфейсы для сайтов и приложений.',
				includes: 'Интерактивный прототип, адаптация под все устройства',
			},
			{
				name: 'Фирменный стиль',
				price: 'от 35 000',
				description: 'Логотип, цвета, шрифты, брендбук.',
				includes: 'Лого, гайдлайн, визитки, шаблоны для соцсетей',
			},
			{
				name: 'Графика для соцсетей',
				price: 'от 15 000',
				description: 'Шаблоны сторис, постов, обложек.',
				includes: 'Набор шаблонов, анимации, стикеры',
			},
			// {
			// 	name: '3D-визуализация',
			// 	price: 'от 25 000/модель',
			// 	description: 'Продуктовые рендеры и анимация.',
			// 	includes: 'Рендеры продукта, анимация',
			// },
		],
		summary:
			'Дизайн, который решает бизнес-задачи: от первых эскизов до готовых макетов.',
		advantage: '2 бесплатных правки в каждом пакете.',
	},
	{
		id: 'ai',
		title: 'I AM AI',
		subtitle: 'Искусственный интеллект',
		services: [
			{
				name: 'AI-чатботы',
				price: 'от 50 000',
				description: 'Виртуальные помощники для сайта и Telegram.',
				includes: 'Обучение на ваших данных, интеграция с CRM',
			},
			{
				name: 'Автоматизация аналитики',
				price: 'от 25 000',
				description: 'Сбор и прогнозирование данных.',
				includes: 'Прогнозирование продаж, автоматические отчеты',
			},
			{
				name: 'Генеративный дизайн',
				price: 'от 30 000',
				description: 'Уникальный контент через нейросети.',
				includes: 'Создание изображений, текстов, видео',
			},
		],
		summary:
			'Внедряем ИИ для экономии времени и персонализации взаимодействия с клиентами.',
		advantage: 'Тестовый период 14 дней для чат-бота.',
	},
	{
		id: 'brand',
		title: 'I AM BRAND',
		subtitle: 'Брендинг',
		services: [
			{
				name: 'Нейминг',
				price: 'от 20 000',
				description: 'Креативные названия для компаний и продуктов.',
				includes: '10 вариантов названий + проверка на уникальность',
			},
			{
				name: 'Упаковка',
				price: 'от 40 000',
				description: 'Дизайн этикеток, баннеров, мерча.',
				includes: 'Дизайн этикетки, баннера, мерча',
			},
			{
				name: 'Сторителлинг',
				price: 'от 30 000',
				description: 'Легенда бренда для лендингов и соцсетей.',
				includes: 'Разработка истории бренда, контент-план',
			},
			{
				name: 'Аудит бренда',
				price: 'от 30 000',
				description: 'Анализ позиционирования и рекомендации.',
				includes: 'Анализ позиционирования, рекомендации',
			},
		],
		summary: 'Создаем узнаваемость через эмоции и визуальную идентичность.',
		advantage: 'Бесплатный гайд по продвижению бренда.',
	},
	{
		id: 'tech',
		title: 'I AM TECH',
		subtitle: 'Сложные решения',
		services: [
			{
				name: 'Blockchain',
				price: 'от 300 000',
				description: 'Смарт-контракты и криптоплатформы.',
				includes: 'Смарт-контракты, токенизация',
			},
			{
				name: 'VR/AR',
				price: 'от 200 000',
				description: 'Виртуальные туры и 3D-примерочные.',
				includes: 'Разработка VR/AR приложений',
			},
			{
				name: 'AI-разработка',
				price: 'от 150 000',
				description: 'Создание AI-моделей и интеграция.',
				includes: 'Разработка и внедрение AI-решений',
			},
			{
				name: 'Сервисы для бизнеса',
				price: 'от 70 000',
				description: 'API-интеграция и облачные решения.',
				includes: 'Связка CRM, платежных систем и др.',
			},
		],
		summary: 'Сложные технологии «под ключ» для инновационных проектов.',
		advantage: 'Гарантия 1 год на код.',
	},
	{
		id: 'social',
		title: 'I AM SOCIAL',
		subtitle: 'SMM',
		services: [
			{
				name: 'Таргетированная реклама',
				price: '15 000/мес',
				description: 'Настройка рекламы в Facebook/Instagram.',
				includes: 'Настройка, ведение, отчетность',
			},
			{
				name: 'SMM-стратегия',
				price: '25 000/мес',
				description: 'Контент-планы и ведение сообществ.',
				includes: 'Ведение Instagram, 12 постов, 20 сторис',
			},
			{
				name: 'Influencer-маркетинг',
				price: 'от 50 000',
				description: 'Продвижение через блогеров.',
				includes: 'Поиск и работа с блогерами',
			},
			{
				name: 'Разбор конкурентов',
				price: '20 000',
				description: 'Анализ их соцсетей и слабых мест.',
				includes: 'Полный анализ конкурентов',
			},
		],
		summary: 'Продвижение, которое увеличивает охваты и продажи через соцсети.',
		advantage: 'Первый месяц – скидка 50%.',
	},
]

export default function Services() {
	const location = useLocation()
	const [showForm, setShowForm] = useState(false)
	const [selectedService, setSelectedService] = useState(null)
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		message: '',
	})
	const [notification, setNotification] = useState({
		show: false,
		type: '',
		message: '',
	})

	const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
	const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location])

	const handleServiceClick = service => {
		setSelectedService(service)
		setShowForm(true)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setNotification({ show: true, type: 'loading', message: 'Отправляем...' })

		try {
			const telegramMessage = `
🔔 Новая заявка!

Категория: ${selectedService.category}
Услуга: ${selectedService.name}

👤 Имя: ${formData.name}
📞 Контакты: ${formData.contact}
💬 Сообщение: ${formData.message || 'Не указано'}
			`

			console.log('Отправка в Telegram:', {
				token: TELEGRAM_BOT_TOKEN ? 'Токен есть' : 'Токена нет',
				chatId: TELEGRAM_CHAT_ID ? 'ID есть' : 'ID нет',
				message: telegramMessage,
			})

			const response = await fetch(
				`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: TELEGRAM_CHAT_ID,
						text: telegramMessage,
						parse_mode: 'HTML',
					}),
				}
			)

			const data = await response.json()
			console.log('Ответ от Telegram:', data)

			if (response.ok) {
				setNotification({
					show: true,
					type: 'success',
					message: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
				})
				setFormData({ name: '', contact: '', message: '' })
				setTimeout(() => {
					setShowForm(false)
					setNotification({ show: false, type: '', message: '' })
				}, 3000)
			} else {
				throw new Error(data.description || 'Ошибка при отправке')
			}
		} catch (error) {
			console.error('Error sending message to Telegram:', error)
			setNotification({
				show: true,
				type: 'error',
				message:
					error.message || 'Произошла ошибка. Пожалуйста, попробуйте позже.',
			})
		}
	}

	return (
		<div className={styles.container}>
			{servicesData.map(service => (
				<section
					key={service.id}
					id={service.id}
					className={styles.serviceSection}
				>
					<div className={styles.serviceHeader}>
						<h2 className={styles.title}>{service.title}</h2>
						<h3 className={styles.subtitle}>{service.subtitle}</h3>
					</div>

					<div className={styles.servicesGrid}>
						{service.services.map((item, idx) => (
							<div key={idx} className={styles.serviceCard}>
								<div className={styles.serviceCardHeader}>
									<h4>{item.name}</h4>
									<span className={styles.price}>{item.price}</span>
								</div>
								<p className={styles.description}>{item.description}</p>
								<div className={styles.includes}>
									<h5>Что входит:</h5>
									<p>{item.includes}</p>
								</div>
								<button
									className={styles.orderButton}
									onClick={() =>
										handleServiceClick({ ...item, category: service.title })
									}
								>
									Заказать
								</button>
							</div>
						))}
					</div>

					<div className={styles.summary}>
						<p>{service.summary}</p>
					</div>

					<div className={styles.advantage}>
						<h4>Конкурентное преимущество:</h4>
						<p>{service.advantage}</p>
					</div>
				</section>
			))}

			{showForm && (
				<div className={styles.formOverlay}>
					<div className={styles.formContainer}>
						<button
							className={styles.closeButton}
							onClick={() => setShowForm(false)}
						>
							×
						</button>
						<h3>Заказать {selectedService?.name}</h3>
						<form onSubmit={handleSubmit}>
							<div className={styles.formGroup}>
								<input
									type='text'
									name='name'
									placeholder='Ваше имя'
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className={styles.formGroup}>
								<input
									type='text'
									name='contact'
									placeholder='Email или телефон'
									value={formData.contact}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className={styles.formGroup}>
								<textarea
									name='message'
									placeholder='Сообщение (необязательно)'
									value={formData.message}
									onChange={handleInputChange}
								/>
							</div>
							<button type='submit' className={styles.submitButton}>
								Отправить
							</button>
						</form>
					</div>
				</div>
			)}

			{notification.show && (
				<div className={`${styles.notification} ${styles[notification.type]}`}>
					{notification.message}
				</div>
			)}
		</div>
	)
}
