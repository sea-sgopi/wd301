import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Signin from "./pages/signin";
import ProtectedRoute from "./ProtectedRoute";
import Notfound from './pages/Notfound';
import Signup from './pages/signup';
import Dashboard from "./pages/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

const App = () => {
  const isHeaderVisible = true;
  return (
    
     
      <div>
      {isHeaderVisible && <Header />}
      {/* <Form /> */}

        {/* <ReactPlayground /> */}
        <RouterProvider router={router} />

    </div>

    
  );
};

export default App;
