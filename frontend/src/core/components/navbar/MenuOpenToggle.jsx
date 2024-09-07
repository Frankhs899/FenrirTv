import React from 'react'

function MenuOpenToggle({ isMenuOpen, toggleMenu }) {
    return (
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-paper-500 rounded-lg hover:bg-primary-100 hover:text-primary-500 focus:text-primary-500 focus:outline-none dark:text-paper-400 dark:hover:text-secondary-500 dark:hover:bg-secondary-700 dark:focus:text-secondary-500 "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    )
}

export default MenuOpenToggle