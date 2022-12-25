import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.helloColor};
  width: 100%;
  padding: 1em 0;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5em;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 100%;
  text-align: center;
`

export const LinkText = styled.p`
  color: ${props => props.theme.greetingColor};
  font-size: 0.75rem;
`
