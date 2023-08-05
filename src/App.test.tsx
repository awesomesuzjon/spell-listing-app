import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
    render(<App />);
    const navBarElement = screen.getByText(/NavBar/i);
    const spellListElement = screen.getByText(/Spell List/i);
    expect(navBarElement).toBeInTheDocument();
    expect(spellListElement).toBeInTheDocument();
});
