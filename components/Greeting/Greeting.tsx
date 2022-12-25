import { FC, useEffect, useState } from 'react'
import { IHelloProps } from '../../types'
import { GrettingText } from '../Navbar/styles'
import greetings from '../../data/greetings.json'

interface GreetingProps {
  greeting: IHelloProps
}

const Greeting: FC<GreetingProps> = ({ greeting }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  return <GrettingText>{greeting.hello}</GrettingText>
}

export default Greeting
