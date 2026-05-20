import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages/index'

const router = createBrowserRouter([
  {
    path: '/comfy-store/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, element: <Landing />
      },
      {
        path: 'products', element: <Products />,
      },
      {
        path: 'products/:id', element: <SingleProduct />,
      },
      {
        path: 'cart', element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout', element: <Checkout />,
      },
      {
        path: 'orders', element: <Orders />,
      },
      {
        path: '*', // Пастка для всіх неіснуючих сторінок (404)
        element: <Error />
      }
    ]
  },
  {
    path: '/comfy-store/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/comfy-store/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App