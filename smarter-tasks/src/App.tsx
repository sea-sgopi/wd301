// import Task from "./Task"
// import TaskApp from "./TaskApp";
// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from "./pages/TaskDetailsPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />)
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
