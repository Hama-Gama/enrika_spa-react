import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";

import 'swiper/css'
import 'swiper/css/navigation'
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
