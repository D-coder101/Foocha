import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import SpinnerFullPage from "./components/SpinnerFullPage";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TopScroller from "./components/TopScroller";

// const AppLayout = lazy(() => import("./ui/AppLayout"));
// const Login = lazy(() => import("./pages/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./features/checkout/Checkout"));
const CheckoutDetails = lazy(
  () => import("./features/checkout/CheckoutDetails")
);
const OrderConfirmation = lazy(
  () => import("./features/checkout/OrderConfirmation")
);
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: (
      <>
        <TopScroller />
        <AppLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        children: [
          {
            // path: "/checkout",
            index: true,
            element: <CheckoutDetails />,
          },
          // {
          //   path: "payment",
          //   element: <CheckoutPayment />,
          // },
        ],
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
