import {
	MapPin,
	Mail,
	Phone,
	Instagram,
	Clock,
	MessageCircle,
} from 'lucide-react'

import contactImage from '/contact-image.jpg'

const Contact = () => {
	return (
		<section>
			<div className='container mx-auto py-4 max-w-4xl'>
				<div className='absolute inset-0 bg-black/60 z-10' />
				<h2 className='text-white text-3xl font-bold mb-10 text-center relative z-20'>
					Контакты{' '}
				</h2>

				<div className='grid gap-8 md:grid-cols-2 relative z-20'>
					{/* Контактная информация */}
					<div className='space-y-5 text-white px-5'>
						<div className='flex items-start gap-3'>
							<MapPin className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>Адрес:</h3>
								<p>г. Алматы, ул. Гоголя, 120</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Phone className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>Телефон:</h3>
								<p>+7 (701) 808-66-99</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Mail className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>Email:</h3>
								<p>enrika7777@yandex.kz</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<MessageCircle className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>WhatsApp:</h3>
								<p>+7 (701) 808-66-99</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Instagram className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>Instagram:</h3>
								<p>@enrika777_spa</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Clock className='text-white mt-1' />
							<div>
								<h3 className='font-semibold'>График работы:</h3>
								<p>Без выходных: 9:00–20:00,</p>
							</div>
						</div>
					</div>

					{/* Правая часть: изображение */}
					<div className='w-full'>
						<img
							src={contactImage}
							alt='Контакты'
							className='rounded-4xl shadow-lg w-full h-auto object-cover px-5'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
