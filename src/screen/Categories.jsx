import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { getBusiness, getEntertainment, getHealth,
  getScience, getSports, getTechnology} from '../api/newsapi'
import CategoryCard from '../components/CategoryCard'
import axios from 'axios'

function Categories(){
	// access the queryclient
	const queryClient = new useQueryClient()

	const BusinessQuery = useQuery('business', getBusiness)	
	const TechnologyQuery = useQuery('technology', getTechnology)
	const SportsQuery = useQuery('sports', getSports)
	const ScienceQuery = useQuery('science', getScience)
	const HealthQuery = useQuery('health', getHealth)
	const EntertainmentQuery = useQuery('entertainment', getEntertainment) 
	console.log('t',EntertainmentQuery)
	return (
		<>
			<h3 className='py-4 px-2 text-[28px]'>Choosen For You</h3>			
				<div className='flex justify-between flex-wrap'>	
					{BusinessQuery.data ? <CategoryCard title='Business' headlines={ BusinessQuery.data.articles.slice(0, 4) }/> : null }
			  	{TechnologyQuery.data ? <CategoryCard title='Technology' headlines={ TechnologyQuery.data.articles.slice(0, 4) }/> : null }
					{SportsQuery.data ? <CategoryCard title='Sports' headlines={ SportsQuery.data.articles.slice(0, 4) }/> : null }
					{ScienceQuery.data ? <CategoryCard title='Science' headlines={ ScienceQuery.data.articles.slice(0, 4) }/> : null }
					{HealthQuery.data ? <CategoryCard title='Health' headlines={ HealthQuery.data.articles.slice(0, 4) }/> : null }
					{EntertainmentQuery.data ? <CategoryCard title='Entertainment' headlines={ EntertainmentQuery.data.articles.slice(0, 4) }/> : null }
				</div>		
		</>
	)
}

export default Categories