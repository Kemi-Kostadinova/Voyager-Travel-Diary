import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import LogIn from "./components/log-in/LogIn"
import SignUp from './components/sign-up/SignUp'
import Search from "./components/search/Search"

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/log-in' element={<LogIn />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
			
			{/* <Search /> */}
			<Footer />
		</>
	)
}

export default App
