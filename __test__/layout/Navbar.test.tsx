import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from '../../src/components/layout/Navbar';

test('Navbar have logo navigation link to /root', () => {
  render(<Navbar />);

  const HomeLogo = screen.getByText('Home');
  expect(HomeLogo).toBeInTheDocument();
  expect(HomeLogo.closest('a')).toHaveAttribute('href', '/');
});
