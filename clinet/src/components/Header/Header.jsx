import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.logoNavWrapper}>
					{/* Анимированный логотип */}
					<motion.a
						href='/'
						className={styles.logoLink}
						animate={{ x: menuOpen ? -200 : 0 }}
						transition={{ type: 'tween', duration: 0.4 }}
					>
						<img src={logo} alt='Логотип' className={styles.logo} />
					</motion.a>

					{/* Анимированное меню */}
					<AnimatePresence>
						{menuOpen && (
							<motion.nav
								className={styles.nav}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -30 }}
								transition={{ duration: 0.3 }}
							>
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
							</motion.nav>
						)}
					</AnimatePresence>
				</div>

				{/* Кнопка меню */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={styles.menuButton}
				>
					{menuOpen ? '✕' : 'Menu'}
				</button>
			</div>
		</header>
	)
}
