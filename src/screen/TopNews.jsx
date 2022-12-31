import { useState, useEffect } from 'react'
import axios from 'axios'
import { MdArrowForwardIos } from 'react-icons/md'
import ForYou from './ForYou'
import news1 from '../assets/news1.webp'
import news2 from '../assets/news2.avif'
import news3 from '../assets/news3.webp'
import news4 from '../assets/news4.jpg'


function TopNews() {
  const [headlines, setHeadlines] = useState(null)

  useEffect(()=>{
    (async()=>{
      const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=14f43dc865744037893a18ed961af39e')
      console.log(data.articles)
      setHeadlines(data.articles.slice(0,6))
    })()
  }, [])

  console.log(headlines)
  return (
    <section className='flex'>
    	<div className='basis-4/6 bg-white m-1 mx-2 rounded-xl px-4 py-2'>
    		<h3 className='py-2 text-xl text-[#1867dc] border-b flex items-center'>Top stories <MdArrowForwardIos className='pl-1'/></h3>

        <section className='py-3'> 
        {
          headlines ? headlines.map((headline,i)=>(
            <div className='flex py-4 border-b' key={i}>
              <div className='basis-2/6 flex items-center'>
              <img src={headline.urlToImage} className='w-full h-[150px] rounded-xl object-cover'/>            
              </div>
              <section className='px-5 basis-4/6'>
                <h2 className='text-xl py-1'>{headline.title}</h2>
                <p className='indent-10 text-gray-600'>{headline.description}</p>              
              </section>            
            </div>
          )) : <p>Loading.....</p>
        }
        </section>                           
          

        
    	</div>
    	
      <div className='basis-2/6 bg-white m-1 mx-2 rounded-xl px-2 py-2 border-b'>
        <ForYou />
      </div>
      

    </section>
  )
}

export default TopNews