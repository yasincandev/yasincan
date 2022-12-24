import { createContext } from 'react'
import React, { useEffect, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: themeToggler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
