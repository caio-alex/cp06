import { render, screen } from '@testing-library/react';
import App from './App';
import styled from 'styled-components';

const App = styled.div`
margin-top:50px;`

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
