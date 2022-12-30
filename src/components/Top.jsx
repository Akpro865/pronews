import weathericon from '../assets/cloudy.png'

function Top() {
  return (
    <section className='flex justify-between items-center py-4'>
      	<section>
      		<h2 className='text-3xl py-1'>Your briefing</h2>
      		<p className='text-gray-700 text-[15px]'>Friday, 30 December</p>
    	</section> 
    	<section className='flex bg-white px-2 py-2 items-center rounded-xl'>
    		<img src={weathericon} className='h-12 w-12'/>
    		<div className='px-3'>
    			<p className='text-xs text-gray-600'>Your local weather</p>
    			<p className='text-xl p-0 m-0'>29°C</p>
    			<a className='text-xs text-blue-500'>More on weather.com</a>
    		</div>
    	</section>  
    </section>
  )
}

export default Top