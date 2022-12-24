import Link from 'next/link'
import { FC } from 'react'
import { GithubIcon } from '../Icons/Github'
import { LinkedinIcon } from '../Icons/Linkedin'
import { ResumeIcon } from '../Icons/Resume'
import { Container, LinkContainer, LinkText } from './styles'
import { MediumIcon } from '../Icons/Medium'

const Contact: FC = () => {
  return (
    <Container>
      <Link
        href="https://linkedin.com/in/yasincandev"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <LinkContainer>
          <LinkedinIcon />
          <LinkText>Let&#39;s Connect! </LinkText>
        </LinkContainer>
      </Link>
      <Link
        href="https://github.com/yasincandev"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <LinkContainer>
          <GithubIcon />
          <LinkText>Review My Code</LinkText>
        </LinkContainer>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1qAf-7f6HPLbHbzNaF6fK-W9xlC2GOjfz/view"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <LinkContainer>
          <ResumeIcon />
          <LinkText>Check Out My Resume</LinkText>
        </LinkContainer>
      </Link>
      <Link
        href="https://medium.com/@yasincandev"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <LinkContainer>
          <MediumIcon />
          <LinkText>My Blog</LinkText>
        </LinkContainer>
      </Link>
    </Container>
  )
}

export default Contact
