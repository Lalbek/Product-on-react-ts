export interface INavItem {
    title: string;
    path: string;
    isLogged: boolean;

  }
  
  export interface INavbarProps {
    window?: () => Window;
  }