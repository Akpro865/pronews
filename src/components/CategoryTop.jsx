import { useState } from 'react'
import CategoryIcon from './CategoryIcon'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

function CategoryTop({category}){
	const [follow, setFollow] = useState(false)

	return (
		<section className='flex justify-between lg:px-16 items-center py-7'>
			<div className='flex items-center'>
			 <CategoryIcon category={category}/>
			 <h2 className='capitalize text-3xl pl-5'>{category}</h2>
			</div>
			<div className='flex items-center'>
			{
				follow ? (
					<button onClick={()=>setFollow(!follow)} className='flex text-black  items-center border border-blue-100 px-3.5 py-1.5 rounded-full bg-sky-200 hover:bg-background-blue-50 animation duration-300 text-[15px]'><AiFillStar className='mx-1.5'/>Following</button>					  				
				) : (
					<button onClick={()=>setFollow(!follow)} className='flex items-center border border-background-border px-3.5 py-1.5 rounded-full hover:bg-background-color-input animation duration-300 text-[15px]'><AiOutlineStar className='mx-1.5'/>Follow</button>
				)
			}	
				<FiShare2 className='mx-3 text-xl cursor-pointer'/>
			</div>
		
		</section>
	)
}

export default CategoryTop