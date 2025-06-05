import React from 'react'
import Accordion from '../components/Accordion'

import faqImageBg from "../assets/bg-FAQ.jpg";
const Faq = () => {
	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[800px] flex items-center justify-center text-white'
			style={{ backgroundImage: `url(${faqImageBg})` }} // путь к изображению
			id='faq'
		>
			<div className='absolute inset-0 bg-black/60 z-10' />
			<div className='relative z-20'>

			<h2 className='text-center text-3xl font-bold mb-10'>FAQ</h2>
			<Accordion />
			</div>
		</section>
	)
}

export default Faq