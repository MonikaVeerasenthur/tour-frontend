import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Stack
} from "@mui/material";
import { Home, Groups, FlightTakeoff, ContactPage } from "@mui/icons-material";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PublicIcon from "@mui/icons-material/Public";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.JPG";
import "../App.css";

const navItems = [
  { label: "Home", to: "/", icon: <Home /> },
  { label: "About Us", to: "/about", icon: <Groups /> },
  {
    label: "Holidays",
    icon: <FlightTakeoff />,
    submenu: [
      { label: "International Packages", to: "/holidays/international", icon: <PublicIcon /> },
      { label: "Domestic Packages", to: "/holidays/domestic", icon: <HolidayVillageIcon /> },
    ],
  },
  { label: "Contact", to: "/contact", icon: <ContactPage /> },
];

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const open = Boolean(anchorEl);

  // Drawer content for mobile
  const drawerList = (
    <List>
      {navItems.map((item, idx) =>
        item.submenu ? (
          <div key={item.label}>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
            {item.submenu.map((sub) => (
              <ListItem
                button
                component={Link}
                to={sub.to}
                key={sub.label}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemIcon>{sub.icon}</ListItemIcon>
                <ListItemText primary={sub.label} />
              </ListItem>
            ))}
          </div>
        ) : (
          <ListItem
            button
            component={Link}
            to={item.to}
            key={item.label}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <AppBar position="static" style={{ background: "#fff", color: "#b08f5a" }}>
      <Toolbar>
        <img alt="logo" src={logo} style={{ height: "50px", width: "auto" }} />
        <Link
          to="/"
          className="company-name"
          style={{
            flexGrow: 1,
            marginLeft: 10,
            color: "#b08f5a",
            fontWeight: 700,
            fontFamily: "Montserrat",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          VIBE MILES TOUR
        </Link>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} edge="end">
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Stack direction="row">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    {item.icon}
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {item.submenu.map((sub) => (
                      <MenuItem
                        key={sub.label}
                        component={Link}
                        to={sub.to}
                        onClick={() => setAnchorEl(null)}
                      >
                        {sub.icon}
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <IconButton component={Link} to={item.to} key={item.label}>
                  {item.icon}
                </IconButton>
              )
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;