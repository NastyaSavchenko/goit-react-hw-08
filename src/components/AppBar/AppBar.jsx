import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../redux/auth/selectors";

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
import Button from "@mui/material/Button";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const drawerWidth = 240;

const AppBarComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    { name: "Home", path: "/" },
    ...(isLoggedIn ? [{ name: "Contacts", path: "/contacts" }] : []),
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: "center",
                color: "#fff",
                "&:hover": { color: "#09263e" },
                "&.active": { color: "#09263e" },
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <Box sx={{ textAlign: "center", py: 2 }}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#2196f3" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: "#fff",
                "&:hover": { color: "#09263e" },
                "&.active": { color: "#09263e" },
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Button>
            {isLoggedIn && (
              <Button
                component={NavLink}
                to="/contacts"
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#09263e" },
                  "&.active": { color: "#09263e" },
                }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacts
              </Button>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#2196f3",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Toolbar />
    </Box>
  );
};

export default AppBarComponent;
