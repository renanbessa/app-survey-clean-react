import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Login } from "@/presentation/pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
