import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./sections/Home";
import Faq from "./sections/Faq";
import Contacts from "./sections/Contacts";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";

import 'swiper/css'
import 'swiper/css/pagination'

function App() {

  return (
		<Routes>
			<Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
				<Route path="faq" element={<Faq />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="services" element={<Services />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
			</Route>
		</Routes>
	)
}

export default App
