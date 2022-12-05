import { FC } from "react";
import { AboutContainer, AboutMe, AboutMeText, AboutMeTitle } from "./styles";

const AboutPage: FC = () => {
  return (
    <AboutContainer>
      <AboutMe>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeText>
          I&#39;m Yasin and I am a junior frontend developer. I&#39;m 26 years
          old and live in Izmir, Turkey.
        </AboutMeText>
        <AboutMeText>
          I take care to follow the latest developments in the frontend area and
          stay up to date. I&#39;m a social person and a team player. I like to
          take initiative and responsibility to inspire others. I like to
          communicate and I don&#39;t hesitate to acknowledge my mistakes. I
          listen carefully and I love to explain things to people. I have always
          been interested in computers since my childhood. Doing something
          related to computers has always been in me and in 2022 I made a
          decision and stepped on this path.So far, I can say that I have
          learned everything by researching on my own. I am always improving
          myself and I am open to innovations.
        </AboutMeText>
      </AboutMe>
    </AboutContainer>
  );
};

export default AboutPage;
