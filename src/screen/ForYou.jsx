import you1 from '../assets/you1.jpg'
import you2 from '../assets/you2.webp'
import you3 from '../assets/you3.avif'
import you4 from '../assets/you4.webp'
import you5 from '../assets/you5.jpg'

function ForYou({headlines}) {
  return (
    <section>
      <h3 className='py-2 text-xl text-[#1867dc] border-b border-background-border cursor-pointer'>Picks for you</h3>     
      <section className='p-3'>
        {
          headlines ? headlines.slice(0,10).reverse().map((headline,i)=>(
            <a href={`${headline.url}`} target='_blank' key={i} className='flex my-1 items-center py-3 border-b border-background-border'>
              <article className='basis-3/4 p-1 '>{headline.title.slice(0,100)}</article>
              <div className='basis-1/4'>
                <img src={headline.urlToImage} alt='img' className='h-16 w-full rounded-xl object-cover' />
              </div>
            </a>
          )) : <p>on the way..</p>
        }      	      
      </section>
    </section>
  )
}

export default ForYou