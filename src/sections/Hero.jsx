
import { CircleCheckBig, Phone } from 'lucide-react'
import heroImage from "../assets/bg-home.jpg";
import Button from "../components/ui/Button";

// import { ReactComponent as WhatsAppIcon } from "/whatsapp.png"


const Hero = () => {

		const features = [
			'Все виды массажа',
			'Массаж простаты для профилактики',
			'Spa для головы & Hair Spa',
			'Депиляция & Шугаринг',
			'Прессотерапия',
		]
		
	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[800px] flex items-center justify-center text-white rounded-2xl'
			style={{ backgroundImage: `url(${heroImage})` }} // путь к изображению
			id='hero'
		>
			<div className='absolute inset-0 bg-black/40 rounded-2xl'></div>{' '}
			{/* затемнение */}
			<div className='relative z-10  px-4 max-w-2xl'>
				<ul className='space-y-3 mb-6'>
					{features.map((feature, index) => (
						<li
							key={index}
							className='text-xl font-semibold flex items-start gap-2 text-white'
						>
							<CircleCheckBig className='w-6 h-6 text-white mt-0.5' />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className='flex flex-col max-w-[250px] gap-4'>
					<Button
						href='https://wa.me/+77018086699'
						target='_blank'
						rel='noopener noreferrer'
						variant='primary'
					>
						Записаться на прием
						<img src='/whatsapp.png' alt='whatsapp' className='ml-2 w-5 h-5' />
					</Button>
					<Button
						href='tel:+77018086699'
						target='_blank'
						rel='noopener noreferrer'
						variant='primary'
					>
						Позвонить сейчас
						<Phone className='ml-2 w-5 h-5 scale-x-[-1]' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Hero
