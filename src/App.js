import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { store, persistor } from "./Redux/store";
import Discription from "./components/Discription/Discription";
import TabBar from "./components/TabBar/TabBar";
// import persistor from "./Redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavBar />
          <Discription />
          <TabBar />
        </PersistGate>
      </Provider>
    </>
  );
}
