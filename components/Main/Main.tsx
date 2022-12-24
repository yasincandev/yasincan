import { FC } from 'react'
import { Container, InfoText } from './Style'
import Contact from '../Contact/Contact'

const Main: FC = () => {
  return (
    <Container>
      <InfoText>I&apos;m Yasin</InfoText>
      <InfoText>
        a self-taught frontend developer always looking to improve my skills and
        push the boundaries of what&apos;s possible on the web.
      </InfoText>
      <Contact />
    </Container>
  )
}

export default Main
