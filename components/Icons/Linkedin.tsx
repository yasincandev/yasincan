import * as React from 'react'
import { SVGProps } from 'react'
import styled from 'styled-components'

export const Linkedin: React.FC<SVGProps<SVGSVGElement>> = props => {
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
      <path d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm-9 8c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-2 5a1 1 0 00-1 1v15a1 1 0 001 1h4a1 1 0 001-1V20a1 1 0 00-1-1h-4zm8 0a1 1 0 00-1 1v15a1 1 0 001 1h4a1 1 0 001-1v-7.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V35a1 1 0 001 1h4a1 1 0 001-1v-8.5c0-4.13-3.37-7.5-7.5-7.5-1.286 0-2.44.416-3.5.99a1 1 0 00-1-.99h-4zm-7 2h2v13h-2V21zm8 0h2v.816a1 1 0 001.693.721A5.464 5.464 0 0130.5 21c3.05 0 5.5 2.45 5.5 5.5V34h-2v-6.5c0-2.47-2.03-4.5-4.5-4.5S25 25.03 25 27.5V34h-2V21z"></path>
    </svg>
  )
}

export const LinkedinIcon = styled(Linkedin)`
  fill: ${props => props.theme.greetingColor};
  transition: fill 0.2s ease-in-out;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;
`
