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
		<section className=' bg-white' id='contacts'>
			<div className='container mx-auto px-4 max-w-4xl'>


				<div className='grid gap-8 md:grid-cols-2'>
					{/* Контактная информация */}
					<div className='space-y-5 text-gray-700'>
						<div className='flex items-start gap-3'>
							<MapPin className='text-indigo-600 mt-1' />
							<div>
								<h3 className='font-semibold'>Адрес:</h3>
								<p>г. Алматы, ул. Гоголя, 120</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Phone className='text-indigo-600 mt-1' />
							<div>
								<h3 className='font-semibold'>Телефон:</h3>
								<p>+7 (701) 808-66-99</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Mail className='text-indigo-600 mt-1' />
							<div>
								<h3 className='font-semibold'>Email:</h3>
								<p>enrika7777@yandex.kz</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<MessageCircle className='text-green-600 mt-1' />
							<div>
								<h3 className='font-semibold'>WhatsApp:</h3>
								<p>+7 (701) 808-66-99</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Instagram className='text-pink-500 mt-1' />
							<div>
								<h3 className='font-semibold'>Instagram:</h3>
								<p>@enrika777_spa</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<Clock className='text-indigo-600 mt-1' />
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
							className='rounded-2xl shadow-lg w-full h-auto object-cover'
						/>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Contact
