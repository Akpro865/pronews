import ForYou from './ForYou'
import news1 from '../assets/news1.webp'
import news2 from '../assets/news2.avif'
import news3 from '../assets/news3.webp'
import news4 from '../assets/news4.jpg'

function TopNews() {
  return (
    <section className='flex'>
    	<div className='basis-4/6 bg-white m-1 mx-2 rounded-xl px-4 py-2'>
    		<h3 className='py-2 text-xl text-[#1867dc] border-b'>Top stories</h3>
        <section className='py-3'>

          <div className='flex py-4 border-b'>
            <div className='basis-2/6'>
            <img src={news1} className='w-full h-[150px] rounded-xl object-cover'/>            
            </div>
            <section className='px-5 basis-4/6'>
              <h2 className='text-xl font-semibold text-[#1f3467] py-1'>Trump Tax Returns Released by House Democrats</h2>
              <p className='indent-10 text-gray-600'>The publication of former President Donald J. Trump’s private tax documents comes amid questions him during his presidency. The release came 10.</p>              
            </section>            
          </div>

          <div className='flex py-4 border-b'>
            <div className='basis-2/6'>
            <img src={news2} className='w-full h-[150px] rounded-xl object-cover'/>            
            </div>
            <section className='px-5 basis-4/6'>
              <h2 className='text-xl font-semibold text-[#1f3467] py-1'>The Google Pixel 7's rear camera glass spontaneously shatters for some</h2>
              <p className='indent-10 text-gray-600'>When the Pixel 7 series came out, it became apparent that Google refined its flagship formula, leaving no major hardware flaws, unlike older Pixels. This is the reason.</p>              
            </section>            
          </div>

          <div className='flex py-4 border-b'>
            <div className='basis-2/6'>
            <img src={news3} className='w-full h-[150px] rounded-xl object-cover'/>            
            </div>
            <section className='px-5 basis-4/6'>
              <h2 className='text-xl font-semibold text-[#1f3467] py-1'>Oil set to end turbulent 2022 higher</h2>
              <p className='indent-10 text-gray-600'>Brent crude futures traded around $82.00 a barrel. Brent looked set to end the year with a 7.6% gain, after jumping 50.2% in 2021. Prices surged in March to a peak of $139.13 a barrel.</p>              
            </section>            
          </div>

          <div className='flex py-4 border-b'>
            <div className='basis-2/6'>
            <img src={news4} className='w-full h-[150px] rounded-xl object-cover'/>            
            </div>
            <section className='px-5 basis-4/6'>
              <h2 className='text-xl font-semibold text-[#1f3467] py-1'>Watch the latest water satellite unfold itself in space</h2>
              <p className='indent-10 text-gray-600'>The Surface Water and Ocean Topography (SWOT) satellite launched into Earth orbit on Friday, Dec. 16, from Vandenberg Space Force Base.</p>              
            </section>            
          </div>

        </section>
    	</div>
    	
      <div className='basis-2/6 bg-white m-1 mx-2 rounded-xl px-2 py-2 border-b'>
        <ForYou />
      </div>
      

    </section>
  )
}

export default TopNews