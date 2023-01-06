import { IoBarChart, IoBicycleSharp, IoBulb, IoFlask, IoFitnessSharp,
IoHome, IoDesktop  } from 'react-icons/io5'
import { useState } from 'react'

function CategoryIcon({category}){
	if(category === 'business'){
		return <IoBarChart className='text-6xl text-white bg-green-600 rounded-full p-3'/>
	} else if(category === 'india'){
		return <IoHome className='text-6xl text-white bg-teal-500 rounded-full p-3'/>
	} else if(category === 'technology'){
		return <IoBulb className='text-6xl text-white bg-sky-500 rounded-full p-3'/>
	} else if(category === 'science'){
		return <IoFlask className='text-6xl text-white bg-pink-600 rounded-full p-3'/>
	} else if(category === 'health'){
		return <IoFitnessSharp className='text-6xl text-white bg-indigo-600 rounded-full p-3'/>
	} else if(category === 'sports'){
		return <IoBicycleSharp className='text-6xl text-white bg-orange-600 rounded-full p-3'/>
	} else if(category === 'entertainment'){
		return <IoDesktop className='text-6xl text-white bg-yellow-500 rounded-full p-3'/>
	}		
}

export default CategoryIcon