// LoginPage.test.js (or any suitable filename)
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginPage from '../LoginPage';

jest.mock('../../store');

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('LoginPage component', () => {
  test('renders login form and handles submission', async () => {
    render(<LoginPage />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(usernameInput, 'testuser');
    userEvent.type(passwordInput, 'testpassword');

    const submitButton = screen.getByRole('button', { name: /login/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText('Username is required')).toBeNull();
      expect(screen.queryByText('Password is required')).toBeNull();
    });
  });
});
