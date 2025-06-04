import { useState } from 'react'
import AccordionItem from './AccordionItem'

const faqs = [
	{
		title: 'Какие виды лечения вы предоставляете?',
		content:
			'Мы предлагаем терапию, имплантацию, отбеливание и хирургические услуги.',
	},
	{
		title: 'Нужна ли предварительная запись?',
		content: 'Да, мы рекомендуем записываться заранее для вашего удобства.',
	},
	{
		title: 'Принимаете ли вы страховку?',
		content: 'Да, мы сотрудничаем с большинством страховых компаний.',
	},
	{
		title: 'Какие виды лечения вы предоставляете?',
		content:
			'Мы предлагаем терапию, имплантацию, отбеливание и хирургические услуги.',
	},
	{
		title: 'Нужна ли предварительная запись?',
		content: 'Да, мы рекомендуем записываться заранее для вашего удобства.',
	},
	{
		title: 'Принимаете ли вы страховку?',
		content: 'Да, мы сотрудничаем с большинством страховых компаний.',
	},
]

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleIndex = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='max-w-2xl mx-auto'>
			{faqs.map((faq, index) => (
				<AccordionItem
					key={index}
					title={faq.title}
					content={faq.content}
					isOpen={openIndex === index}
					onClick={() => toggleIndex(index)}
				/>
			))}
		</div>
	)
}

export default Accordion
