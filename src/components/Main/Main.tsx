import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import {
  Container,
  GreetingContainer,
  GreetingText,
  Info,
  InfoText,
} from "./Style";
import greetings from "../../data/greetings.json";
import { IHelloProps } from "../../types";

const Main: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(
    greetings[currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setCurrentIndex(randomIndex);
      setCurrentGreeting(greetings[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  type GreetingProps = {
    greeting: IHelloProps;
  };

  const Greeting: FC<GreetingProps> = ({ greeting }) => {
    return (
      <GreetingContainer>
        <GreetingText>{greeting.hello}</GreetingText>
        <Info>
          <InfoText> Welcome! Hope you&#39;re doing well.</InfoText>
          <InfoText> I&#39;m Yasin. I build things for the web.</InfoText>
        </Info>
      </GreetingContainer>
    );
  };

  return (
    <Container>
      <Greeting greeting={currentGreeting} />
    </Container>
  );
};

export default Main;
