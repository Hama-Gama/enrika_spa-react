import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import CardImage from './CardServices' // Импорт твоей карточки



const CardSlider = ({ cards = [] }) => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			spaceBetween={20}
			slidesPerView={1.2}
			// navigation
			pagination={{ clickable: true }}
			autoplay={{
				delay: 2000, // ⏱ задержка между слайдами (мс)
				disableOnInteraction: true, // продолжать автопрокрутку после взаимодействия
			}}
			loop={true} // 🔁 бесконечный цикл
			breakpoints={{
				640: { slidesPerView: 1 },
				768: { slidesPerView: 2.4 },
				1024: { slidesPerView: 3.2 },
			}}
			className='my-8'
		>
			{cards.map((card, index) => (
				<SwiperSlide key={index}>
					<CardImage
						image={card.image}
						title={card.title}
						description={card.description}
						buttonText={card.buttonText}
						buttonLink={card.buttonLink}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default CardSlider
