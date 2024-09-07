import React from 'react'

import LinkNavbar from './LinkNavbar'
import DarkModeToggle from './DarkModeToggle'
import MenuOpenToggle from './MenuOpenToggle'

function Navbar({ isMenuOpen, toggleMenu, isDarkMode, toggleDarkMode }) {
    return (
        <nav className='bg-paper-50 dark:bg-paper-900'>
            <div
                className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'
            >
                <a href="#" className='flex items-center space-x-3'>
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
                    <span
                        className='self-center text-2xl font-semibold whitespace-nowrap text-paper-900 hover:text-primary-500 dark:text-paper-50 dark:hover:text-secondary-500'
                    >
                        FenrirTv
                    </span>
                </a>
                <div className='flex items-center justify-end md:hidden'>

                    <MenuOpenToggle
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                    />

                    <DarkModeToggle
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-paper-200 rounded-lg bg-paper-100 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-none md:bg-transparent dark:bg-paper-800 md:dark:bg-transparent dark:border-paper-700"
                    >

                        <LinkNavbar
                            label={"Inicio"}
                            link={"#"}
                        />

                        <LinkNavbar
                            label={"Categorias"}
                            link={"#"}
                        />

                        <LinkNavbar
                            label={"Directorio"}
                            link={"#"}
                        />

                        <div className='relative hidden md:block'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <svg
                                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                    />

                                </svg>
                                <span className='sr-only'>Search Icon</span>
                            </div>
                            <input
                                type="text"
                                id='search-navbar'
                                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Search...'
                            />
                            <button
                                data-collapse-toggle='navbar-search'
                                type='button'
                                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                                aria-controls='navbar-search'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>
                                    Open main menu
                                </span>
                                <svg
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 17 14'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M1 1h15M1 7h15M1 13h15'
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* <LinkNavbar
                            label={"Pricing"}
                            link={"#"}
                        /> */}

                        <LinkNavbar
                            label={"Contact"}
                            link={"#"}
                        />

                        <div className='hidden md:flex md:items-center'>
                            <DarkModeToggle
                                isDarkMode={isDarkMode}
                                toggleDarkMode={toggleDarkMode}
                            />
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar