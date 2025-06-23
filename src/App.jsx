import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayouts from './components/layouts/AppLayouts';
import DashboardLayout from './components/layouts/DashboardLayout';
import CategoryPage from './pages/admin/CategoryPage';
import CheckoutsPage from './pages/admin/CheckoutsPage';
import Dashboard from './pages/admin/dashboard';
import OrdersPage from './pages/admin/OrdersPage';
import PaymentsPage from './pages/admin/PaymentsPage';
import ProductsPage from './pages/admin/ProductsPage';
import ShippingPage from './pages/admin/ShippingPage';
import UsersPage from './pages/admin/UsersPage';
import CartPage from './pages/cart';
import CategoryDetails from './pages/category';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import OrderPage from './pages/order';
import ProductDetails from './pages/product/[params]';
import ProductsPages from './pages/ProductsPages';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register';
import checkRole from './utils/CheckRole';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: checkRole,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'products',
        element: <ProductsPages />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/category/:id',
        element: <CategoryDetails />,
      },
      {
        path: 'carts',
        element: <CartPage />,
      },
      {
        path: 'orders',
        element: <OrderPage />,
      },
      {
        path: '/detail-profile',
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
      {
        path: 'payments',
        element: <PaymentsPage />,
      },
      {
        path: 'category',
        element: <CategoryPage />,
      },
      {
        path: 'shipping',
        element: <ShippingPage />,
      },
      {
        path: 'checkouts',
        element: <CheckoutsPage />,
      },
    ],
  },
]);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
