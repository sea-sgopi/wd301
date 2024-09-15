import {
  createBrowserRouter,
  Navigate, 
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from './pages/Notfound';
import ReactPlayground from "./ReactPlayground";
import Form from './Form';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
]);


const App = () => {
  const isHeaderVisible = true;
  return (
    
     
      <div>
      {isHeaderVisible && <Header />}
      <Form />

        <ReactPlayground />
        <RouterProvider router={router} />

    </div>

    
  );
};

export default App;
