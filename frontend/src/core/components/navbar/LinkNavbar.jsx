import React from 'react'

function LinkNavbar(props) {
    const { label, link } = props
    return (
        <li className='mb-1 md:mb-0'>
            <a
                href={link}
                className="block py-2 px-3 rounded text-paper-900 hover:bg-primary-300 hover:text-paper-50 focus:bg-primary-500 focus:text-paper-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:focus:bg-transparent md:focus:text-primary-500 md:p-0 dark:text-paper-50 dark:hover:bg-secondary-700 dark:hover:text-paper-300 dark:focus:bg-secondary-500 dark:focus:text-paper-500 dark:md:hover:bg-transparent dark:md:focus:bg-transparent dark:md:hover:text-secondary-500 dark:md:focus:text-secondary-500"
            >
                {label}
            </a>
        </li>
    )
}

export default LinkNavbar