import { render } from '@testing-library/react'
import Contact from '../Contact'

it('should render Contact component', () => {
  const { container } = render(<Contact />)
  expect(container).toMatchSnapshot()
})
