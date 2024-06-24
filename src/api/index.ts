export const fakeLoginAPI = async (username: string, password: string) => {
  return new Promise<{ success: boolean; user?: { username: string }; message?: string }>((resolve) => {
    if (username === 'user' && password === 'password') {
      resolve({ success: true, user: { username: 'user' } });
    } else {
      resolve({ success: false, message: 'Invalid credentials' });
    }
  });
};

export const fakeLogoutAPI = async () => {
  return new Promise<{ success: boolean }>((resolve) => {
    resolve({ success: true });
  });
};
