import { render } from '@testing-library/react'
import Main from '../Main'

jest.mock('next/image', () => () => null)

it('should render Main component', () => {
  const { container } = render(<Main />)
  expect(container).toMatchSnapshot()
})
