import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.jpg'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [formOpen, setFormOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		project: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [notification, setNotification] = useState({
		show: false,
		type: '',
		title: '',
		message: '',
	})

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [menuOpen])

	useEffect(() => {
		if (notification.show) {
			const timer = setTimeout(() => {
				setNotification(prev => ({ ...prev, show: false }))
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [notification.show])

	const showNotification = (type, title, message) => {
		setNotification({
			show: true,
			type,
			title,
			message,
		})
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const sendToTelegram = async data => {
		const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
		const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

		const message = `
Заявка с сайта:
Имя: ${data.name}
Контакты: ${data.contact}
Проект: ${data.project}
		`

		try {
			const response = await fetch(
				`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: CHAT_ID,
						text: message,
						parse_mode: 'HTML',
					}),
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка отправки сообщения')
			}

			return true
		} catch (error) {
			console.error('Ошибка:', error)
			return false
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const success = await sendToTelegram(formData)
			if (success) {
				showNotification(
					'success',
					'Успешно!',
					'Спасибо! Ваша заявка отправлена.'
				)
				setFormData({ name: '', contact: '', project: '' })
				setFormOpen(false)
			} else {
				showNotification(
					'error',
					'Ошибка',
					'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
				)
			}
		} catch (error) {
			showNotification(
				'error',
				'Ошибка',
				'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerContainer}>
					<div className={styles.logoMenuGroup}>
						<Link to='/'>
							<img src={logo} alt='Логотип' className={styles.logo} />
						</Link>

						<div
							onClick={() => setMenuOpen(!menuOpen)}
							className={`${styles.menuButton3D} ${
								menuOpen ? styles.open : ''
							}`}
						>
							Меню
						</div>
					</div>
					<nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
						<button
							className={styles.closeMenuButton}
							onClick={() => setMenuOpen(false)}
							aria-label='Закрыть меню'
						>
							✕
						</button>
						<Link
							to='/services'
							className={styles.navLink}
							onClick={() => setMenuOpen(false)}
						>
							Услуги
						</Link>
						<Link
							to='/about'
							className={styles.navLink}
							onClick={() => setMenuOpen(false)}
						>
							О нас
						</Link>
						<Link
							to='/contacts'
							className={styles.navLink}
							onClick={() => setMenuOpen(false)}
						>
							Контакты
						</Link>
					</nav>
				</div>
				<div className={styles.cubeWrapper} onClick={() => setFormOpen(true)}>
					<div className={styles.cube}>
						<div className={`${styles.face} ${styles.front}`}>Связь с нами</div>
						<div className={`${styles.face} ${styles.top}`}>Связь с нами</div>
					</div>
				</div>
			</header>

			<div
				className={`${styles.formBackdrop} ${formOpen ? styles.active : ''}`}
				onClick={() => setFormOpen(false)}
			/>

			<div
				className={`${styles.contactFormOverlay} ${
					formOpen ? styles.active : ''
				}`}
			>
				<button
					className={styles.closeFormButton}
					onClick={() => setFormOpen(false)}
				>
					✕
				</button>

				<h2>Оставьте заявку</h2>
				<form className={styles.contactForm} onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Ваше ФИО'
						value={formData.name}
						onChange={handleInputChange}
						required
						disabled={isSubmitting}
					/>

					<input
						type='text'
						name='contact'
						placeholder='Как с вами связаться'
						value={formData.contact}
						onChange={handleInputChange}
						required
						disabled={isSubmitting}
					/>

					<textarea
						name='project'
						placeholder='Опишите ваш проект'
						value={formData.project}
						onChange={handleInputChange}
						required
						disabled={isSubmitting}
					/>

					<button
						type='submit'
						className={styles.submitButton}
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Отправка...' : 'Отправить'}
					</button>
				</form>
			</div>

			<div
				className={`${styles.notification} ${
					notification.show ? styles.active : ''
				} ${notification.type === 'success' ? styles.success : styles.error}`}
			>
				<div className={styles.notificationTitle}>{notification.title}</div>
				<div className={styles.notificationMessage}>{notification.message}</div>
			</div>
		</>
	)
}
