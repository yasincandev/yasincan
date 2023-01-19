import Link from "next/link";
import { FC } from "react";
import { GithubIcon } from "../Icons/Github";
import { LinkedinIcon } from "../Icons/Linkedin";
import { ResumeIcon } from "../Icons/Resume";
import { Container, LinkContainer, LinkText } from "./styles";
import { MediumIcon } from "../Icons/Medium";

const Contact: FC = () => {
  return (
    <Container>
      <LinkContainer>
        <Link
          href='https://linkedin.com/in/yasincandev'
          target='_blank'
          style={{ textDecoration: "none" }}
        >
          <LinkedinIcon />
          <LinkText>Let&#39;s Connect! </LinkText>
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          href='https://github.com/yasincandev'
          target='_blank'
          style={{ textDecoration: "none" }}
        >
          <GithubIcon />
          <LinkText>Review My Code</LinkText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          href='https://drive.google.com/file/d/18-ciaK69f05UlEUF7crWjYCfLvi3L7_N/view?usp=sharing'
          target='_blank'
          style={{ textDecoration: "none" }}
        >
          <ResumeIcon />
          <LinkText>Check Out My Resume</LinkText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          href='https://medium.com/@yasincandev'
          target='_blank'
          style={{ textDecoration: "none" }}
        >
          <MediumIcon />
          <LinkText>My Blog</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default Contact;
