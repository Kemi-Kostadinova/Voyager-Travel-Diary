import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Search from "./components/search/Search"
import Footer from "./components/footer/Footer"

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
			</Routes>
			
			{/* <Search /> */}
			<Footer />
		</>
	)
}

export default App
