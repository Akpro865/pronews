import { FiSearch } from 'react-icons/fi'

function SearchBar(){
	return (
		<section className='my-2 flex h-11 rounded-xl bg-gray-100 items-center cursor-pointer overflow-hidden'>
			<FiSearch className='text-xl mx-3 text-gray-600'/>
			<input className='lg:w-[500px] h-full outline-none bg-gray-100' placeholder='search for topics, locations and sources'/>
		</section>
	)
}

export default SearchBar