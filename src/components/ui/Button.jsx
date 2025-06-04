

const baseStyles ='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl transition font-medium'

const variants = {
	primary: 'bg-[#77D7A7] text-white hover:bg-blue-700 rounded-3xl',
	secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100',
	outline: 'border border-white text-white hover:bg-white hover:text-blue-600',
}

const sizes = {
	sm: 'text-sm py-1 px-3',
	md: 'text-base py-2 px-4',
	lg: 'text-lg py-3 px-6',
}

const Button = ({
	children,
	to,
	href,
	onClick,
	variant = 'primary',
	size = 'md',
	className = '',
	type = 'button',
	target,
	rel,
}) => {
	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

	if (to) {
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		)
	}

	// Внешняя ссылка
	if (href) {
		return (
			<a href={href} className={classes} target={target} rel={rel}>
				{children}
			</a>
		)
	}

	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	)
}

export default Button;
