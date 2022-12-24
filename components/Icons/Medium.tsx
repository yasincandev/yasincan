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
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25s4.935-11 11-11m0-2C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zm20.5 3c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25s2.376-10 4.5-10m0-2c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25s-2.91-12-6.5-12zm10.877 2.667h.005-.005m-.877 2.91c.28 1.581.5 3.75.5 6.423s-.22 4.842-.5 6.423c-.28-1.581-.5-3.75-.5-6.423s.22-4.842.5-6.423m0-4.577c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25s-1.119-11-2.5-11z"></path>
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
`
