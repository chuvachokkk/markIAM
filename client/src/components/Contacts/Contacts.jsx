import React, { useState } from 'react'
import styles from './Contacts.module.css'

export default function Contacts() {
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [notification, setNotification] = useState({
		show: false,
		type: '',
		title: '',
		message: '',
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const showNotification = (type, title, message) => {
		setNotification({
			show: true,
			type,
			title,
			message,
		})
		setTimeout(() => {
			setNotification(prev => ({ ...prev, show: false }))
		}, 5000)
	}

	const sendToTelegram = async data => {
		const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
		const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

		const message = `
Новое сообщение с сайта:
Имя: ${data.name}
Контакты: ${data.contact}
Сообщение: ${data.message}
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
					'Спасибо! Ваше сообщение отправлено.'
				)
				setFormData({ name: '', contact: '', message: '' })
			} else {
				showNotification(
					'error',
					'Ошибка',
					'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.'
				)
			}
		} catch (error) {
			showNotification(
				'error',
				'Ошибка',
				'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.infoSection}>
					<h1 className={styles.title}>Свяжитесь с нами</h1>
					<p className={styles.description}>
						Мы всегда на связи и готовы ответить на ваши вопросы
					</p>

					<div className={styles.contactInfo}>
						<div className={styles.contactItem}>
							<h3>Телефон</h3>
							<a href='tel:+79001234567'>+7 (914) 684-02-20</a>
						</div>

						<div className={styles.contactItem}>
							<h3>Email</h3>
							<a href='mailto:info@iamdigital.ru'>Flashnemo@yandex.ru</a>
						</div>

						<div className={styles.contactItem}>
							<h3>Telegram</h3>
							<a
								href='https://t.me/Flashnemo666'
								target='_blank'
								rel='noopener noreferrer'
							>
								@Flashnemo666
							</a>
						</div>

						<div className={styles.contactItem}>
							<h3>WhatsApp</h3>
							<a
								href='https://wa.me/+79146840220'
								target='_blank'
								rel='noopener noreferrer'
							>
								+7 (914) 684-02-20
							</a>
						</div>
					</div>
				</div>

				<div className={styles.formSection}>
					<h2>Напишите нам</h2>
					<form className={styles.contactForm} onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Ваше имя'
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
							name='message'
							placeholder='Ваше сообщение'
							value={formData.message}
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
			</div>

			<div
				className={`${styles.notification} ${
					notification.show ? styles.active : ''
				} ${notification.type === 'success' ? styles.success : styles.error}`}
			>
				<div className={styles.notificationTitle}>{notification.title}</div>
				<div className={styles.notificationMessage}>{notification.message}</div>
			</div>
		</div>
	)
}
