import React from 'react'
import LinkFooter from './LinkFooter'

function Footer() {
    return (
        <footer className="w-full p-4 bg-paper-50 border-t border-paper-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-paper-900 dark:border-paper-600">
            <span className="text-sm text-paper-700 sm:text-center dark:text-paper-400">
                © 2024 <a href="#" className="hover:underline hover:text-primary-500 dark:hover:text-secondary-500">FenrirTv</a>. Todos los derechos reservados.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

                <LinkFooter
                    label={"Acerca"}
                    link="#"
                />

                <LinkFooter
                    label={"Política de Privacidad"}
                    link="#"
                />

                <LinkFooter
                    label={"Licencia"}
                    link="#"
                />

                {/* <LinkFooter
                    label={"Contact"}
                    link="#"
                /> */}

            </ul>
        </footer>
    )
}

export default Footer