import React from 'react'
import styles from './Services.module.css'

const servicesData = [
	{
		id: 'web',
		title: 'I AM WEB',
		subtitle: 'Разработка сайтов',
		services: [
			{
				name: 'Лендинг',
				price: '30 000 – 65 000',
				description:
					'Одностраничник с высокой конверсией для рекламных кампаний.',
				includes:
					'Адаптивный дизайн, 1 форма заявки, базовая SEO-оптимизация, хостинг на 1 месяц',
			},
			{
				name: 'Многостраничный сайт',
				price: '55 000 – 130 000',
				description: 'Корпоративный сайт с блогом, услугами и портфолио.',
				includes:
					'До 10 страниц, CMS (WordPress/Tilda), мобильная версия, контент-менеджер',
			},
			{
				name: 'Интернет-магазин',
				price: '90 000 – 250 000',
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
				price: '40 000 – 120 000',
				description: 'Удобные интерфейсы для сайтов и приложений.',
				includes: 'Интерактивный прототип, адаптация под все устройства',
			},
			{
				name: 'Фирменный стиль',
				price: '35 000 – 100 000',
				description: 'Логотип, цвета, шрифты, брендбук.',
				includes: 'Лого, гайдлайн, визитки, шаблоны для соцсетей',
			},
			{
				name: 'Графика для соцсетей',
				price: '15 000 – 30 000',
				description: 'Шаблоны сторис, постов, обложек.',
				includes: 'Набор шаблонов, анимации, стикеры',
			},
			{
				name: '3D-визуализация',
				price: 'от 25 000/модель',
				description: 'Продуктовые рендеры и анимация.',
				includes: 'Рендеры продукта, анимация',
			},
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
				price: '50 000 – 150 000',
				description: 'Виртуальные помощники для сайта и Telegram.',
				includes: 'Обучение на ваших данных, интеграция с CRM',
			},
			{
				name: 'Автоматизация аналитики',
				price: '25 000/мес',
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
				price: '20 000 – 50 000',
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
				price: '30 000',
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
	return (
		<div className={styles.container}>
			{servicesData.map((service, index) => (
				<section key={service.id} className={styles.serviceSection}>
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
		</div>
	)
}
