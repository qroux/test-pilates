import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider as AppProvider } from '../../src/context/AppContext';

import Home from '../../pages/index';

beforeEach(() => {
  const observe = jest.fn();

  window.IntersectionObserver = jest.fn(function () {
    this.observe = observe;
  });

  render(
    <AppProvider>
      <Home />
    </AppProvider>
  );
});

test('Index Page can access context', () => {
  const title = screen.getByText('deco');
  expect(title).toBeInTheDocument();
});

test('Index Page can switch loggedIn state with logIn dispatch function', () => {
  const title = screen.getByText('deco');
  expect(title).toBeInTheDocument();

  const btn = screen.getByText('connect');
  // expect(btn).toBeNull();
  fireEvent.click(btn);

  const newTitle = screen.getByText('co');
  expect(newTitle).toBeInTheDocument();
  expect(newTitle.textContent).toEqual('co');
});
