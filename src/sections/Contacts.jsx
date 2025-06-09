import React from 'react'
import Contact from '../components/Contact'

import contactsImageBg from '../assets/bg-contacts.jpg'

const Contacts = () => {
	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white'
			style={{ backgroundImage: `url(${contactsImageBg})` }} // путь к изображению
			id='contacts'
		>
			<div className='absolute inset-0 bg-black/60 z-10' />
			<div className='relative z-20 text-white'>
				<Contact />
			</div>
		</section>
	)
}

export default Contacts