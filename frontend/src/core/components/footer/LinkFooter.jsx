import React from 'react'

function LinkFooter(props) {
    const { label, link } = props
    return (
        <li>
            <a
                href={link}
                className="hover:underline hover:text-primary-500 dark:hover:text-secondary-500 me-4 md:me-6"
            >
                {label}
            </a>
        </li>
    )
}

export default LinkFooter