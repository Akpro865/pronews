import CategoryIcon from './CategoryIcon'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'

function CategoryTop({category}){
	return (
		<section className='flex justify-between lg:px-16 items-center py-5'>
			<div className='flex items-center'>
			 <CategoryIcon category={category}/>
			 <h2 className='capitalize text-3xl pl-5'>{category}</h2>
			</div>
			<div className='flex items-center'>
			  <button className='flex items-center border px-5 py-1.5 rounded-full hover:bg-cyan-100 animation duration-300'>Follow <AiOutlineStar className='mx-1'/></button>
			  <FiShare2 className='mx-3 text-xl cursor-pointer'/>
			</div>
		</section>
	)
}

export default CategoryTop