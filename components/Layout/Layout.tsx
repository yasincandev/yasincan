import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeContext } from '../../hooks'
import GlobalStyles from '../../styles/GlobalStyles'
import { dark, light } from '../../theme'
import Navbar from '../Navbar/Navbar'
import {
  Container,
  ImageContainer,
  ContentContainer,
  GreetingMobileContainer,
} from './styles'
import * as mainImage from '../../public/assets/main.png'
import Main from '../Main/Main'
import Greeting from '../Greeting/Greeting'
import greetings from '../../data/greetings.json'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = () => {
  const { theme } = useThemeContext()
  const currentTheme = theme === 'dark' ? dark : light
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
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <GreetingMobileContainer>
          <Greeting greeting={currentGreeting} />
        </GreetingMobileContainer>
        <ContentContainer>
          <ImageContainer>
            <Image
              src={mainImage}
              alt="main"
              priority
              placeholder="blur"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              width={400}
              height={400}
            />
          </ImageContainer>
          <Main />
        </ContentContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
