import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages/index'

const router = createBrowserRouter([
  {
    path: '/',
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
        path: '*',
        element: <Error />,
        // Хак: змушуємо роутер думати, що це чесна 404 помилка маршрутизації
        loader: () => {
          throw new Response("Not Found", { status: 404 });
        }
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
], {
  basename: '/comfy-store/' // ОСЬ ЦЕЙ РЯДОК МАЄ БУТИ ОБОВ'ЯЗКОВО!
});

function App() {

  return <RouterProvider router={router} />
}

export default App