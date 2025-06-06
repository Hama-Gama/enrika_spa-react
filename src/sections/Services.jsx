import React from 'react'
import CardServices from '../components/CardServices'

import CardSlider from '../components/CardSlider'

const cardData = [
	{
		image: '/service-1.jpg',
		title: 'Массаж шеи',
		description:
			'Массаж шеи — это эффективная процедура для снятия напряжения, улучшения кровообращения и облегчения боли в шейной зоне. Помогает расслабиться, снять стресс и восстановить подвижность.',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-2.jpg',
		title: 'Spa для головы',
		description:
			'SPA для головы — это расслабляющая процедура, направленная на снятие напряжения, улучшение кровообращения кожи головы и стимулирование роста волос. Помогает снять стресс и восстановить внутреннее равновесие.',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-3.jpg',
		title: 'Шугаринг',
		description:
			'Шугаринг — это эффективная и щадящая процедура удаления волос с помощью сахарной пасты. Подходит для мужчин и женщин, обеспечивает гладкую кожу и длительный результат без раздражения.',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-4.jpg',
		title: 'Прессотерапия',
		description:
			'Прессотерапия — это аппаратная процедура лимфодренажа, которая улучшает кровообращение, уменьшает отёки и способствует выводу токсинов. Помогает в борьбе с целлюлитом и улучшает тонус кожи.',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
	{
		image: '/service-5.jpg',
		title: 'Депиляция',
		description:
			'Депиляция — это процедура удаления нежелательных волос с поверхности кожи, которая обеспечивает гладкость и комфорт на длительное время. Быстро, эффективно и подходит для разных зон тела.',
		// buttonText: 'Узнать больше',
		// buttonLink: '/services',
	},
]

{/* <CardSlider cards={cardData} /> */}






const Services = () => {
	return (
		<section id='services'>
			<CardSlider 
			cards={cardData} 
			/>
		</section>
	)
}

export default Services