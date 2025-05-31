import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import RotatingSquare from './components/RotatingSquare/RotatingSquare'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services/Services'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<RotatingSquare />
							<MainContent />
						</>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
