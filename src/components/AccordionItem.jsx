import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'


import React from 'react'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
	return (
		<div className='border-b'>
			<button
				className='w-full flex items-center justify-between px-4 py-3 transition'
				onClick={onClick}
			>
				<span className='text-lg font-medium tracking-wide'>{title}</span>
				<ChevronDown
					className={`w-5 h-5 transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>
			<div
				className={`transition-all duration-300 overflow-hidden px-4 ${
					isOpen ? 'max-h-[500px] py-3' : 'max-h-0'
				}`}
			>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default AccordionItem






// const AccordionItem = ({ title, content, isOpen, onClick }) => {
// 	return (
// 		<div className='border-b border-gray-200 px-2'>
// 			<button
// 				onClick={onClick}
// 				className='w-full text-left px-4 py-3 transition'
// 			>
// 				<span className='text-lg font-medium tracking-wide'>{title}</span>
// 				<ChevronDown
// 					className={`w-5 h-5 transition-transform duration-300 ${
// 						isOpen ? 'rotate-180' : ''
// 					}`}
// 				/>
// 			</button>

// 			<AnimatePresence initial={false}>
// 				{isOpen && (
// 					<motion.div
// 						key='content'
// 						initial={{ opacity: 0, height: 0 }}
// 						animate={{ opacity: 1, height: 'auto' }}
// 						exit={{ opacity: 0, height: 0 }}
// 						transition={{ duration: 0.3 }}
// 					>
// 						<div className={`transition-all duration-300 overflow-hidden px-4 ${
// 					isOpen ? 'max-h-[500px] py-3' : 'max-h-0'
// 				}`}>{content}</div>
//  				</motion.div>
// 				)}
// 			</AnimatePresence>
// 		</div>
// 	)
// }

// export default AccordionItem
