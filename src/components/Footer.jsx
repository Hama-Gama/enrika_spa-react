import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white mt-8'>
			<div className='container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} Название сайта. Все права защищены.
				</p>
				<div className='flex gap-4 text-sm'>
					<a href='/privacy' className='hover:underline'>
						Политика конфиденциальности
					</a>
					<a href='/terms' className='hover:underline'>
						Условия использования
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer