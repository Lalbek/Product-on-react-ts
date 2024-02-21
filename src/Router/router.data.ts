import { Profile } from "../pages/Profile/Profile";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Users } from "../pages/Users/Users";
import { IRouter } from "../types/router";


export const routerData: IRouter[] = [
    { component: Home, path: "/", isAuth: true },
    { component: Login, path: "/login", isAuth: false },
    { component: Profile, path:"/profile", isAuth:true },
    { component: Users, path: "/admin/users", isAuth: true },
  ];