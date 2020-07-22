import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AddButton from "./components/addbutton/AddButton";
import ConfirmOverlay from "./components/confirmoverlay/ConfirmOverlay";
import ClearListButton from "./components/clearlistbutton/ClearListButton";

function App() {
  return (
    <div className="App">
      <Header />
      <ClearListButton />
      <ConfirmOverlay />
      <AddButton />
    </div>
  );
}

export default App;
