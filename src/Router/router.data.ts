import { Profile } from "../pages/Profile/Profile";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Users } from "../pages/Users/Users";
import { IRouter } from "../types/router";


export const routerData: IRouter[] = [
    { component: Home, path: "/", isPublish: true },
    { component: Login, path: "/login", isPublish: true },
    { component: Profile, path:"/profile", isPublish:false },
    { component: Users, path: "/admin/users", isPublish: false },
  ];