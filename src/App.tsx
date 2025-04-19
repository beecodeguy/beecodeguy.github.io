import React from "react";
import Main from "./containers/Main";
import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyStoryScreen from "./containers/my-story/my-story.screen";
import NavLayout from "./containers/Layouts/NavLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/my-story" element={<MyStoryScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
