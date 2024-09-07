import { useState } from 'react'

import Navbar from './core/components/navbar/Navbar'
import Footer from './core/components/footer/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)

    document.documentElement.classList.toggle('dark', !isDarkMode)
  }


  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col bg-paper-100 dark:bg-paper-950`}>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className='flex flex-col flex-grow min-h-full'>
        <h1>Hello World</h1>
      </main>

      <Footer />
    </div>
  )
}

export default App