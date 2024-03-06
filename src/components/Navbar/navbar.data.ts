import { INavItem } from "../../types/navbar";

export const navItems: INavItem[] = [
    { title: "Home", path: "/" , isLogged:false },
    { title: "Profile", path: "/profile", isLogged:true },
    { title: "Users", path:"/admin/users", isLogged:true },
    { title: "Login", path: "/login",isLogged:false  },
  ];