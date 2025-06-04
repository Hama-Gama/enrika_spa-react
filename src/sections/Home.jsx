import React from 'react'
import Button from '../components/ui/Button'
import Services from './Services'
import Faq from './Faq'
import Reviews from './Reviews'
import Contacts from './Contacts'
// import ImageBg from "../assets/bg-home"

const Home = () => {
	return (
		<section className="py-16 bg-gray-100" id='home'>
			home page
			<Button
				href='https://wa.me/+77018086699'
				target='_blank'
				rel='noopener noreferrer'
				variant='primary'
			>
				Записаться на прием
			</Button>
			<Button
				href='tel:+77018086699'
				target='_blank'
				rel='noopener noreferrer'
				variant='primary'
			>
				Позвонить сейчас
			</Button>
			<Services />
			<Faq />
			<Reviews />
			<Contacts />
		</section>
	)
}

export default Home