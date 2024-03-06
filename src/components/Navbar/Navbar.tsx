import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { INavbarProps } from "../../types/navbar";
import { navItems } from "./navbar.data";
import { useTokenStore } from "../../stores/token";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export function Navbar(props: INavbarProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { token, setToken, logOut } = useTokenStore();

  useEffect(() => {
    const tokenFromLocaleStorage = localStorage.getItem("TOKEN");
    if (tokenFromLocaleStorage) {
      setToken(tokenFromLocaleStorage);
    }
  }, []);

  const newNavItems = navItems.filter((item) => {
    if (!token && !item.isLogged) {
      return true;
    } else if (token && item.path !== "/login") {
      return true;
    } else {
      return false;
    }
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FC Madrid
      </Typography>
      <Divider />
      <List>
        {newNavItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.path}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={logOut}
          >
            FC Madrid
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {newNavItems.map((item) => (
              <Button key={item.title} sx={{ color: "#fff" }}>
                <Link to={item.path}> {item.title}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
