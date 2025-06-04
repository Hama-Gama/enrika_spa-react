import React from 'react'
import CardServices from '../components/CardServices'

import CardSlider from '../components/CardSlider'

const cardData = [
	{
		image: '/service-1.jpg',
		title: 'Массаж шеи',
		description: 'Профессиональный массаж - это не только удовльсвие, но и забота о здоровье. Мы предлагаем индивидуальный подход к каждому гостю',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-2.jpg',
		title: 'Массаж шеи',
		description: 'Профессиональный массаж - это не только удовльсвие, но и забота о здоровье. Мы предлагаем индивидуальный подход к каждому гостю',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-3.jpg',
		title: 'Массаж шеи',
		description: 'Профессиональный массаж - это не только удовльсвие, но и забота о здоровье. Мы предлагаем индивидуальный подход к каждому гостю',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-4.jpg',
		title: 'Массаж шеи',
		description: 'Профессиональный массаж - это не только удовльсвие, но и забота о здоровье. Мы предлагаем индивидуальный подход к каждому гостю',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
]

{/* <CardSlider cards={cardData} /> */}






const Services = () => {
	return (
		<div>
			<CardSlider 
			cards={cardData} 
			/>
		</div>
	)
}

export default Services