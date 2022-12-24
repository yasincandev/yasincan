import { render, screen } from '@testing-library/react'
import Main from '../Main'

//svg is not supported by jest
jest.mock('next/image', () => () => null)

const text = "I'm Yasin"
const text2 =
  "a self-taught frontend developer always looking to improve my skills and push the boundaries of what's possible on the web."

test('renders main component', () => {
  render(<Main />)
  const linkElement = screen.getByText(text)
  const linkElement2 = screen.getByText(text2)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement2).toBeInTheDocument()
})

it('renders correctly', () => {
  const { container } = render(<Main />)
  expect(container).toMatchSnapshot()
})
