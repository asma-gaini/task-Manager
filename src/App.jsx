import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AppLayout from "./ui/AppLayout";
import MainPage, { loader as taskLoader } from "./feature/MainPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", loader: taskLoader, element: <MainPage /> }],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
