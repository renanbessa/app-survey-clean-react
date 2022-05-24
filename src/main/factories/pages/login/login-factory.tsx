import { Login } from "@/presentation/pages";
import { makeLoginValidation } from "./login-validation-factory";
import React from "react";
import { makeRemoteAuthentication } from "@/main/factories/usecases/authentication/remote-authentication";

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  );
};
