import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
	return (
		<div className='border-b border-gray-200'>
			<button
				onClick={onClick}
				className='w-full flex justify-between items-center py-4 text-left'
			>
				<span className='text-lg font-medium'>{title}</span>
				<ChevronDown
					className={`w-5 h-5 transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key='content'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='pb-4 text-gray-600'>{content}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default AccordionItem
