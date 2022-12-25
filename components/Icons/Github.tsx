import * as React from 'react'
import { SVGProps } from 'react'
import styled from 'styled-components'

export const Github: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M32 10c12.15 0 22 9.85 22 22 0 9.768-6.369 18.045-15.179 20.916l.006-.021s-1.485-.696-1.453-1.938c.035-1.367 0-4.556 0-5.727 0-2.01-1.272-3.434-1.272-3.434s9.977.112 9.977-10.533c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-.39-6.245c-1.701-.184-4.749 1.626-6.05 2.472 0 0-2.062-.846-5.492-.846s-5.492.846-5.492.846c-1.301-.846-4.348-2.656-6.05-2.472-1.518 1.86-.39 6.245-.39 6.245s-2.147 2.137-2.147 6.245c0 10.645 9.977 10.533 9.977 10.533s-1.005 1.136-1.225 2.806c-.696.236-1.721.528-2.549.528-2.165 0-3.812-2.105-4.416-3.078-.595-.96-1.815-1.766-2.953-1.766-.749 0-1.115.375-1.115.803s1.05.727 1.743 1.521c1.461 1.674 1.435 5.438 6.641 5.438.565 0 1.719-.139 2.588-.256-.005 1.185-.007 2.436.012 3.167.031 1.242-1.453 1.938-1.453 1.938l.006.021C16.369 50.045 10 41.768 10 32c0-12.15 9.85-22 22-22z"></path>
    </svg>
  )
}

export const GithubIcon = styled(Github)`
  fill: ${props => props.theme.greetingColor};
  transition: fill 0.2s ease-in-out;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;

  transition: transform 0.2s ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
  border: 3px solid ${props => props.theme.greetingColor};
  border-radius: 50%;
  &:hover {
    transform: scale(1.1);
  }
`
