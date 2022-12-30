import { useState, useEffect } from 'react'

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
		<header className='flex py-3 items-center bg-white border-b lg:mx-16 border-b border-gray-300'>
			<h1 className='text-[21px] font-semibold'>
				<span className='text-blue-500'>P</span>
				<span className='text-green-500'>r</span>
				<span className='text-red-500'>o</span>&nbsp;
				<span className='text-gray-600'>News</span>
			</h1>
			<ul className='flex justify-around grow items-center px-3 text-[17px] font-medium text-gray-600'>
				<li className='hover:text-black cursor-pointer'>Home</li>
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