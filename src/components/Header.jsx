import { NavLink, Link } from 'react-router-dom'
import TopBar from './TopBar'
import '../App.css'

function Header(){	
	return (
		<header className='bg-background-color-card sticky top-0 border-b lg:px-24 border-b border-background-border'>		 
			<TopBar />
			<ul className='flex justify-between items-center px-3 font-medium'>
				<NavLink to='/' className={({isActive}) => (isActive ? 'active' : 'none')} >
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Home</li>
				</NavLink>
				<NavLink to='/category/india'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>India</li>				
				</NavLink>
				<NavLink to='/category/business'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Business</li>
				</NavLink>
				<NavLink to='/category/technology'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Technology</li>
				</NavLink>
				<NavLink to='/category/science'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Science</li>
				</NavLink>
				<NavLink to='/category/health'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Health</li>
				</NavLink>
				<NavLink to='/category/sports'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Sports</li>
				</NavLink>
				<NavLink to='/category/entertainment'  className={({isActive}) => (isActive ? 'active' : 'none')}>
					<li className='hover:text-blue-500 pb-1 cursor-pointer'>Entertainment</li>
				</NavLink>
			</ul>
		</header>
	)
}

export default Header