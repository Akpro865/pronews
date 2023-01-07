import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'

function TopBar(){
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
		<section className='px-3 flex items-center justify-between'>
			<Link to='/' className='text-[27px] font-semibold'>			
				<span className='text-blue-500'>P</span>
				<span className='text-green-500'>r</span>
				<span className='text-red-500'>o</span>&nbsp;
				<span className=''>News</span>			
		 	</Link>
		 	<SearchBar />
		 	<div className='flex text-[28px] items-center'>
		 	 { (theme === 'light') ?
		   	 	(<span onClick={switchTheme} className='p-2 animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><HiMoon /></span>)	:
		   		(<span onClick={switchTheme} className='p-2 animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><FiSun /></span>)	   	
		  	 }
		 	 <IoSettingsOutline className='p-3 animation duration-500 text-5xl hover:bg-background-color-input rounded-full cursor-pointer'/>		 	 
		 	</div>
		</section>
	)
}

export default TopBar