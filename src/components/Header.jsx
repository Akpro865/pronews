function Header(){
	return (
		<header className='flex lg:mx-12 py-2 items-center border-b border-b border-gray-300 px-6'>
			<h1 className='text-[21px] font-semibold'>
				<span className='text-blue-500'>P</span>
				<span className='text-green-500'>r</span>
				<span className='text-red-500'>o</span>&nbsp;
				<span className='text-gray-600'>News</span>
			</h1>
			<ul className='flex justify-evenly grow items-center px-3 text-[17px] font-medium text-gray-700'>
				<li className='hover:text-black cursor-pointer'>Home</li> <span className='border'>
				<li className='hover:text-black cursor-pointer'>Latest</li>
				<li className='hover:text-black cursor-pointer'>India</li>
				<li className='hover:text-black cursor-pointer'>World</li>
				<li className='hover:text-black cursor-pointer'>Business</li>
				<li className='hover:text-black cursor-pointer'>Technology</li>
				<li className='hover:text-black cursor-pointer'>Local</li>
				<li className='hover:text-black cursor-pointer'>Others</li>
			</ul>
		</header>
	)
}

export default Header