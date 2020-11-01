import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './App';

const server = setupServer(
  rest.get('https://saloon-api.azurewebsites.net/single', (req, res, ctx) => {
    return res(ctx.json({ name: 'A single drink' }))
  }),
  rest.get('https://saloon-api.azurewebsites.net/double', (req, res, ctx) => {
    return res(ctx.json({ name: 'A double drink' }))
  }),
  rest.get('https://saloon-api.azurewebsites.net/bottle', (req, res, ctx) => {
    return res(ctx.json({ name: 'A bottle drink' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('user can order a single', async () => {
  render(<App />);

  //ensure the single button is shown
  const singleButton = screen.getByText(/single/i);
  expect(singleButton).toBeInTheDocument();
  
  fireEvent.click(singleButton);
  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('A single drink')
  fireEvent.click(screen.getByRole('alert'));
});

test('user can order a double', async() => {
  render(<App />);

  //ensure the double button is shown
  const doubleButton = screen.getByText(/double/i);
  expect(doubleButton).toBeInTheDocument();

  fireEvent.click(doubleButton);
  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('A double drink')
  fireEvent.click(screen.getByRole('alert'));
});

test('user can order a bottle', async() => {
  render(<App />);

  //ensure the bottle button is shown
  const bottleButton = screen.getByText(/bottle/i);
  expect(bottleButton).toBeInTheDocument();

  fireEvent.click(bottleButton);
  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('A bottle drink')
  fireEvent.click(screen.getByRole('alert'));
});
