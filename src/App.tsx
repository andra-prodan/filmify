import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { router } from './utils/router';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
