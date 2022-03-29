import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayouts";
import Counter from "./Pages/Counter";
import Error from "./Pages/Error";
import Form from "./Pages/Form";
import Form1 from "./Pages/Form1";
import Home from "./Pages/Home";
import Receipts from "./Pages/Receipts";

const MyRouters = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<Counter />} />
          <Route path="/task2" element={<Receipts />} />
          <Route path="/task3" element={<Form1 />} />
          {/* <Route path="/task4" element={<Post />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRouters;
