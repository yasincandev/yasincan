import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    console.log(context)
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

export default useThemeContext
