import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

//  script to check the rendering of nav component
test('renders NavBar component correctly', () => {
  render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>,
  );

  // script to  check if the logo image is rendered correctly or not
  const logoImage = screen.getByAltText(/Logo/i);
  expect(logoImage).toBeInTheDocument();
});

// script to check if the nav toggle button is working correctly or not
test('toggles mobile menu when the button is clicked', () => {
  render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>,
  );

  // Initially, the mobile menu should not be visible
  const mobileMenu = screen.queryByTestId('mobile-menu');
  expect(mobileMenu).not.toBeVisible();

  // Click the mobile menu button
  const mobileMenuButton = screen.getByRole('button', { name: /☰/i });
  fireEvent.click(mobileMenuButton);

  // After clicking the button, the mobile menu should be visible
  expect(mobileMenu).toBeVisible();

  // Click the mobile menu button again to close it
  fireEvent.click(mobileMenuButton);

  // After clicking again, the mobile menu should not be visible
  expect(mobileMenu).not.toBeVisible();
});
