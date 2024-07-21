import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomePage from "./components/home-page/HomePage"
import LogIn from "./components/log-in/LogIn"
import SignUp from './components/sign-up/SignUp'
import Search from "./components/search/Search"
import AboutUs from './components/about-us/AboutUs'
import NotFound from './components/not-found/NotFound'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/discover' element={<Catalog />} />
				<Route path='/details' element={<Details />} />
				<Route path='/log-in' element={<LogIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			
			{/* <Search /> */}
			<Footer />
		</>
	)
}

export default App
