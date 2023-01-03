 import { useQuery, useQueryClient } from 'react-query'
 import { useParams } from 'react-router-dom'
 import { useState } from 'react'
 import { getBusiness, getEntertainment, getHealth,
  getScience, getSports, getTechnology, getIndia, getTopStories } from '../api/newsapi'

function CategoryNews(){
	const { category } = useParams()
	const queryClient = new useQueryClient()

	let query;
	if(category === 'business') {
		query = useQuery('businessNews', getBusiness)
	} else if(category === 'technology') {
		query = useQuery('technologyNews', getTechnology)
	} else if(category === 'science') {
		query = useQuery('scienceNews', getScience)
	} else if(category === 'sports') {
		query = useQuery('sportsNews', getSports)
	} else if(category === 'health') {
		query = useQuery('healthNews', getHealth)
	} else if(category === 'entertainment') {
		query = useQuery('EntertainmentNews', getEntertainment)
	} else if(category === 'latest'){
		query = useQuery('latestNews', getTopStories)
	} else if(category === 'india'){
		query = useQuery('indiatNews', getIndia)
	}

	console.log(category,query)
	return (
		<section className='w-[80%] mx-auto'>
		    	{
		    		query.data ? query.data.articles.map((headline, i)=>(
		    			<a href={`${headline.url}`} target="_blank" key={i}>			    			
		    				<section className='flex p-3 py-5 border-b-2'>
		    					<div className='basis-1/4'>
			   						<img src={headline.urlToImage} className='h-40 w-full rounded-xl basis-1/4 object-cover' />
			   					</div>
			   					<section className='pl-5 basis-3/4'>
			   						<article className='text-[24px]'>{headline.title ? headline.title : null}</article>
			   						<article className='indent-8 text-gray-800'>{headline.description ? headline.description : null}</article>
			   					</section>
			   				</section>
			 			</a>
		    		)) : null
		    	}		    
	    </section>
		
	)
}

export default CategoryNews