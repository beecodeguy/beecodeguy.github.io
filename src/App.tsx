import React from "react";
import Main from "./containers/Main";
import "./App.scss";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import MyStoryScreen from "./containers/my-story/my-story.screen";
import NavLayout from "./containers/Layouts/NavLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/my-story" element={<MyStoryScreen />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
