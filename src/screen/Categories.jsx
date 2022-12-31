import { MdArrowForwardIos } from 'react-icons/md'
import you1 from '../assets/you1.jpg'
import you2 from '../assets/you2.webp'
import you3 from '../assets/you3.avif'
import you4 from '../assets/you4.webp'
import you5 from '../assets/you5.jpg'

function Categories(){
	return (
		<>
		<h3 className='py-4 px-2 text-3xl text-black'>Choosen For You</h3>
		<div className='lg:flex'>

			<section className='basis-1/3 m-2 px-2 bg-white rounded-xl'>
		      <h3 className='p-2 text-xl text-black border-b flex items-center'>India <MdArrowForwardIos className='pl-1'/></h3>     
		      <section className='p-3'>

		      	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>WHO meets with Chinese officials on current COVID-19 situation</article>
		       	  <img src={you1} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Interest rates hiked on small savings schemes except PPF</article>
		       	  <img src={you2} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>India’s start-up dream sours for fired tech workers</article>
		       	  <img src={you3} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>MIUI 14: FULL LIST OF XIAOMI DEVICES THAT WILL GET THE NEW UPDATE</article>
		       	  <img src={you4} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Study uncovers fruit fly circadian clock mechanisms</article>
		       	  <img src={you5} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		      </section>
	    	</section>

	    	<section className='basis-1/3 px-2 m-2 bg-white rounded-xl'>
		      <h3 className='p-2 text-xl text-black border-b flex items-center'>World <MdArrowForwardIos className='pl-1'/></h3>     
		      <section className='p-3'>

		      	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>WHO meets with Chinese officials on current COVID-19 situation</article>
		       	  <img src={you1} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Interest rates hiked on small savings schemes except PPF</article>
		       	  <img src={you2} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>India’s start-up dream sours for fired tech workers</article>
		       	  <img src={you3} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>MIUI 14: FULL LIST OF XIAOMI DEVICES THAT WILL GET THE NEW UPDATE</article>
		       	  <img src={you4} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Study uncovers fruit fly circadian clock mechanisms</article>
		       	  <img src={you5} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		      </section>
	    	</section>

	    	<section className='basis-1/3 px-2 m-2 bg-white rounded-xl'>
		      <h3 className='p-2 text-xl text-black border-b flex items-center'>Business <MdArrowForwardIos className='pl-1'/></h3>     
		      <section className='p-3'>

		      	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>WHO meets with Chinese officials on current COVID-19 situation</article>
		       	  <img src={you1} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Interest rates hiked on small savings schemes except PPF</article>
		       	  <img src={you2} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>India’s start-up dream sours for fired tech workers</article>
		       	  <img src={you3} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>MIUI 14: FULL LIST OF XIAOMI DEVICES THAT WILL GET THE NEW UPDATE</article>
		       	  <img src={you4} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		       	<div className='flex my-1 items-center py-3 border-b'>
		       	  <article className='basis-3/4 p-1'>Study uncovers fruit fly circadian clock mechanisms</article>
		       	  <img src={you5} className='h-16 w-24 rounded-xl basis-1/4 object-cover' />
		       	</div>

		      </section>
	    	</section>
		</div>
	</>
	)
}

export default Categories