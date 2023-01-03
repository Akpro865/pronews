import { MdArrowForwardIos } from 'react-icons/md'
import ForYou from './ForYou'
import { Link } from 'react-router-dom'

function TopNews({headlines}) {
  console.log(headlines)
  return (
    <section className='flex'>
    	<div className='basis-4/6 bg-white m-1 mx-2 rounded-xl px-4 py-2'>
    		<h3 className='py-2 text-xl text-[#1867dc] border-b cursor-pointer flex items-center'>Top stories <MdArrowForwardIos className='pl-1'/></h3>

        <section className='py-3'> 
        {
          headlines ? headlines.slice(0,6).map((headline,i)=>(
            <a href={`${headline.url}`} target="_blank" className='flex py-4 border-b' key={i}>
              <div className='basis-2/6 flex items-center'>
              <img src={headline.urlToImage} className='w-full h-[150px] rounded-xl object-cover'/>            
              </div>
              <section className='px-5 basis-4/6'>
                <h2 className='text-xl pt-1'>{headline.title}</h2>
                <p className='indent-10 text-gray-800'>{headline.description ? headline.description.substring(0, 150) : null}..</p>              
              </section>            
            </a>
          )) : <p>Loading.....</p>
        }
        </section>                                   
    	</div>
    	
      <div className='basis-2/6 bg-white m-1 mx-2 rounded-xl px-2 py-2 border-b'>
        <ForYou headlines={headlines}/>
      </div>    
    </section>
  )
}

export default TopNews