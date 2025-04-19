import React from "react";
import Main from "./containers/Main";
import "./App.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import MyStoryScreen from "./containers/my-story/my-story.screen";
import NavLayout from "./containers/Layouts/NavLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/my-story",
          element: <MyStoryScreen />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

  // return (
  //   <HashRouter>
  //     <Routes>
  //       <Route path="/" element={<NavLayout />}>
  //         <Route path="/" element={<Main />} />
  //         <Route path="/my-story" element={<MyStoryScreen />} />
  //       </Route>
  //     </Routes>
  //   </HashRouter>
  // );
}

export default App;
