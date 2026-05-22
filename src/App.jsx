import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages/index'
import { ErrorElement } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// loaders
import { loader as landingLoader } from './pages/Landing';
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
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
      // {
      //   path: '*',
      //   element: <Error />,
      //   // Хак: змушуємо роутер думати, що це чесна 404 помилка маршрутизації
      //   loader: () => {
      //     throw new Response("Not Found", { status: 404 });
      //   }
      // }
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