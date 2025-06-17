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
								<h3>Марк Темерязев</h3>
								{/* <p className='member-role'>Генеральный директор</p> */}
								<p className='member-description'>
									Основатель компании I am, стратег и вдохновитель команды.
									Отвечает за стратегическое развитие компании, контроль
									качества проектов и построение долгосрочных отношений с
									клиентами. Его видение и опыт помогают нам создавать
									инновационные решения для бизнеса.
								</p>
							</div>
						</div>

						<div className='team-member'>
							<div className='member-photo'>
								<img src={ivanPhoto} alt='Ivan_foto' />
							</div>
							<div className='member-info'>
								<h3>Иван Первых</h3>
								{/* <p className='member-role'>FullStack Developer</p> */}
								<p className='member-description'>
									Руководит командой разработчиков с душой и вниманием к
									деталям. Не просто пишет код, а создаёт решения, которые
									делают жизнь клиентов проще. Всегда честно говорит о
									возможностях и сроках, не обещает того, что не может
									выполнить. Для него важно, чтобы каждый проект был не просто
									рабочим, а действительно полезным.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mission-section'>
					<h2>Наша Миссия</h2>
					<div className='mission-content'>
						<div className='mission-intro'>
							<p>
								<strong>I am</strong> - команда экспертов в
								digital-пространстве. Наша миссия — помогать бизнесу говорить на
								языке современного рынка: через стильные сайты, умных чат-ботов,
								запоминающийся дизайн и эффективную рекламу.
							</p>
						</div>

						<div className='mission-advantages'>
							<h3>Почему мы?</h3>
							<ul>
								<li>
									Создаём сайты, которые работают — быстрые, удобные и приносят
									клиентов.
								</li>
								<li>
									Внедряем чат-ботов, которые экономят ваше время и увеличивают
									продажи.
								</li>
								<li>
									Разрабатываем дизайн, который выделяет вас среди конкурентов.
								</li>
								<li>
									Запускаем рекламу, которая привлекает целевую аудиторию.
								</li>
							</ul>
						</div>

						<div className='mission-conclusion'>
							<p>
								Мы не просто исполнители — мы партнёры, которые погружаются в
								ваш бизнес и предлагают решения, а не шаблоны.
							</p>
							<p className='mission-tagline'>
								<strong>I am</strong> — это про ваш успех в цифре.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
