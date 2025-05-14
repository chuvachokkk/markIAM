import { useState } from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [formOpen, setFormOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		project: '',
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Здесь обработка отправки формы
		console.log('Форма отправлена:', formData)
		setFormOpen(false)
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerContainer}>
					{/* Группа логотипа и кнопки */}
					<div className={styles.logoMenuGroup}>
						<a href='/'>
							<img src={logo} alt='Логотип' className={styles.logo} />
						</a>

						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className={styles.menuButton}
						>
							{menuOpen ? '✕' : 'Menu'}
						</button>
					</div>

					{/* Раскрывающееся меню */}
					<nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
						<a href='#services' className={styles.navLink}>
							Тут что то
						</a>
						<a href='#work' className={styles.navLink}>
							Тут что то
						</a>
						<a href='#about' className={styles.navLink}>
							О нас
						</a>
						<a href='#contact' className={styles.navLink}>
							Контакты
						</a>
					</nav>
				</div>
				{/*  Обёртка с перспективой (создаёт эффект 3D) */}
				<div className={styles.cubeWrapper} onClick={() => setFormOpen(true)}>
					{/* Сам "куб", который будет вращаться при наведении */}
					<div className={styles.cube}>
						{/* Передняя грань куба (изначально видимая) */}
						<div className={`${styles.face} ${styles.front}`}>Связь с нами</div>
						{/* Верхняя грань куба (появляется при вращении) */}
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
					/>

					<input
						type='text'
						name='contact'
						placeholder='Как с вами связаться'
						value={formData.contact}
						onChange={handleInputChange}
						required
					/>

					<textarea
						name='project'
						placeholder='Опишите ваш проект (ТЗ)'
						value={formData.project}
						onChange={handleInputChange}
						required
					/>

					<button type='submit' className={styles.submitButton}>
						Отправить
					</button>
				</form>
			</div>
		</>
	)
}
