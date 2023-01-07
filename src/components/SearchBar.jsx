import { FiSearch } from 'react-icons/fi'

function SearchBar(){
	return (
		<section className='my-3 flex h-10 rounded-xl bg-background-color-input items-center cursor-pointer overflow-hidden'>
			<FiSearch className='text-xl mx-3 text-secondary bg-background-color-input'/>
			<input className='lg:w-[500px] h-full outline-none bg-background-color-input' placeholder='search for topics, locations and sources'/>
		</section>
	)
}

export default SearchBar