import React from 'react'
import Contact from '../components/Contact'

import contactsImageBg from '../assets/bg-contacts.jpg'

const Contacts = () => {
	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[800px] flex items-center justify-center text-white'
			style={{ backgroundImage: `url(${contactsImageBg})` }} // путь к изображению
			id='contacts'
		>

			<div className='relative z-20 text-white'>
		
				<Contact />
			</div>
		</section>
	)
}

export default Contacts