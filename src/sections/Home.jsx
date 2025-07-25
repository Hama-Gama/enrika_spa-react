import React from 'react'
import Button from '../components/ui/Button'
import Services from './Services'
import Faq from './Faq'
import Reviews from './Reviews'
import Contacts from './Contacts'
import Hero from './Hero'

const Home = () => {
	return (
		<section className="md:py-4 bg-gray-100" id='home'>
      <Hero />
			<Services />
			<Faq />
			<Reviews />
			<Contacts />
		</section>
	)
}

export default Home