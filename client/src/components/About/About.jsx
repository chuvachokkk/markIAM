import React from 'react'
import ivanPhoto from '../../assets/Ivan.jpg'
import markPhoto from '../../assets/mark1.jpg'
import './About.css'

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-content'>
				<div className='team-section'>
					<h2 className='team-title'>Наша Команда</h2>
					<div className='team-grid'>
						<div className='team-member'>
							<div className='member-photo'>
								<img src={markPhoto} alt='mark_foto' />
							</div>
							<div className='member-info'>
								<h3>Марк Легенда соулс игр</h3>
								<p className='member-role'>скажи кто ты ?</p>
								<p className='member-description'>тут что нибудь о тебе</p>
							</div>
						</div>

						<div className='team-member'>
							<div className='member-photo'>
								<img src={ivanPhoto} alt='Ivan_foto' />
							</div>
							<div className='member-info'>
								<h3>Иван</h3>
								<p className='member-role'>FullStack Developer</p>
								<p className='member-description'>
									тут скромно что нибудь о себе напишу)
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mission-section'>
					<h2>Наша Миссия</h2>
					<p>
						Так как ты идейный вдохновитель , давай придумай нашу миссию)а я просто вставлю сюда текст)
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
