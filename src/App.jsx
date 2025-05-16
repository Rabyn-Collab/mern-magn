import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import { RouterProvider } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import HomePage from './features/home/HomePage';
import AdminPage from './features/admin/AdminPage';
import ProductAddForm from './features/admin/ProductAddForm';
import ProductEdit from './features/admin/ProductEdit';
import Product from './features/products/Product';
import CartPage from './features/carts/CartPage';
import ProfileMainPage from './features/user/ProfileMainPage.jsx';


export default function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />

        },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'admin-page', element: <AdminPage /> },
        { path: 'add-product', element: <ProductAddForm /> },
        { path: 'edit-product/:id', element: <ProductEdit /> },
        { path: 'products/:id', element: <Product /> },
        { path: 'carts', element: <CartPage /> },
        { path: 'user-profile', element: <ProfileMainPage /> },

      ]
    }
  ]);
  return <RouterProvider router={router} />
}
