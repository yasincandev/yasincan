import { FC, useEffect, useState } from 'react'
import useThemeContext from '../../hooks/useThemeContext'
import {
  Nav,
  Logo,
  ThemeContainer,
  GreetingContainer,
  GrettingText,
} from './styles'
import { Sunrise } from '../Icons/Sunrise'
import { Sunset } from '../Icons/Sunset'
import greetings from '../../data/greetings.json'
import Greeting from '../Greeting/Greeting'

const Navbar: FC = () => {
  const { toggleTheme } = useThemeContext()
  const { theme } = useThemeContext()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentGreeting, setCurrentGreeting] = useState(
    greetings[currentIndex]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length)
      setCurrentIndex(randomIndex)
      setCurrentGreeting(greetings[randomIndex])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Nav>
      <Logo>
        <h3>&#10094; YASINCANDEV &#10095;</h3>
      </Logo>
      <GreetingContainer>
        <Greeting greeting={currentGreeting} />
      </GreetingContainer>

      <ThemeContainer>
        {theme === 'dark' ? (
          <Sunset onClick={toggleTheme} />
        ) : (
          <Sunrise onClick={toggleTheme} />
        )}
      </ThemeContainer>
    </Nav>
  )
}

export default Navbar
