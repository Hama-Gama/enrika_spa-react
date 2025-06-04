import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import ReviewCard from './ReviewCard'

import user1 from '/review-1.jpg'
import user2 from '/review-2.jpg'
import user3 from '/review-3.jpg'
import user4 from '/review-4.jpg'

const reviews = [
	{
		image: user1,
		name: 'Мадина А.',
		text: 'Огромное спасибо Энрике за спа массаж, просто волшебница, руки  золотые, девочки если хотите ощутить не забываемые впечатление то тогда к Энрике, очень внимательна , вежлива. Рекомендую.',
	},
	{
		image: user2,
		name: 'Татьяна Р.',
		text: 'Энрика очень внимательный, грамотный специалист. Создает атмосферу гармонии, наделяет жизненной энергией. Было очень комфортно и приятно посетить сеанс. Выражаю свою благодарность)))',
	},
	{
		image: user3,
		name: 'Султан Н.',
		text: 'Солидный салон, один из лучших в городе. Уровень свой держат, мы здесь уже почти полтора года. Буду заходить чаще и рекомендовать друзьям и знакомым. Желаю успехов и процветания данному салону!',
	},
	{
		image: user4,
		name: 'Куралай С.',
		text: 'Вчера была на сеансе релакс-массажа по подарочному сертификату, очень приятная обстановка,замечательный массаж.Только лучшие рекомендации',
	},
]

const ReviewsSlider = () => {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='max-w-4xl mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-10'>Отзывы </h2>

				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={1.2}
					loop={true}
					// autoplay={{ delay: 4000 }}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 2000, // ⏱ задержка между слайдами (мс)
						disableOnInteraction: true, // продолжать автопрокрутку после взаимодействия
					}}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2.4 },
						1024: { slidesPerView: 3.2 },
					}}
					className='my-8'
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<ReviewCard {...review} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ReviewsSlider
