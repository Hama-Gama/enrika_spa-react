import React from 'react'
import Button from '../components/ui/Button'

const Home = () => {
	return (
		<div>
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
		</div>
	)
}

export default Home