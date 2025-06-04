import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-white text-[#5d5d5e] p-4 shadow-md'>
			<div className='container mx-auto md:p-2 flex md:flex-row items-center justify-between'>
				<div>
					<h1 className='text-2xl font-bold'>Enrika_777</h1>
					<p className='text-sm'>Spa salon</p>
				</div>

				{/* Mobile navigation */}
				<div className='md:hidden'>
					<Hamburger toggled={isOpen} toggle={setIsOpen} direction='right' />
				</div>

				{/* Desktop navigation */}

				<nav className='hidden md:flex gap-4'>
					<Link to='/' className='hover:underline'>
						Главная
					</Link>
					<Link to='/faq' className='hover:underline'>
						FAQ
					</Link>
					<Link to='/services' className='hover:underline'>
						Услуги
					</Link>
					<Link to='/reviews' className='hover:underline'>
						Отзывы
					</Link>
					<Link to='/contacts' className='hover:underline'>
						Контакты
					</Link>
				</nav>
			</div>

			{/* Navigation Mobile */}
			<div
				className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
				}`}
			>
				<div className='text-xl flex flex-col gap-2'>
					<Link
						to='/'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Главная
					</Link>
					<Link
						to='/faq'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						FAQ
					</Link>
					<Link
						to='/services'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Услуги
					</Link>
					<Link
						to='/reviews'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Отзывы
					</Link>
					<Link
						to='/contacts'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Контакты
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
