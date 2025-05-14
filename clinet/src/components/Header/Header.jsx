import { useState } from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
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
						Services
					</a>
					<a href='#work' className={styles.navLink}>
						Work
					</a>
					<a href='#about' className={styles.navLink}>
						About
					</a>
					<a href='#contact' className={styles.navLink}>
						Contact
					</a>
				</nav>
			</div>
		</header>
	)
}
