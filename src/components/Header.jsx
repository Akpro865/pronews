import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header(){
	const [theme, setTheme] = useState("light")

	useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

	const switchTheme = () => {
      if (theme === "light") {
       saveTheme("dark");
      } else {
       saveTheme("light");
      }
     };

    const saveTheme = (theme) => {
     setTheme(theme);
     localStorage.setItem("theme", theme);
     document.documentElement.setAttribute("data-theme", theme);
    };
	return (
		<header className='flex py-3 items-center bg-white sticky top-0 border-b lg:px-24 border-b border-gray-300'>
		 <Link to='/'>
			<h1 className='text-[21px] font-semibold'>
				<span className='text-blue-500'>P</span>
				<span className='text-green-500'>r</span>
				<span className='text-red-500'>o</span>&nbsp;
				<span className='text-gray-600 border-r-[3px] pr-3'>News</span>
			</h1>
		 </Link>
			<ul className='flex justify-between grow items-center px-3 text-[17px] font-medium text-gray-600'>
				<NavLink to='/category/latest'>
					<li className='hover:text-blue-500 cursor-pointer'>Latest</li>
				</NavLink>
				<NavLink to='/category/india'>
					<li className='hover:text-blue-500 cursor-pointer'>India</li>				
				</NavLink>
				<NavLink to='/category/business'>
					<li className='hover:text-blue-500 cursor-pointer'>Business</li>
				</NavLink>
				<NavLink to='/category/technology'>
					<li className='hover:text-blue-500 cursor-pointer'>Technology</li>
				</NavLink>
				<NavLink to='/category/science'>
					<li className='hover:text-blue-500 cursor-pointer'>Science</li>
				</NavLink>
				<NavLink to='/category/health'>
					<li className='hover:text-blue-500 cursor-pointer'>Health</li>
				</NavLink>
				<NavLink to='/category/sports'>
					<li className='hover:text-blue-500 cursor-pointer'>Sports</li>
				</NavLink>
				<NavLink to='/category/entertainment'>
					<li className='hover:text-blue-500 cursor-pointer'>Entertainment</li>
				</NavLink>
			</ul>
		</header>
	)
}

export default Header