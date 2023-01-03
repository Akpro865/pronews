import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

function CategoryCard({title, headlines}){
	return (
		<section className='w-[360px] m-2 px-2 bg-white rounded-xl'>
			<Link to={`/category/${title.toLowerCase()}`} >
		     <h3 className='p-3 text-xl text-[#1867dc] border-b flex items-center'>{title} <MdArrowForwardIos className='pl-1'/></h3>     
		    </Link>
		    <section className='p-2'>
		    	{
		    		headlines ? headlines.map((headline, i)=>(
		    			<a href={`${headline.url}`} target="_blank" key={i} className='flex my-1.5 items-center py-3 border-b'>
			    			<article className='basis-3/4 p-1'>{headline.title}</article>
			   				<img src={headline.urlToImage} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
			 			</a>
		    		)) : null
		    	}				
			</section>     
	    </section>
		
	)
}

export default CategoryCard