import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./router.data";
import { AuthGuard } from "../guard/AuthGuard";

export const Router = () => {
  return (
    <Routes>
      {routerData.map((item, index) => {
        const Component = item.component;
        if (item.isPublish) {
          return <Route path={item.path} element={<Component />} key={index} />;
        } else {
          return (
            <Route
              path={item.path}
              element={
                <AuthGuard>
                  <Component />
                </AuthGuard>
              }
              key={index}
            />
          );
        }
      })}
    </Routes>
  );
};
