import * as React from 'react'
import { SVGProps } from 'react'
import styled from 'styled-components'

export const Resume: React.FC<SVGProps<SVGSVGElement>> = props => {
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
      <path d="M19 1c-1.094 0-2 .906-2 2H9C7.355 3 6 4.355 6 6v39c0 1.645 1.355 3 3 3h32c1.645 0 3-1.355 3-3V6c0-1.645-1.355-3-3-3h-8c0-1.094-.906-2-2-2zm0 2h12v4c0 .566-.434 1-1 1H20c-.566 0-1-.434-1-1zM9 5h8v2h-6v36h28V7h-6V5h8c.555 0 1 .445 1 1v39c0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1V6c0-.555.445-1 1-1zm4 4h4.785c.55.61 1.34 1 2.215 1h10c.875 0 1.664-.39 2.215-1H37v32H13zm12.453 5c-2.726 0-3.676 1.973-2.894 3.656-.106.098-.27.387-.262.598.023.496.379.683.543.758.062.574.43 1.12.8 1.355v1.168C23.134 22.844 20 22.461 20 25h10c0-2.54-3.133-2.156-3.637-3.465v-1.168c.375-.34.551-.86.567-1.355.164-.133.422-.301.5-.703.062-.329-.07-.594-.227-.79.492-.726.422-2.972-1.457-2.972zM17 29v2h16v-2zm0 5v2h13v-2z"></path>
    </svg>
  )
}

export const ResumeIcon = styled(Resume)`
  fill: ${props => props.theme.greetingColor};
  transition: fill 0.2s ease-in-out;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  height: 100%;
  padding: 0.4em;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
  border: 3px solid ${props => props.theme.greetingColor};
  border-radius: 50%;
  &:hover {
    transform: scale(1.1);
  }
`
