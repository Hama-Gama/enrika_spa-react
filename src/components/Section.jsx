const Section = ({ id, title, children, className = '' }) => {
	return (
		<section id={id} className={`py-12 px-4 md:px-8 ${className}`}>
			{title && (
				<h2 className='text-3xl font-bold mb-6 text-center text-blue-600'>
					{title}
				</h2>
			)}
			<div className='max-w-5xl mx-auto'>{children}</div>
		</section>
	)
}

export default Section
