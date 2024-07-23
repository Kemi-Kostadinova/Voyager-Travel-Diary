import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomePage from "./components/home-page/HomePage"
import LogIn from "./components/log-in/LogIn"
import SignUp from './components/sign-up/SignUp'
import AboutUs from './components/about-us/AboutUs'
import NotFound from './components/not-found/NotFound'
import DiscoverPage from './components/discover-page/DiscoverPage'
import Details from './components/details/Details'
import Profile from './components/profile/Profile'
import CreateEntry from './components/create-entry/CreateEntry'

function App() {

	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/log-in' element={<LogIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/discover' element={<DiscoverPage />} />
				<Route path='/details/:travelEntryId' element={<Details />} />
				<Route path='/create' element={<CreateEntry />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	)
}

export default App
