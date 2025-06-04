import { useEffect, useState } from 'react'
import logo1 from '../../assets/logo1.jpg'
import styles from './RotatingSquare.module.css'

export default function RotatingSquare() {
	const [rotation, setRotation] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = e => {
			const centerX = window.innerWidth / 2
			const centerY = window.innerHeight / 2

			const rotateY = (e.clientX - centerX) * 0.04
			const rotateX = (centerY - e.clientY) * 0.04

			setRotation({ x: rotateX, y: rotateY })
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div className={styles.container} data-testid='rotating-square-container'>
			<div className={styles.textLeft} data-testid='text-left'>
				I AM YOUR DIGITAL DNA
			</div>
			<div
				className={styles.square}
				data-testid='rotating-square'
				style={{
					transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
				}}
			>
				<div className={styles.front}>
					<img src={logo1} alt='logo1' className={styles.logo} />
				</div>
				<div className={styles.back}>
					<img src={logo1} alt='logo1' className={styles.logo} />
				</div>
			</div>
		</div>
	)
}
