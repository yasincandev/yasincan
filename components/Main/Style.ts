import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: 100%;
  font-weight: 500;

  p:first-child {
    font-weight: 600;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`

export const InfoText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.modeColor};
  padding: 0 1rem;
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`
