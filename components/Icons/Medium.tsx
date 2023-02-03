import * as React from 'react'
import { SVGProps } from 'react'
import styled from 'styled-components'

export const Medium: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 30 30"
      {...props}
    >
      <path d="M8.5 7a8.5 8.5 0 100 17 8.5 8.5 0 100-17zM22 8a4 7.5 0 100 15 4 7.5 0 100-15zm6.5 1a1.5 6.5 0 100 13 1.5 6.5 0 100-13z"></path>
    </svg>
  )
}

export const MediumIcon = styled(Medium)`
  fill: ${props => props.theme.greetingColor};
  transition: fill 0.2s ease-in-out;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
  border: 3px solid ${props => props.theme.greetingColor};
  border-radius: 50%;
  &:hover {
    transform: scale(1.1);
  }
`
