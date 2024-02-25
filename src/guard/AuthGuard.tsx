import { FC } from "react";
import { IGuardProps } from "../types/authGuard";
import { Navigate } from "react-router-dom";

export const AuthGuard: FC<IGuardProps> = ({ children }) => {
  if (!localStorage.getItem("TOKEN")) {
    return <Navigate to="/login" />;
  }
  return children;
};
