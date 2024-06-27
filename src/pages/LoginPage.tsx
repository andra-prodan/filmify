import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAppDispatch } from '../store';
import { login } from '../store/actions/authActions';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(login(values.username, values.password));
        navigate('/');
      } catch (error) {
        console.log('Login failed:', error);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="text-lg text-center text-gray-700 mb-4">Welcome! Please log in to continue.</p>
      <form onSubmit={formik.handleSubmit} className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
