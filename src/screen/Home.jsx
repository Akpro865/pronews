import Top from '../components/Top'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getTopStories, getForYou, getBusiness,getEntertainment,
		getHealth, getScience, getSports, getTechnology} from '../api/newsapi'
import Categories from './Categories'
import TopNews from './TopNews'


function Home({headlines}){
	return (
		<div className='bg-background-color-behind lg:px-24'>
			<Top /> 
			<TopNews headlines={headlines}/>
			<Categories />
		</div>
	)
}

export default Home