import Button from './ui/Button' // если у тебя есть свой компонент Button

const CardServices = ({
	image,
	title,
	description,
	buttonText,
	buttonLink,
	className = '',
}) => {
	return (
		<div
			className={`bg-[#f8f4f4] rounded-2xl shadow-md overflow-hidden mb-8 transition hover:shadow-xl ${className}`}
		>
			<img src={image} alt={title} className='w-full h-56 object-cover' />

			<div className='p-4'>
				<h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
				<p className='text-gray-600 mb-4'>{description}</p>

				{buttonText && buttonLink && (
					<Button to={buttonLink} variant='primary'>
						{buttonText}
					</Button>
				)}
			</div>
		</div>
	)
}

export default CardServices
